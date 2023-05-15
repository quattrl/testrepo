const fs = require('fs');

const data = fs.readFileSync("README.md")
console.log("data:", data)