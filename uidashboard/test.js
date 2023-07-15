const fs = require("fs");
const os = require("os");
const path = require("path")

/*
========== Operating System =====================

const usedmemory = os.freemem();
const totalmemory = os.totalmem();
console.log(`Total Memory: ${totalmemory/1024/1024/1024}`);
console.log(`Free Memory: ${usedmemory/1024/1024/1024}`);
console.log(`Used Memory: ${totalmemory/1024/1024/1024 - usedmemory/1024/1024/1024}`);

*/

// ========== File System =====================
//fs.readFile('myfrsittextilefile.txt','UTF-8',(err,data)=>{console.log(data)})
//const varr = fs.readFile('myfrsittextilefile.txt','utf-8')
//console.log(varr);
//console.log("hi...");


//fs.mkdir('nodejsdir',(err)=>{ console.log('file created')});
//fs.writeFile("./nodejsdir/file.js","my frist file in node js",(err)=>{console.log("file created")})
//fs.rename("./nodejsdir/file.js","./nodejsdir/file.txt",(err)=>{console.log("file renamed now please check")})
//fs.appendFile("./nodejsdir/file.txt"," .... new data",(err)=>{console.log("file data appended")})