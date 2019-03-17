var nombre = "Fabian", apellido = "Sanchez"

var nombreEnMayuscula = nombre.toUpperCase()

var primeraLetraDelNOmbre = nombre.charAt(0)

var nombreCompleto = `${nombre} ${apellido.toUpperCase()}`

var edad = 27

edad += 1

var peso = 70 

peso -= 2

var precio = 200.3

var total  = Math.round(precio * 100 * 3) /100

// cantidad de decimales que ocupa 

var totalStr = total.toFixed(2);
var total2 = parseFloat(totalStr)

function imprimirEdad(){
    console.log(nombreCompleto)
}