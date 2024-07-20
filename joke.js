const ApiCaller= require('./ApiCall')
const readline = require('readline');

class checker  extends (ApiCaller) {
    constructor(lis) {
        super();
        this.lis = lis;
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }

    isStringInList(stringToCheck) {
        return this.lis.includes(stringToCheck);
    }

    getRandomJoke() {
        this.rl.question('" hello you can choose following categories: "animal", "career", "celebrity", "dev", "explicit", "fashion", "food", "history", "money", "movie", "music", "political", "religion", "science", "sport", "travel" : ', (input) => {
            if (this.isStringInList(input)) {
                const api = new ApiCaller(`https://api.chucknorris.io/jokes/random?category=${input}`);

                api.fetchData();
            } else {
                console.log(`${input} is not a valid category`);
            }
            this.rl.close();
        });
    }



}

const lis = ["animal", "career", "celebrity", "dev", "explicit", "fashion", "food", "history", "money", "movie", "music", "political", "religion", "science", "sport", "travel"];


const categories = new checker(lis);

categories.getRandomJoke();




