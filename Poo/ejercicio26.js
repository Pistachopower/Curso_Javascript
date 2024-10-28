/*
Crear un objeto Rectángulo con un constructor a partir de dos
 objetos Punto, 
con métodos para hallar el perímetro del mismo y su área. 
Añade también dos 
métodos para calcular la base y la altura del rectángulo a partir 
de los puntos.
*/


class ClasePunto {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    };

    metodoAverigua() {
        if (this.x > 0 & this.y > 0) {
            alert("El punto se encuentra en el primer cuadrante");
        } else if (this.x < 0 & this.y > 0) {
            alert("El punto se encuentra en el segundo cuadrante");
        } else if (this.x < 0 & this.y < 0) {
            alert("El punto se encuentra en el tercer cuadrante");
        } else if (this.x > 0 & this.y < 0) {
            alert("El punto se encuentra en el cuarto cuadrante");
        } else {
            alert("El punto se encuentra en el origen");

        }

    };
};


//instanciamos al objeto
var punto1 = new ClasePunto(2, 3);
var punto2 = new ClasePunto(1, 3);

class Rectangulo {
    constructor(punto1, punto2) {
        this.punto1 = punto1;
        this.punto2 = punto2;
    };


    // Método para calcular la base del rectángulo
    calcularBase() {
        //accedemos al atribut del objeto punto que es 
        //x y y
        return Math.abs(this.punto2.x - this.punto1.x);
    }

    // Método para calcular la altura del rectángulo
    calcularAltura() {
        return Math.abs(this.punto2.y - this.punto1.y);
    }

    // Método para calcular el perímetro del rectángulo
    calcularPerimetro() {
        const base = this.calcularBase();
        const altura = this.calcularAltura();
        return 2 * (base + altura);
    }

    // Método para calcular el área del rectángulo
    calcularArea() {
        const base = this.calcularBase();
        const altura = this.calcularAltura();
        return base * altura;
    }
};


var rectangulo = new Rectangulo(punto1, punto2)