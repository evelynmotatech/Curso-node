function sum(x){
    return new Promise((resolve, reject) => { 
        if(Number(x) === NaN|| Number(x) == undefined || typeof x != 'number'){
            reject(`O valor ${x} não é um número`);
        }  
        setTimeout(()=>{
            resolve(x + 5000);
        }, 3000);
    });
       
}

async function main(){
    try{
        const resultado = await sum(350);
        console.log(`Resultado com Async/Await: ${resultado}`);	
    }catch(err){
        console.log(`Erro: ${err}`);
    }
}

main();