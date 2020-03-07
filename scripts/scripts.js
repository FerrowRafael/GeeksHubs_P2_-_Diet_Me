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
      if(pan){
        console.log(Pan)
        console.log(typeof(pan));
        pan.innerHTML = Object.entries(Pan);
        pan.className= 'rectangulo';
      } else{
        console.log("hola?")
      }
    
    
    
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


// DOM PRODUCTOS

document.getElementById('1').innerHTML=`<img src="https://pngriver.com/wp-content/uploads/2018/04/Download-Bread-PNG-Clipart.png" class="image  mx-auto my-auto" draggable="true" ondragstart="onDragStart(event)" alt="...">         
<div class="row image" >
    <ul class="column middle">
        <h3>Pan Blanco</h3>
        <li>Proteinas: 100g</li>
        <li>Hidratos: 100g</li>
        <li>Grasas: 100g</li>
        <li>Calorias: 100g</li>
    </ul>
</div>`

document.getElementById('2').innerHTML=`<img src="https://pngimage.net/wp-content/uploads/2018/05/banana-png-image-2.png" class="image  mx-auto my-auto" draggable="true" ondragstart="onDragStart(event)" alt="...">         
<div class="row image" >
    <ul class="column middle">
        <h3>Platano</h3>
        <li>Proteinas: 100g</li>
        <li>Hidratos: 100g</li>
        <li>Grasas: 100g</li>
        <li>Calorias: 100g</li>
    </ul>
</div>`

document.getElementById('3').innerHTML=`<img src="https://www.stickpng.com/assets/images/5bbc96d30bc67a02c98d958e.png" class="image mx-auto my-auto" draggable="true" ondragstart="onDragStart(event)" alt="...">         
<div class="row image" >
    <ul class="column middle">
        <h3>Arroz</h3>
        <li>Proteinas: 100g</li>
        <li>Hidratos: 100g</li>
        <li>Grasas: 100g</li>
        <li>Calorias: 100g</li>
    </ul>
</div>`

document.getElementById('4').innerHTML=`<img src="https://i.pinimg.com/originals/16/66/02/1666022e8bbbe9567b02dce0c9eec376.png" class="image img-fluid mx-auto my-auto" draggable="true" ondragstart="onDragStart(event)" alt="...">         

    <div class="row image">
      <ul class="column middle">
      <h3>Jamón Serrano</h3>
        <li>Proteinas: 100g</li>
        <li>Hidratos: 100g</li>
        <li>Grasas: 100g</li>
        <li>Calorias: 100g</li>
      </ul>
    </div>`

document.getElementById('5').innerHTML=`<img src="https://www.espinaler.com/wp-content/uploads/atun.png" class="image img-fluid mx-auto my-auto" draggable="true" ondragstart="onDragStart(event)" alt="...">         
<div class="row image">
<ul class="column middle">
<h3>Atun</h3>
  <li>Proteinas: 100g</li>
  <li>Hidratos: 100g</li>
  <li>Grasas: 100g</li>
  <li>Calorias: 100g</li>
</ul>
</div>`

document.getElementById('6').innerHTML=`<img src="https://purepng.com/public/uploads/medium/purepng.com-green-lettucevegetablessalad-lettuce-spinach-leaves-leafs-green-lettuce-941524683044kdfoz.png" class="image img-fluid mx-auto my-auto" draggable="true" ondragstart="onDragStart(event)" alt="...">         
    <div class="row image" >
        <ul class="column middle">
            <h3>Lechuga</h3>
            <li>Proteinas: 100g</li>
            <li>Hidratos: 100g</li>
            <li>Grasas: 100g</li>
            <li>Calorias: 100g</li>
        </ul>
    </div>`

document.getElementById('7').innerHTML=`<img src="https://www.freepngimg.com/thumb/apple/8-2-apple-fruit-transparent.png" class="image img-fluid mx-auto my-auto" draggable="true" ondragstart="onDragStart(event)" alt="..." style="width: 12rem;">         

    <div class="row image" >
        <ul class="column middle">
            <h3>Manzana</h3>
            <li>Proteinas: 100g</li>
            <li>Hidratos: 100g</li>
            <li>Grasas: 100g</li>
            <li>Calorias: 100g</li>
        </ul>
    </div>`

document.getElementById('8').innerHTML=`<img src="https://purepng.com/public/uploads/medium/purepng.com-cheesefood-cheese-milk-9415246337902cdnc.png" draggable="true" ondragstart="onDragStart(event)" class="image img-fluid mx-auto my-auto" alt="...">         

    <div class="row image" >
        <ul class="column middle">
            <h3>Queso de Cabra</h3>
            <li>Proteinas: 100g</li>
            <li>Hidratos: 100g</li>
            <li>Grasas: 100g</li>
            <li>Calorias: 100g</li>
        </ul>
    </div>`

document.getElementById('9').innerHTML=`<img src="https://casafarreloro.com/cms/wp-content/uploads/2016/05/wCARNE-solomillo.png" class="image mx-auto my-auto" draggable="true img-fluid mx-auto my-auto" ondragstart="onDragStart(event)" alt="...">         

    <div class="row image">
        <ul class="column middle">
            <h3>Solomillo</h3>
            <li>Proteinas: 100g</li>
            <li>Hidratos: 100g</li>
            <li>Grasas: 100g</li>
            <li>Calorias: 100g</li>
        </ul>
    </div>`


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

			if(imcx<18.5){ lectura.innerHTML = "Peso inferior al normal"; }
			else if(imcx>=18.5 && imcx<=24.9){ lectura.innerHTML = "Peso normal"; }
			else if(imcx>=25 && imcx<=29.9){ lectura.innerHTML = "Peso superior al normal"; }
			else if(imcx>30){ lectura.innerHTML = "Obesidad"; }

		}else{
			alert("Debes ingresar peso y altura.")
		}

	};