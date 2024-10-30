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
