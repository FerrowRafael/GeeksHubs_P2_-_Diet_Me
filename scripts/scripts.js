/* BASE DE DATOS */

class Comida {
  constructor(nombre, proteinas, hidratos, grasas, calorias){
      this.nombre = nombre;
      this.proteinas = proteinas;
      this.hidratos = hidratos;
      this.grasas = grasas;
      this.calorias = calorias
  }
}
              
const Pan = new Comida("Pan Blanco", 8, 50, 2, 233);
const Platano = new Comida("Platano", 1, 19, 0, 79);
const Arroz = new Comida("Arroz Blanco", 6, 87, 1, 361);
const Jamon = new Comida("Jamon Serrano", 31, 0, 7, 185);
const Atun = new Comida("Atun Fresco", 22, 0, 16, 242);
const Lechuga = new Comida("Lechuga", 1, 1, 0, 12);
const Manzana = new Comida("Manzana", 0, 12, 0, 46);
const Queso = new Comida("Queso de Cabra", 17, 2, 18, 250);
const Solomillo = new Comida("Solomillo", 17, 0, 23, 272);

let todosProductos = { //Creamos un conversor para sustituir el id del Producto seleccionado por el nombre del Objeto
  "1" : Pan,
  "2" : Platano,
  "3" : Arroz,
  "4" : Jamon,
  "5" : Atun,
  "6" : Lechuga,
  "7" : Manzana,
  "8" : Queso,
  "9" : Solomillo
}


/* DRAG & DROP */

function onDragStart(ev){
  ev.dataTransfer.setData("text", ev.target.id);
  let Target = ev.target.id
  console.log("OnDragStart element: ", Target)
}
  

function onDrop(ev){
  event.preventDefault();
  let data = event.dataTransfer.getData("text");
  event.target.appendChild(document.getElementById(data));
  console.log("OnDrop")

  let objeto = (todosProductos[data])

  nombre.innerHTML = objeto.nombre; // metemos los datos por DOM
  calorias.innerHTML = objeto.calorias;
  proteinas.innerHTML = objeto.proteinas;
  hidratos.innerHTML = objeto.hidratos;
  grasas.innerHTML = objeto.grasas;
  }
  

function onDragOver(event){
  console.log("OnDragOver");
  event.preventDefault();
}
 

function onDragLeave(event){
  console.log("OnDragLeave")
} 


function handleDragStart(event) {
  this.style.opacity = '0.4'
}
/* fin Drag & Drop*/


/* FORMULARIO LOCAL STORAGE */

const Nombre = document.getElementById("nombre"); //Cogemos los datos introducidos en el formulario
const Apellidos = document.getElementById("apellidos");
const Email = document.getElementById("email");
const Telefono = document.getElementById("telefono");
const Asunto = document.getElementById("asunto");
const Mensaje = document.getElementById("mensaje");

function guardarDatos(){
  event.preventDefault()
  const Formulario = {
      nombre: nombre.value,
      apellidos: apellidos.value,
      email: email.value,
      telefono: telefono.value,
      asunto: asunto.value,
      mensaje: mensaje.value,
  }
 
  localStorage.setItem('Formulario', JSON.stringify(Formulario)) //Guardamos los datos en un JSON
  alert("Tu mensaje ha sido enviado correctamente");   
}
/* fin Formulario local Storage*/   


/* CALCULADORA IMC */

let calc = document.getElementById("calc");
let kg = document.getElementById("kg");
let cm = document.getElementById("cm");
let imc = document.getElementById("imc");
let lectura = document.getElementById("lectura");
  
calc.onclick = function(){

if(kg.value == ""){
  alert("Debes ingresar un peso")
} else if (cm.value == ""){
  alert("Debes ingresar una altura")
}

if(kg.value!="" && cm.value!=""){
  imcx = (kg.value / (cm.value * cm.value) * 10000);
  imc.innerHTML = imcx.toFixed(2);
  
  if(imcx<18.5){ 
    lectura.innerHTML = "Peso insuficiente"; 
  } else if(imcx > 0 && imcx <=24.9 ){ 
    lectura.innerHTML = "	Normopeso"; 
  } else if(imcx<=26.9){ 
    lectura.innerHTML = "	Sobrepeso grado I"; 
  } else if(imcx<=29.9){ 
    lectura.innerHTML = "Sobrepeso grado II (preobesidad)";
  } else if(imcx<=34.9){ 
    lectura.innerHTML = "Obesidad de tipo I";  
  } else if(imcx<=39.9){ 
    lectura.innerHTML = "Obesidad de tipo II"; 
  } else if(imcx<=49.9){ 
    lectura.innerHTML = "Obesidad de tipo III (mórbida)";
  } else if(imcx>50){ 
    lectura.innerHTML = "Obesidad de tipo IV (extrema)"; 
  }
}};
  

