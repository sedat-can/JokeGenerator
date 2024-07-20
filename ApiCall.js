


const https = require('https');

class ApiCaller {
    constructor(apiUrl) {
        this.apiUrl = apiUrl;
    }

    fetchData() {
        https.get(this.apiUrl, (response) => {
            let data = '';

            response.on('data', (chunk) => {
                data += chunk;
            });

            response.on('end', () => {
                try {
                    const parsedData = JSON.parse(data);
                    console.log('Joke:', parsedData.value);
                } catch (error) {
                    console.error('Error parsing JSON:', error);
                }
            });
        }).on('error', (error) => {
            console.error('Error with request:', error);
        });
    }
}



module.exports = ApiCaller;

