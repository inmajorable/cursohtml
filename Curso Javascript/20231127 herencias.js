class Comida {
    constructor(precio) {
        this.precio = precio;
    }
    darSabor() {
        console.log("saborDeAmor");
    }
}
class Postre extends Comida {
    constructor(precio, esDulce) {
        super(precio);
        this.esDulce = esDulce;
    }
}

class PostreDulce extends Postre {
    constructor(precio, cantidadDeAzucar) {
        super(precio, true);
        this.cantidadDeAzucar = cantidadDeAzucar;
    }
}
class PostreSalado extends Postre {
    constructor(precio, cantidadDeSal) {
        super(precio, false);
        this.cantidadDeSal = cantidadDeSal;
    }
}
console.log(new PostreDulce(19.9, 1000))
console.log(new PostreSalado(99.1, 100))