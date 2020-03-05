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
    //     this._proteinas = proteinas,
    //     this._hidratos = hidratos,
    //     this._grasas = grasas,
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

    // pan.innerHTML = Pan._nombre;


