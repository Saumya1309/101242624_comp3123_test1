//Question 3: File Module

// Create Log files

const fs = require('fs') 
// Create Logs directory, if it does not exist
if(!fs.existsSync("Logs")) {
fs.mkdirSync("Logs");
}

process.chdir("Logs");
// Create 10 log files
for(let i = 0; i < 10; i++) {
const filename = `log${i}.txt`;
fs.writeFile(filename, 'some text', (err) => {
if (err) {
throw err;
}
});
console.log(filename);
}


// Remove Log files

const fs = require('fs') 
const path = require('path'); 

// If Logs directory exists
if(fs.existsSync("Logs")) {
fs.readdir("Logs", (err, files) => {
if (err) throw err;
for (const file of files) {

const filepath = path.join("Logs", file);
fs.unlink(filepath, err => {
if (err) throw err;
});

// Print out the file name to console
console.log(`delete files...${file}`);
}
// Remove the Logs directory
fs.rmdirSync("Logs");
});
}