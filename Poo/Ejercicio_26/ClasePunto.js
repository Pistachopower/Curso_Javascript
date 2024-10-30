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

    toString() { 
        return "x: " + this.x + " " + " y: " + this.y; 

    
};

}


//instanciamos al objeto
var punto1 = new ClasePunto(2, 3);
var punto2 = new ClasePunto(1, 3);

alert(punto1.y);
