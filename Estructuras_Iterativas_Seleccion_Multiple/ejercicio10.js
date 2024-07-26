/*
Realizar un programa que proporcione el cambio de Euros 
a Dólares, Libras, Yenes,Franco Suizo, Corona Noruega, 
según opción. El programa debe controlar todas las
entradas y ofrecer al usuario la posibilidad de repetir 
o salir.

    
        case 3:
            alert("yenes");
          break;
    
          case 4:
            alert("libras");
          break;
    
          case 5:
            alert("libras");
          break;
    
          case 6:
            alert("libras");
          break;
*/

alert(
  "Introduce 0 para salir, 1 cambio de euros a Dolares" +
    " 2 euros a libras, 3 euros a yenes, 4 euros a franco, " +
    " 5 euros a corona noruega"
);
var valor = parseInt(prompt("Ingrese la opción: "));

while (!(valor == 0)) {
  var tasa = 0;
  var monto = 0;
  switch (valor) {
    case 1:
      monto = parseFloat(prompt("Ingrese el monto: "));
      tasa = monto * 1.09;

      alert(monto + " equivalen en dolares: " + parseFloat(tasa));
      break;

    case 2:
      monto = parseFloat(prompt("Ingrese el monto: "));
      tasa = monto * 0.84;

      alert(monto + " equivalen en libras: " + parseFloat(tasa));
      break;

    case 3:
      monto = parseFloat(prompt("Ingrese el monto: "));
      tasa = monto * 167.58;

      alert(monto + " equivalen en yenes: " + parseFloat(tasa));
      break;

      case 4:
        monto = parseFloat(prompt("Ingrese el monto: "));
        tasa = monto * 6.55957;
  
        alert(monto + " equivalen en franco suizo: " + parseFloat(tasa));
        break;

        case 5:
            monto = parseFloat(prompt("Ingrese el monto: "));
            tasa = monto * 11.92;
      
            alert(monto + " equivalen a corona noruega: " + parseFloat(tasa));
            break;
  }

  valor = parseInt(prompt("Ingrese el número: "));
}

alert("Has salido");
