var fs = require('fs');

function readFile() {
 return new Promise(function (resolve, reject){
    fs.readFile('./f1.txt',function read(err, data){
      if(err) {
        reject(err)
      }
      resolve(data);
    })
  })
}

function writeFile(data) {
  return new Promise(function (resolve, reject) {
    fs.appendFile('./f2.txt',data, 'utf8',
        function(err) {        
          if (err) reject(err);
        console.log("Data is appended to file successfully in second file.")
        resolve("first copy completed");
    })
  })
}

function readFile2() {
  return new Promise(function (resolve, reject){
    fs.readFile('./f2.txt',function read(err, data){
      if(err) {
        reject(err);
      }
      resolve(data);
    })
  })
}

function appended(data){
  return new Promise(function (resolve, reject){
    fs.appendFile('./f3.txt',data,'utf8',
      function(err) {
        if (err) reject(err);
        resolve("completed");
    })
  })
}


readFile()
.then((data) => writeFile(data))
.then(() => readFile2())
.then((data) => appended(data))
.catch((err)=> console.log(err))
