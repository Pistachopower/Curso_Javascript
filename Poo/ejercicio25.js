/*
Crear un objeto Punto con dos coordenadas (x,y) y un 
método para averiguar el cuadrante en el que está.
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
        }  else if (this.x > 0 & this.y < 0) {
            alert("El punto se encuentra en el cuarto cuadrante");
        } else {
            alert("El punto se encuentra en el origen");

        }

    };
};


//instanciamos al objeto
var punto = new ClasePunto(0, 0);

alert(punto.metodoAverigua());