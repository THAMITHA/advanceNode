const fs = require('fs') 

//fs.writeFileSync('notes.txt','my name is thamitha')
fs.appendFileSync('notes.txt',' this is to append to existing file system.')