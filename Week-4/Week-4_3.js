const path = require('path');
const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function checkSameFile(path1, path2) {
  const resolvedPath1 = path.resolve(path1);
  const resolvedPath2 = path.resolve(path2);

  if (fs.existsSync(resolvedPath1) && fs.existsSync(resolvedPath2)) {
    const stats1 = fs.statSync(resolvedPath1);
    const stats2 = fs.statSync(resolvedPath2);

    if (stats1.ino === stats2.ino) {
      console.log('The file paths refer to the same file.');
    } else {
      console.log('The file paths do not refer to the same file.');
    }
  } else {
    console.log('One or both of the files do not exist.');
  }
}

function extractFileExtension(filePath) {
  const fileExtension = path.extname(filePath);

  if (fileExtension) {
    console.log('File Extension:', fileExtension);
  } else {
    console.log('The file does not have an extension.');
  }
}

rl.question('Enter file path 1: ', (filePath1) => {
  rl.question('Enter file path 2: ', (filePath2) => {
    checkSameFile(filePath1, filePath2);

    rl.question('Enter a file path: ', (filePath) => {
      extractFileExtension(filePath);

      rl.close();
    });
  });
});