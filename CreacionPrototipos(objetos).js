
class Persona{
    constructor(nombre, apellido, altura){
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
      }

    saludar(fn){
        console.log(`Hola, me llamo ${this.nombre + " " + this.apellido}`)
        if (fn) {
            fn(this.nombre,this.apellido)
        }
    }
    soyAlto(){
        return this.altura > 1.8
    }

}

class Desarrollador extends Persona{
    constructor(nombre, apellido, altura){
        super(nombre,apellido,altura)
        
      }

      saludar(fn){
        console.log(`Hola, me llamo ${this.nombre + " " + this.apellido} soy desarrollador`)
        if (fn) {
            fn(this.nombre,this.apellido,true)
        }
      }
}

function responderSaludo(nombre,apellido,esDev) {
    debugger
    console.log(`Buen día ${nombre} ${apellido}`);
    if (esDev) {
        console.log("Genial! eres Dev");
    }
}

var arturo  = new Desarrollador('Arturo', 'Reyes', 1.89);
var david = new Persona('David', 'Victoria', 1.78);
var danna = new Persona('Danna', 'Hernandez', 1.72);

arturo.saludar(responderSaludo);
david.saludar(responderSaludo);
danna.saludar(responderSaludo);

/*function Persona(nombre, apellido, alturaMts){
  this.nombre = nombre
  this.apellido = apellido
  this.alturaMts = alturaMts
}*/

/*Persona.prototype.saludar = function () {
  console.log(`Hola, me llamo ${this.nombre + " " + this.apellido}`)
}

Persona.prototype.soyAlto = function () {
    return this.alturaMts > 1.8
}*/

//var sacha = new Persona("Sacha","Lifszyc","1.75")


/*function HeredaDE(prototipoHijo,prototipoPadre) {
    var fn = function(){}
    fn.prototype = prototipoPadre.prototype
    prototipoHijo.prototype = new fn
    prototipoHijo.prototype.constructor = prototipoHijo
}*/

/*function Desarrollador(nombre,apellido) {
    this.nombre = nombre
    this.apellido = apellido
}*/

//HeredaDE(Desarrollador,Persona)

/*Desarrollador.prototype.saludar = function () {
    console.log(`Hola, me llamo ${this.nombre + " " + this.apellido} soy desarrollador`)
}*/


