/*function calculateDiscontededPrice (price, discountporcentage){
    const discount = (price * discountporcentage) / 100
    const priceWhitDiscount = price - discount

    return priceWhitDiscount 
}

const originalPrice = 100
const discountporcentage = 20
const finalprice = calculateDiscontededPrice(originalPrice, discountporcentage)

console.log('Original Price: $' + originalPrice)
console.log('Discount: ' + discountporcentage + '%')
console.log('Price whit discount: $' + finalprice)
*/
/*
const rokect = {
    name: 'falcon 9',
    launchMessage: function launchMessage () {
        console.log(this.name)
    }   
}

rokect.launchMessage()

const Greting = (name) => {
    return ´Hola, ${name}´
};


const newGreting = (name) => 'hola' ${name};

const resultFun1 = Igreting('juan');
const resultFun2 = newGreting('pedro');

console.log('resultFun1')
*/
/*
const frutas = Array('kiwi', 'naranja' , 'manzana')
console.log(frutas)
console.log(frutas.length)

const justOneNumber = Array(12)
console.log(justOneNumber)

const OneNumber = [4, 'estamos bien']
console.log(OneNumber)

const recipeIngredients = [
    'tazon',
    true,
    2,
    {
        ingredient: 'milk', quality: '1 cup'
    },
    false

]
console.log(recipeIngredients)

recipeIngredients.push('menos')
console.log(recipeIngredients)

const newFruits = frutas.concat(['kiwi', 'mango'])
console.log(newFruits)

const isArray = Array.isArray(frutas)
console.log(Array.isArray(frutas))

const numberArray = [1, 2, 3, 4, 5,]
let suma = 0;
 for (numero of numberArray) {
    suma += numero;

 } 


 const array = [15, 11, 25, 13];
 const mapped = array.map ((x) => x * 3);

 console.log(mapped);

 const filtrado = array.filter((number) => number > 3);
 console.log(filtrado);

 const cadenas = ["dinero", "money", "ropa", "casas"]
 console.log(cadenas.slice(3));
 
 array.pop();
 console.log(array);

 cadenas.sort();
 console.log(cadenas);

 function compareNumbers( a,b){
    return a - b;

 }

 array.sort(compareNumbers);
 console.log(array);


 const isLargeNumber = (number) => number > 7;
 console.log(array.findIndex(isLargeNumber));
 
 
 const carrito = [
    {producto: 'perro', valor: 5000}
    {producto: 'casa', valor: 2000}
    {producto: 'perla', valor: 3000}

 ]

 const total = carrito.reduce((acom, item) => acom + item.valor, 0);
 console.log('el total es :', total);

 const words = ['sofi', 'hola', 'solo', 'ola'];

 const wordFrecuency = words.reduce((acomulator, currentvalue) => {
    if (acomulator[currentvalue]) {
        acomulator[currentvalue]++
    }   else {
            acomulator[currentvalue] = 1;
        }
        return acomulator

        }, {})
        console.log(wordFrecuency);
/*

        /* 
Requerimientos del reto:

1. El usuario debe poder ingresar su usuario y contraseÃ±a
2. El sistema debe ser capaz de validar si el usuario y contraseÃ±a ingresados por el usuario existen en la base de datos
3. Si el usuario y contraseÃ±a son correctos, el sistema debe mostrar un mensaje de bienvenida y mostrar el timeline del usuario.
4. Si el usuario y contraseÃ±a son incorrectos, el sistema debe mostrar un mensaje de error y no mostrar ningun timeline.

*/

const usersDatabase = [
  {
    username: "andres",
    password: "123",
  },
  {
    username: "caro",
    password: "456",
  },
  {
    username: "mariana",
    password: "789",
  },
];

const usersTimeline = [
  {
    username: "Estefany",
    timeline: "Me encata Javascript!",
  },
  {
    username: "Oscar",
    timeline: "Bebeloper es lo mejor!",
  },
  {
    username: "Mariana",
    timeline: "A mi me gusta mÃ¡s el cafÃ© que el tÃ©",
  },
  {
    username: "Andres",
    timeline: "Yo hoy no quiero trabajar",
  },
];

const username = prompt("Cuál es tu usuario?");
const password = prompt("Cuál es tu contraseña?");

function usuarioExistente(username, password) {
  for (let i = 0; i < usersDatabase.length; i++) {
    if (
      usersDatabase[i].username === username &&
      usersDatabase[i].password === password
    ) {
      return true;
    }
  }
  return false;
}

function signIn(username, password) {
  if (usuarioExistente(username, password)) {
    alert(`Bienvenido a tu cuenta ${username}`);
    console.log(usersTimeline);
  } else {
    alert("Uuups, usuario o contraseña incorrectos!");
  }
}

signIn(username, password);


const foo =  () => console.log("frist");
const bar =  () => setTimeout(() => console.log("second"); 500);
const baz =  () => console.log ("third");

foo()
bar()
baz()

const promise = new promise((resolve,
    reject) => {
        setTimeout(() => {
            let operationSuccesful = true;
            if (operationSuccesful) {
                resolve("la operacion fue existosa!");
            } else {
                reject("fallo la operacion");
            } 
        }, 2000);
    });

    promise
    .then((succesMesasge) => {
        console.log(succesMesasge);
    })
    
    .Catch((errormessage) => {
        console.log(errormessage);
    });
     
    function fetchData() {
        fetch("https://rickandmortyapi.com/characterapi/")
        .then((Response) => Response.json)
        .catch((error) => console.log
        (error));
    }
     fetchData();

