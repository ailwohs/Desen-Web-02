
//Exercício 01

/*
let nome = "julia";
let idade = 20;
let altura = 1.68;
let estaAprovado = true;
let possuiCarteira = false;
console.log(typeof nome);
console.log(typeof idade);
console.log(typeof altura);
console.log(typeof estaAprovado);
console.log(typeof possuiCarteira);
*/

//Exercício 02

/*
let idade = 20;
if (idade > 18) {
  console.log("Pode entrar");
} 
*/  
//Exercício 03

/*
const meuNome = "julha";
if (meuNome === "julha") {
  console.log("Olá, julha, bem vindo");
}
*/

//Exercício 04

/*
console.log(Math.pow(2, 2));
console.log(Math.pow(3, 2));
console.log(Math.pow(18, 2));
*/

//Exercício 05

/*
let velocidade = 90;

if (velocidade > 80) {
  console.log("Você está acima da velocidade permitida!");
} else {
  console.log("Velocidade dentro do limite.");
}
*/

//Exercício 06

/*
let idade = 20;
let temCnh = true;

if (idade >= 18 && temCnh) {
  console.log("Pode dirigir.");
} else if (idade >= 18 && !temCnh) {
  console.log("Nao pode dirigir, precisa de CNH.");
} else {
  console.log("Nao pode dirigir, menor de idade e sem CNH.");
}
*/

//Exercício 07

let numero = 0;
while (numero <= 10) {
  console.log(numero);
  numero++;
}


//Exercício 08
/*
for (let i = 100; i >= 50; i--) {
    console.log(i);
  }

*/

//Exercício 09

/*
for (let i = 0; i <= 50; i++) {
    if (i % 2 === 0) {
      console.log(i + " é par");
    } else {
      console.log(i + " é ímpar");
    }
  }
*/

//Exercício 10

/*
  let numero = 29; // Altere o número aqui para testar outros valores
  let ehPrimo = true;
  
  if (numero <= 1) {
    ehPrimo = false; // Números menores ou iguais a 1 não são primos
  } else {
    for (let i = 2; i < numero; i++) {
      if (numero % i === 0) {
        ehPrimo = false;
        break;
      }
    }
  }
  
  if (ehPrimo) {
    console.log(numero + " é um número primo.");
  } else {
    console.log(numero + " não é um número primo.");
  }
*/


//Exercício 11

/*
let a = 10;
let b = 5;
let c = a + b;

console.log(c);
*/

//Exercício 12

/*
let a = 10;
let b = 5;
let resultado;

if (a > b) {
  resultado = "É maior";
} else {
  resultado = "É menor";
}

console.log(resultado);
*/

//Exercício 13
/*
for(let i = 5; i > 20; i = i + 1 ){
    if(i + 10 <= 0){
        console.log("saiu loop");
        break;
    }
    console.log("prosseguindo loop");
}
*/

//Exercício 14

/*
let x = 0;
while (x < 11) {
    x = x + 1;
    if (x == 2) {
    }
    console.log(x);
    x = x + 1;
}

    */


/*
for (let i = 10; i > 0; i = i - 1){
    if(i % 2 <= 0){
        console.log("cai no continue")
        continue;

    }
    console.log("i")
}
    */

/*
let num = 5;
while (num < 50 ){
    console.log("num")
    num<=10
    
}*/


/*
let nome = "Julia";
switch(nome){
    case"João":
         console.log("o nome é João")
         break;
    case"marcos":
        console.log("o nome é marcos")
        break;
     default:
        console.log("não é João nem marcos")   
        break;
}
        */

// came or case = boa praticas escrever com as iniciais maisculas 






