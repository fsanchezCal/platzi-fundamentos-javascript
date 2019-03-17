const API_URL = "https://swapi.co/api/"
const PEOPLE_URL = "people/:id"

//const lukeUrl = `${API_URL}${PEOPLE_URL.replace(":id",1)}`
// este es para indicarle a jquery que request se hace a otra pagina
const opts = { crossDomain:true }


// llamado de server  e impresion de datos 
/*$.get(lukeUrl, opts,function(data){
    console.log(`yo soy, ${data.name}`)

});*/

// Mismo llamdo  pero la funciom se llama como parametro

/*const obtenerPeople = function (data) {
    console.log(`yo soy, ${data.name}`)
}
*/


// Mismo llamado pero manda el id como parametro 
/*function obtenerPersonaje(id) {
    const url = `${API_URL}${PEOPLE_URL.replace(":id",id)}`
    $.get(url, opts, obtenerPeople)
}*/

// llamado de la funcion anterior im primiendo diferente orden  
/*obtenerPersonaje(1);
obtenerPersonaje(2);
obtenerPersonaje(3);*/


// Controlanado el oreden de los callback  de impresion  
/*function obtenerPersonaje(id,callback) {
    const url = `${API_URL}${PEOPLE_URL.replace(":id",id)}`
    $.get(url, opts,function(data){
        console.log(`yo soy, ${data.name}`)
        if (callback) {
            callback()
        }
    
    });
}*/


/*obtenerPersonaje(1 ,function () {
    obtenerPersonaje(2,function () {
        obtenerPersonaje(3)
    })
})*/



// manejar el callback por parametro y manejo de errores
/*function obtenerPersonaje(id,callback) {
    const url = `${API_URL}${PEOPLE_URL.replace(":id",id)}`
    $.get(url, opts,callback).fail(() => {
        console.log(` Seucedio un error. no se pudo obtener el personaje ${id}`)
    })
        
}*/


/*obtenerPersonaje(1 ,function (personaje) {
    console.log(`yo soy, ${personaje.name}`)

    obtenerPersonaje(2,function (personaje) {
        console.log(`yo soy, ${personaje.name}`)

        obtenerPersonaje(3, function (personaje) {
            console.log(`yo soy, ${personaje.name}`)

            obtenerPersonaje(4,function (personaje) {
                console.log(`yo soy, ${personaje.name}`)
            })
        })
    })
})*/

/*


// Utilizacion de promesas
En esta clase veremos las promesas, que son valores que aun no conocemos. 
Las promesas tienen tre estados:

    pending   cuando se crea un apromesa 
    fullfilled   cuanod se ejecuta la promesa exitosa 
    rejected   cuando ocurre un error 

Las promesas se invocan de la siguiente forma:

new Promise( ( resolve, reject ) => {
  // --- llamado asíncrono
  if( todoOK ) {
     // -- se ejecutó el llamado exitosamente
     resolve()
  } else {
     // -- hubo un error en el llamado
     reject()
  }
} )



*/

/*function obtenerPersonaje(id) {

    return new Promise((resolve, reject)=>{
        const url = `${API_URL}${PEOPLE_URL.replace(":id",id)}`
        $.get(url, opts,function (data) {
            resolve(data)
        })
        .fail(() => reject(id))
    })
        
}*/
/*
obtenerPersonaje(1)
.then(function (personaje) {
    console.log(`El personaje es ${personaje.name}`)
    return obtenerPersonaje(2)
})
.then(personaje => {
    console.log(`El personaje es ${personaje.name}`)
    return obtenerPersonaje(3)
})
.then(personaje =>{
    console.log(`El personaje es ${personaje.name}`)
    return obtenerPersonaje(4)
})
.then(personaje =>{
    console.log(`El personaje es ${personaje.name}`)
    return obtenerPersonaje(5)
})
.catch(function (id){
    console.log(`Sucedio un error con el perosonaje ${id}`)
}) 

*/
    
// Promesas en paralelo 

/*var ids = [1,2,3,4,5,6,7]
var promesas = ids.map(function (id) {
    return obtenerPersonaje(id)
})

Promise.all(promesas)
.then(pesonajes => console.log(pesonajes))
.catch(function (id) {
    console.log(`Sucedio un error con el perosonaje ${id}`)
})*/




// Clase async await 
async function ObtenerPersonajes() {
    var ids = [1,2,3,4,5,6,7]
    var promesas = ids.map(id => obtenerPersonaje(id)) 
    try {
        var personajes = await Promise.all(promesas) 
    } catch (id) {
        console.log(`Sucedio un error con el perosonaje ${id}`)
    }
    
}

obtenerPersonaje();