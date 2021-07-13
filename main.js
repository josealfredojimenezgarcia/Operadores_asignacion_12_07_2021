// console.log('Dios es Amor')
// let x =new String("123456789");
// // let y = prompt(`ingrese su nombre`,`506`)
// console.log(x, typeof(x));

//Asignación
// let x=18;
// let y= '5';
// x=y;

// console.log(x);
// console.log(x, typeof(x));
// x=parseInt(y);
// console.log(x, typeof(x));
// x=Boolean(y);
// console.log(x, typeof(x));

//Adición
// let x=18;
// let y= '5';
// x+=y  //x = x + y    + significa concatenar en string.
// console.log(x, typeof(x));
//Sustracción
// x-=y     //x = x - y 
// console.log(x, typeof(x));

// console.log(`Valor x inicializada ${x}`)

let x=18;
let y= '5';

// Multiplicación
x*=y
console.log(x.toFixed(2))
// //  División
x/=y
console.log(x.toFixed(2))
// División Entera utiliza libreria math.trunc

console.log(Math.trunc(x))

// Raiz Cuadrada
console.log(Math.sqrt(x).toFixed(3))


// Potenciación
x**=y
console.log(x.toFixed(2))
// Módulo
x%=y
console.log(x.toFixed(2))


