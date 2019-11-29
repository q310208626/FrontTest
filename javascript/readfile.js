let fileReader = require('fs');
// fileReader.readFile('server.js',function(err,data){
//     console.log(data);
// });
// console.log("Process end");

let syncDate = fileReader.readFileSync('server.js');
console.log(syncDate.toString());
console.log("Process end");