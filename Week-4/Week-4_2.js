const querystring = require('querystring');
const readline = require('readline');


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function extractQueryParams(url) {
  const queryString = url.split('?')[1]; 
  const queryParams = querystring.parse(queryString); 

  console.log('Key-Value Pairs:');
  for (const key in queryParams) {
    console.log(`${key}: ${queryParams[key]}`);
  }
}

rl.question('Enter a URL with a query string: ', (inputURL) => {

  extractQueryParams(inputURL);


  rl.close();
});