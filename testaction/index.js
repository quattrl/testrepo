console.log("in js")
const fs = require('fs');
console.log("has fs")
const data = fs.readFileSync("README.md")
console.log("data:", data)