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

const objetoPersona = () => {
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

const objetoLibro = ()=> {
  const libro = {
    titulo: "Clean Code",
    autor: "Uncle Bob",
    anio: 2010
  }

  const anioActual = new Date().getFullYear();

  const antiguedadDeLibro = (libro, anioActual, aniosDeAntiguedadAEvaluar) => {
    if(libro.anio) return ((anioActual - libro.anio) > aniosDeAntiguedadAEvaluar);
    else return null;
  }

  
  console.log(`El libro ${libro.titulo} es antiguo: `, antiguedadDeLibro(libro, anioActual, 10));
}


const arreglos = () => {
  const numeros = Array.of(1,2,3,4,5,6,7,8,9,10);
  const arregloResultante = [];

  for (const n of numeros) {
    arregloResultante.push(n*2);
  }

  console.log('Numeros originales: ', numeros.toString() );
  console.log('multiplicados por 2: ', arregloResultante.toString());

}

const arregloPares =  () => {
  let pares = [];
  for(let i = 1; i <= 20; i++){
    (i%2 == 0) ? pares.push(i) : null;
  }
  pares = pares.slice(0,10);
  console.log('Primeros 10 numeros pares)', pares);
}

const introDOMEjercicio1 = () => {
  const section1 = document.querySelector('#section1');
  const btnCambiarColor = document.querySelector("#btnCambiarColor");
  const cambiarColor = () => {
    let colorActual = section1.style.color;
    section1.style.color = (colorActual == 'blue') ? "": "blue"
  }
  btnCambiarColor.addEventListener('click', cambiarColor)

}

const introDOMEjercicio2 = () => {
  const formulario = document.querySelector('#form');

  const mostrarAlerta = (e) => {
    e.preventDefault();
    alert(e.target.inputTexto.value)
  }
  formulario.addEventListener('submit', mostrarAlerta);
}

const eventosDomEjercicio1 = () => {
  const elementos = document.querySelectorAll('.elemento');
  const manejarClickElemento = (e) => {
    console.log(e.target.innerText)
  }

  elementos.forEach(( elemento ) => {
    elemento.addEventListener('click', manejarClickElemento);
  })
}

const eventosDOMEjercicio2 = ()=> {
  const input = document.querySelector('#inputEjercicio2');
  const btnDeshabilitar = document.querySelector('#btnDeshabilitar');
  const btnHabilitar= document.querySelector('#btnHabilitar');

  const manejadorDeshabilitar = ()=> {
    input.setAttribute('disabled', true)
  }

  const manejadorHabilitar = ()=> {
    input.removeAttribute('disabled')
  }

  btnDeshabilitar.addEventListener('click', manejadorDeshabilitar)
  btnHabilitar.addEventListener('click', manejadorHabilitar)
}


// Local Storage
//Anotacion: Profesor, complique demasiado el codigo, pero cumple con el punto.
const localStorageEjercicio1 = ()=> {
  const emailInput = document.querySelector('#emailInput');
  const emailLista = document.querySelector('#emailLista');
  const btnGuardar = document.querySelector('#btnGuardarEmail')
  const mostrarLista = () => {
    emailLista.innerHTML = ''
    const correos = localStorage.getItem('correos');
    if(correos) {
      const lista = JSON.parse(correos);
      lista.forEach((correo) => {
        emailLista.innerHTML += `<li class="listaCorreos" id=${correo.id}>${correo.email} <button id=${correo.id} class="btnEliminarCorreo">Eliminar</button></li> `
      })
    }
  }

  mostrarLista()

  const manejadorGuardar = () => {
    let correos = localStorage.getItem('correos');
    let listaAGuardar = [];
    const correoNuevo = {}
    correoNuevo.email = emailInput.value
    correoNuevo.id = Date.now()

    if(correos != null) {
      correos = JSON.parse(correos)
      listaAGuardar = [correoNuevo, ...correos ]
      localStorage.setItem('correos', JSON.stringify(listaAGuardar))
    } else {
      localStorage.setItem('correos', JSON.stringify([correoNuevo]))
    }
    mostrarLista();
  }

  btnGuardar.addEventListener('click', manejadorGuardar);
  
  const eliminarDeLocalStorage = (idAEliminar) => {
    let correos = localStorage.getItem('correos')
    correos = JSON.parse(correos);
    correos = correos.filter((correo) => {
      return (correo.id != idAEliminar)
    })
    console.log(correos);
    localStorage.setItem('correos', JSON.stringify(correos));

  }

  document.addEventListener('click', (e)=>{
    if(!e.target.classList.contains('btnEliminarCorreo')) return;
    const id = Number.parseInt(e.target.id);

    eliminarDeLocalStorage(id);
    mostrarLista();
  })


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
objetoPersona();
objetoLibro();
arreglos();
arregloPares()
introDOMEjercicio1();
introDOMEjercicio2();
eventosDomEjercicio1();
eventosDOMEjercicio2();
localStorageEjercicio1();









