const crypto = require('crypto');
const start = Date.now();

function logHashTime(){
    crypto.pbkdf2('a', 'b',  100000, 512, 'sha512', ()=>{
        console.log(`Hash: ${Date.now() - start}`);
    })
}

//A 5ª execução demora mais para acontecer porque o Node.js é single thread e usa thread pool, com 4 slots.
logHashTime();
logHashTime();
logHashTime();
logHashTime();
logHashTime();