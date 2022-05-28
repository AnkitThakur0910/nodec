const app = require("./app");

//console.log(app.name);

// let arr = [1,2,3,4,5,3]

// const bc = arr.filter((item)=>{return item===3});

// console.log(bc);
//console.log(__dirname,__filename);
// const fs =require('fs');

// fs.writeFileSync('ankit.txt','my name is ankit');
// http = require('http');

// http.createServer((req,resp)=>{
//     resp.write("<h1> name is ankit</h1>");
//     resp.end();
// }).listen(4300);
let arr = [1,3,4,5,6,6]

const i = arr.map((f)=>{return f>3});
console.log(i);