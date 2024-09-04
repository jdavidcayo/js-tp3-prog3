import './style.css'

const sumaEjercicio2 = () => {
  let a, b, c;
  a = 5;
  b = 10;
  c = a + b;
  console.log("La suma de a y b es:", c);
}

const ejercicio3 = () => {
  let nombre;
  nombre = prompt("¿Cual es tu nombre?");
  console.log("Hola, ", nombre);
}

const operadoresLogicosYCondicionales = () => {
  let a, b, c;
  a = 40;
  b = 90;
  if(a > b) c=a;
  else c=b;
  console.log("El numero mayor es:", c);
}

const parImpar = () => {
  let a = prompt("Ingresa un numero y te dire si es par o impar");

  a = Number.parseInt(a);
  if(a && a%2 === 0) console.log(`El numero ${a} es par`) ;
  else if( a && a%2 != 0)console.log(`El numero ${a} es impar.`)
  else console.log(`No es un numero valido.`)
}

const iteracion = () => {
  let a = 10;
  while( a >= 0){
    console.log(a)
    a--;
  }
}

const doWhile = () => {
  let a;
  do{
    a = prompt("Ingrese un numero mayor a 100:")
    a = Number.parseInt(a)
  }while(a <= 100);
  console.log("Ingresaste un numero mayor a 100:", a);
}

function esPar(numero) {
  return (numero%2 == 0)
}

const ejercicioEsPar = () => {
  console.log("El numero 8 es par:", esPar(8))
  console.log("El numero 7 es par:", esPar(7))
}

const convertirCelsiusAFahrenheit = (gradosCelcius) => {
  return ((gradosCelcius * 1.8) + 32);
}

const objetos = () => {
  const persona = {
    nombre: "David",
    edad: 36,
    ciudad: "Barcelona",
    cambiarCiudad: function (nuevaCiudad){this.ciudad = nuevaCiudad}
  }
  console.log(`Nombre: ${persona.nombre}. Edad: ${persona.edad}, Ciudad: ${persona.ciudad}`);
  persona.cambiarCiudad("New York");
  console.log(`Nombre: ${persona.nombre}. Edad: ${persona.edad}, Ciudad: ${persona.ciudad}`);
}

sumaEjercicio2();
console.log("-------------------");
// ejercicio3();
console.log("-------------------");
operadoresLogicosYCondicionales();
console.log("-------------------");
// parImpar();
console.log("-------------------");
// iteracion();
console.log("-------------------");
// doWhile();
console.log("-------------------");
// ejercicioEsPar();
console.log("-------------------");
console.log("30ºC son equivalentes a", convertirCelsiusAFahrenheit(30), "ºF");
console.log("-------------------");
objetos();





