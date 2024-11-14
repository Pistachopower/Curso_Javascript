/*
this.nombre= nombre;
        this.apellido= apellido;
        this.dni= dni;
        this.citas= citas;
        this.historialCitas= historialCitas;

*/

//creamos un set para guardarlo de forma ordenada
var citas= new Set();

//se guardara la hora completa
var horaCompleta= [];

var fechaCita=  new Date('2023-10-14');

var hora=  fechaCita.getHours();
var minutos=  fechaCita.getMinutes();
var segundos=  fechaCita.getSeconds();

//colocamos en un array los datos de la hora
horaCompleta.push(hora);
horaCompleta.push(minutos);
horaCompleta.push(segundos);


//creas las claves y el valor del objeto
var datos= {sala: 1, fecha: fechaCita, hora: horaCompleta};

    ///Agregas las citas 
citas.add(datos);

var historialCita= [];

//creammos la clase clinete
var cliente= new Cliente("Juan", "sanchez", 6666, citas );