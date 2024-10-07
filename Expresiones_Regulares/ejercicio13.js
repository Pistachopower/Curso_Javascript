/*
Escribe una expresión regular que extraiga todas las URLs de un texto HTML.
*/

/*Esta expresión regular busca cualquier cadena que comience con http:// o
 https:// y continúe hasta encontrar un espacio, una comilla doble (")
  o una comilla simple (').*/

const regex = /https?:\/\/[^\s"']+/g;

const htmlText = `
  <a href="https://example.com">Example</a>
  <a href='http://another-example.com'>Another Example</a>
  <a href="https://example.org">Example Org</a>
`;

alert(htmlText);

