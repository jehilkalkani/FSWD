const url = require('url');
const readline = require('readline');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function parseURL(inputURL) {
    const parsedURL = new URL(inputURL);

    console.log('Protocol:', parsedURL.protocol);
    console.log('Host:', parsedURL.host);
    console.log('Path:', parsedURL.pathname);
    console.log('Query Parameters:', parsedURL.searchParams.toString());
}


function resolveURL(baseURL, relativePath) {
    const resolvedURL = new URL(relativePath, baseURL);
    console.log('Absolute URL:', resolvedURL.href);
}


rl.question('Enter a URL: ', (inputURL) => {

    parseURL(inputURL);


    rl.question('Enter a base URL: ', (baseURL) => {
        rl.question('Enter a relative path: ', (relativePath) => {

            resolveURL(baseURL, relativePath);


            rl.close();
        });
    });
});
