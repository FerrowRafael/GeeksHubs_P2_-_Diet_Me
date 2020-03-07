/* DRAG & DROP */
let pan = document.getElementById('1');

// var obj_hijo = obj[Object.keys(obj)];

const datos = document.getElementsByClassName("rectangulo");
function onDragStart(ev){
    ev.dataTransfer.setData("text", ev.target.id);
    console.log("OnDragStart element: ", ev.target.id)
  }
  
  function onDrop(ev){
    event.preventDefault();
    console.log("OnDrop")
      // if(pan){
      //   console.log(Pan)
      //   console.log(typeof(pan));
      //   pan.innerHTML = Object.entries(Pan);
      //   pan.className= 'rectangulo';
      // } else{
      //   console.log("hola?")
      // }
    

    let data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
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
            imcx = (kg.value / (m.value* m.value));
            imc.innerHTML = imcx
            console.log(imcx);
  
            if(imcx<18.5){ 
        lectura.innerHTML = "Peso inferior al normal"; }
            else if(imcx>=18.5 && imcx<=24.9){ 
        lectura.innerHTML = "Peso normal"; }
            else if(imcx>=25 && imcx<=29.9){ 
        lectura.innerHTML = "Peso superior al normal"; }
            else if(imcx>30){ 
        lectura.innerHTML = "Obesidad"; }
  
        }else{
            alert("Debes ingresar peso y altura.")
        }
  
    };
  

