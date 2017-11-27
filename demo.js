var fs = require('fs')
var dirName = process.argv[2] // 你传的参数是从第 2 个开始的
fs.mkdirSync("./" + dirName) // mkdir $1
process.chdir("./" + dirName) // cd $1
fs.writeFileSync("./index.html", "")