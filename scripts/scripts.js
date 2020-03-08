// BASE DE DATOS
class Comida {
  constructor(id, nombre, proteinas, hidratos, grasas, calorias){
      this._id = id;
      this._nombre = nombre;
      this._proteinas = proteinas;
      this._hidratos = hidratos;
      this._grasas = grasas;
      this._calorias = calorias
  }

  // get cogerNombre(){
  //     return this._id = id,
  //     this._nombre = nombre,
  //     this._calorias = calorias
  // }

}
              
  const Pan = new Comida(1, "Pan Blanco", 8, 50, 2, 233);
  const Platano = new Comida(2, "Platano", 1, 19, 0, 79);
  const Arroz = new Comida(3, "Arroz Blanco", 6, 87, 1, 361);
  const Jamon = new Comida(4, "Jamon Serrano", 31, 0, 7, 185);
  const Atun = new Comida(5, "Atun Fresco", 22, 0, 16, 242);
  const Lechuga = new Comida(6, "Lechuga", 1, 1, 0, 12);
  const Manzana = new Comida(7, "Manzana", 0, 12, 0, 46);
  const Queso = new Comida(8, "Queso de Cabra", 17, 2, 18, 250);
  const Solomillo = new Comida(9, "Solomillo", 17, 0, 23, 272);


/////*  *////// 
//  PRUEBAS
/////*  *//////

console.log(Pan._proteinas)





/* DRAG & DROP */
let pan = document.getElementById('1');

// let obj_hijo = obj[Object.keys(obj)];

// const datos = document.getElementsByClassName("rectangulo");


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
      // if(pan){
      //   console.log(Pan)
      //   console.log(typeof(pan));
      // pan.innerHTML = Object.entries(Pan);
      // pan.className= 'rectangulo';
      // console.log(Object.entries(Target))
      // } else{
      //   console.log("hola?")
      // }
    // let o = JSON.parse(data); Intentando convertir string a objeto(no funciona)
    console.log(`data es igual a ${data}`)
    console.log(typeof(data));
    console.log(data.proteinas)

    /* Tratando de sacar todos los valores d cada producto */
    for (const prop in data) {
      console.log(`${data[prop]}`);
    }
    // console.log(Object.values(o))
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


// NAV-BAR
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  
/* LOCAL STORAGE */
// localStorage.setItem('Datos', JSON.stringify(baseDatos));
// let resultado = JSON.parse(localStorage.getItem('Datos'));

/* FORMULARIO LOCALSTORAGE */
function guardarDatos(){
    localStorage.setItem("nombre", document.getElementById("nombre").value);
    localStorage.setItem("apellidos", document.getElementById("apellidos").value);
    localStorage.setItem("email", document.getElementById("email").value);
    localStorage.setItem("telefono", document.getElementById("telefono").value);
    localStorage.setItem("asunto", document.getElementById("asunto").value);
    localStorage.setItem("mensaje", document.getElementById("mensaje").value);

    alert("Tu mensaje ha sido enviado correctamente");
    
   }


    // CALCULADORA IMC
    calc = document.getElementById("calc");
    kg = document.getElementById("kg");
    m = document.getElementById("m");
    imc = document.getElementById("imc");
    lectura = document.getElementById("lectura");
  
    calc.onclick = function(){
        if(kg.value!="" && m.value!=""){
          imcx = (kg.value / (m.value* m.value) *10000);
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
  
        }else {
          alert("Debes ingresar peso y altura.")
        }
    };
  

