//const fs = require('fs');
console.log('string 1');
fs.readFile('./file.bin', (err, data) => {
    if (!err) console.log(`Data length: ${data.length} bytes`);
    else console.error(err);
    });
    console.log('String 2');