const path = require('path');
const readline = require('readline');
const fs = require('fs');

// Create readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to extract and display directory name and base name from file path
function extractPathComponents(filePath) {
    const dirname = path.dirname(filePath);
    const basename = path.basename(filePath);

    console.log('Directory Name:', dirname);
    console.log('Base Name:', basename);
}

// Function to check if a file exists at the given file path
function checkFileExists(filePath) {
    fs.access(filePath, fs.constants.F_OK, (err) => {
        if (err) {
            console.log('The file does not exist.');
        } else {
            console.log('The file exists.');
        }
    });
}

// Prompt user for file path
rl.question('Enter a file path: ', (filePath) => {
    // Extract and display directory name and base name
    extractPathComponents(filePath);

    // Check if file exists
    checkFileExists(filePath);

    // Close readline interface
    rl.close();
});
