
var Persona = {
    nombre: "Fabian",
    apellido: "Sanchez",
    edad :  35
}

var Persona2 = {
    nombre: "Fabian",
    apellido: "Sanchez",
    edad :  35
}



function imprimirNombreEnMayusculas(Persona){
    // var nombre = Persona.nombre es igual al codigo de abjao 
    
    var {nombre} = Persona
console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(Persona)


function cumpleanos(Persona){
    // si pongo var edad = Persona.edad + 1 se modifica mi objeto
    // para que no retornamos un nuevo objeto con los mismos parametrod
    return {
        ...Persona,
        edad : Persona.edad + 1
    }
}


// se puede asignar funciones a variables tambien 
/*var esMayorEdad = function (Persona){
    return Persona.edad >=18
}


// son funciones iguales 
var esMayorEdad = Persona =>{
    return Persona.edad >=18
}*/

// el que sigue es igual 
var esMayorEdad = Persona => Persona.edad >= 18

function imprimirSiEsMayor(Persona){
     esMayorEdad?console.log("Es mayor de edad"):console.log("Es menor de edad");
}



var KarlxS = {
    nombre: 'KarlxS',
    apellido: 'Guzman',
    edad: 23,
    peso: 75
}

console.log(`Al inicio del año ${KarlxS.nombre} pesa ${KarlxS.peso}kg`)

const INCREMENTO_PESO=0.2
const DIAS_DEL_ANO=365

const aumentarDePeso = persona =>persona.peso += INCREMENTO_PESO
const adelgazar = persona =>persona.peso -= INCREMENTO_PESO
const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4 
/*for (var i=1; i<=DIAS_DEL_ANO; i++) {
    var random = Math.random()

    if (random<0.25) aumentarDePeso(KarlxS)
    else if (random<0.5) adelgazar(KarlxS)
}*/

const META = KarlxS.peso - 3
var dias = 0

while (KarlxS.peso > META) {
    if(comeMucho()){
        aumentarDePeso(KarlxS)
    }
    if(realizaDeporte())
        adelgazar(KarlxS)

        dias += 1
}

console.log(`Pasaron ${dias} dias hasta que  ${KarlxS.nombre} pesa ${KarlxS.peso} 3kg`)

