var signo = prompt(`¿Cual es tu signo?`);

console.log("tu signo es " + signo)

var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    altura: 1.72
}

var alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86,
    cantidadDeLibros: 78
}

var martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85,
    cantidadDeLibros: 132
}

var dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71,
    cantidadDeLibros: 90
}

var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56,
    cantidadDeLibros: 91
}

var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76,
    cantidadDeLibros: 182
}



   const esAlta = (objeto) =>{
       return objeto.altura > 1.8
   }

    var personas = [sacha,alan,martin,dario,vicky,paula]

   var  personasAltas = personas.filter(esAlta)


   /*function pasarAlturasACms(persona){
       
       return {
        ...persona,
         altura :persona.altura *= 100
       }
         
   }*/


   const pasarAlturasACms = persona =>({
        ...persona,
        altura :persona.altura *= 100
   })


   var personasCms = personas.map(pasarAlturasACms)

   console.log(personasCms)
   


   // PRACTICA CON EL CICLO FOR
// var acum = 0;

// for (var i = 0; i < personas.length; i++){
// 	var acum = acum + personas[i].libros
// }


function reducer(variable,objeto) {
    return variable + objeto.cantidadDeLibros
}


var totalDeLibros = personas.reduce(reducer,0)