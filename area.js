
//AREA DE RECTANGULO
import readline from 'readline'

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

function CalcularArea(base,altura){

    let calculo= parseFloat(base*altura);
    return calculo
}

rl.question("Ingrese la base del rectangulo ", base=>{
    rl.question("Ingrese la atura del rectangulo ", altura=>{
        let result= CalcularArea(base,altura)
        console.log(`El area del rectangulo es: ${result}`)
        
        rl.close()
    })
    
})