const fs = require('fs');


fs.readFile('file.txt', (err, data)=>{
    if(err) throw err;
    console.log(data);

    fs.unlink('file.txt',(unlinkErr)=>{
        if(unlinkErr) throw unlinkErr;
        console.log('Arquivo excluído com sucesso!')
    });
});

//Evitar misturar métodos no-blockings e blockings