/*
for (variable of Object) {
    codigo
}

*/

let canasta = ["manzana", "pera", "naranja", "uva"];

for (fruta of canasta) {
    console.log( fruta);
}


const ListaDeCompras = {
    manzana: 5,
    pera: 3,
    naranja: 2,
    uva: 1,

};

for ( fruta in ListaDeCompras) {
    console.log(fruta);
}

for ( fruta in ListaDeCompras) {
    console.log(`${fruta} : ${ListaDeCompras[fruta]}`);
}


/*
while(condicion) {
codigo
}
*/

let contador = 0;

while ( contador < 10) {
    console.log( contador);
    contador++;
}

