const fs = require('fs');


console.log((process.hrtime()[0]/[60]).toFixed(5));
console.log("Antes da leitura do arquivo");

const dados = fs.readFile('file2.txt', (err, data)=>{
 if(err) throw err;
 console.log('Executando a leitura de file.txt')

});

console.log("Após a leitura do arquivo");
console.log((process.hrtime()[0]/[60]).toFixed(5));