/* DRAG & DROP */
let pan = document.getElementById('1');
const datos = document.getElementsByClassName("rectangulo");
function onDragStart(ev){
    ev.dataTransfer.setData("text", ev.target.id);
    console.log("OnDragStart element: ", ev.target.id)
  }
  
  function onDrop(ev){
    event.preventDefault();
    console.log("OnDrop")
    
    console.log(pan)
    pan.innerHTML = Object.values(Pan);
    
    let data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));

    console.log(typeof(data));
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


// DOM PRODUCTOS

document.getElementById('1').innerHTML=`<img src="https://pngriver.com/wp-content/uploads/2018/04/Download-Bread-PNG-Clipart.png" class="image  mx-auto my-auto" draggable="true" ondragstart="onDragStart(event)" alt="...">         
<div class="row image card-body" >
    <ul class="column middle">
        <h3 class="card-title">Pan Blanco</h3>
        <li>Proteinas: 100g</li>
        <li>Hidratos: 100g</li>
        <li>Grasas: 100g</li>
        <li>Calorias: 100g</li>
    </ul>
</div>`

document.getElementById('2').innerHTML=`<img src="https://pngimage.net/wp-content/uploads/2018/05/banana-png-image-2.png" class="image  mx-auto my-auto" draggable="true" ondragstart="onDragStart(event)" alt="...">         
<div class="row image card-body" >
    <ul class="column middle">
        <h3 class="card-title">Platano</h3>
        <li>Proteinas: 100g</li>
        <li>Hidratos: 100g</li>
        <li>Grasas: 100g</li>
        <li>Calorias: 100g</li>
    </ul>
</div>`

document.getElementById('3').innerHTML=`<img src="https://www.stickpng.com/assets/images/5bbc96d30bc67a02c98d958e.png" class="image mx-auto my-auto" draggable="true" ondragstart="onDragStart(event)" alt="...">         
<div class="row image card-body" >
    <ul class="column middle">
        <h3 class="card-title">Arroz</h3>
        <li>Proteinas: 100g</li>
        <li>Hidratos: 100g</li>
        <li>Grasas: 100g</li>
        <li>Calorias: 100g</li>
    </ul>
</div>`

document.getElementById('4').innerHTML=`<img src="https://i.pinimg.com/originals/16/66/02/1666022e8bbbe9567b02dce0c9eec376.png" class="image img-fluid mx-auto my-auto" draggable="true" ondragstart="onDragStart(event)" alt="...">         
<div>
    <div>
      <ul class="column middle">
      <h3>Jamón Serrano</h3>
        <li>Proteinas: 100g</li>
        <li>Hidratos: 100g</li>
        <li>Grasas: 100g</li>
        <li>Calorias: 100g</li>
      </ul>
    </div>
</div>`

document.getElementById('5').innerHTML=`<img src="https://www.espinaler.com/wp-content/uploads/atun.png" class="image img-fluid mx-auto my-auto" draggable="true" ondragstart="onDragStart(event)" alt="...">         
<div >
<div>
<ul class="column middle">
<h3>Atun</h3>
  <li>Proteinas: 100g</li>
  <li>Hidratos: 100g</li>
  <li>Grasas: 100g</li>
  <li>Calorias: 100g</li>
</ul>
</div>
</div>`

document.getElementById('6').innerHTML=`<img src="https://purepng.com/public/uploads/medium/purepng.com-green-lettucevegetablessalad-lettuce-spinach-leaves-leafs-green-lettuce-941524683044kdfoz.png" class="image img-fluid mx-auto my-auto" draggable="true" ondragstart="onDragStart(event)" alt="...">         
<div class="card-block">
    <div class="row image card-body" >
        <ul class="column middle">
            <h3 class="card-title">Lechuga</h3>
            <li>Proteinas: 100g</li>
            <li>Hidratos: 100g</li>
            <li>Grasas: 100g</li>
            <li>Calorias: 100g</li>
        </ul>
    </div>
</div>`

document.getElementById('7').innerHTML=`<img src="https://www.freepngimg.com/thumb/apple/8-2-apple-fruit-transparent.png" class="image img-fluid mx-auto my-auto" draggable="true" ondragstart="onDragStart(event)" alt="..." style="width: 12rem;">         
<div class="card-block">
    <div class="row image card-body" >
        <ul class="column middle">
            <h3 class="card-title">Manzana</h3>
            <li>Proteinas: 100g</li>
            <li>Hidratos: 100g</li>
            <li>Grasas: 100g</li>
            <li>Calorias: 100g</li>
        </ul>
    </div>
</div>`

document.getElementById('8').innerHTML=`<img src="https://purepng.com/public/uploads/medium/purepng.com-cheesefood-cheese-milk-9415246337902cdnc.png" draggable="true" ondragstart="onDragStart(event)" class="image img-fluid mx-auto my-auto" alt="...">         
<div class="card-block">
    <div class="row image card-body" >
        <ul class="column middle">
            <h3 class="card-title">Queso de Cabra</h3>
            <li>Proteinas: 100g</li>
            <li>Hidratos: 100g</li>
            <li>Grasas: 100g</li>
            <li>Calorias: 100g</li>
        </ul>
    </div>
</div>`

document.getElementById('9').innerHTML=`<img src="https://casafarreloro.com/cms/wp-content/uploads/2016/05/wCARNE-solomillo.png" class="image mx-auto my-auto" draggable="true img-fluid mx-auto my-auto" ondragstart="onDragStart(event)" alt="...">         
<div class="card-block">
    <div class="row image card-body" >
        <ul class="column middle">
            <h3 class="card-title">Solomillo</h3>
            <li>Proteinas: 100g</li>
            <li>Hidratos: 100g</li>
            <li>Grasas: 100g</li>
            <li>Calorias: 100g</li>
        </ul>
    </div>
</div>`

