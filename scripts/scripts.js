/* DRAG & DROP */
function onDragStart(ev){
    ev.dataTransfer.setData("text", ev.target.id);
    console.log("OnDragStart element: ", ev.target.id)
    
  }
  
  function onDrop(event){
    event.preventDefault();
    console.log("OnDrop")
    
    // event.target.appendChild(document.getElementById(data)); 
    
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
/* */


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
localStorage.setItem('Datos', JSON.stringify(baseDatos));
let resultado = JSON.parse(localStorage.getItem('Datos'));

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