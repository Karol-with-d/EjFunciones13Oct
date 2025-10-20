
//DESCUENTO DE UN PRODUCTO
import readline from 'readline'

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

function calcularDescuento(precio,descuento){
    precio = parseFloat(precio)
    descuento = parseFloat(descuento)

    let des = precio * descuento

    let totaPagar = precio - des

    console.log(`El descuento del producto obtenido es de $: ${des} \n total a pagar es de $: ${totaPagar}`)

}

rl.question("Ingrese el precio del productp: ", precio=>{
 rl.question("Ingrese el descuento del producto, expresadp en decimales Ej: 0.20 para el 20%", des=>{
    calcularDescuento(precio,des)
    rl.close()
 })

})