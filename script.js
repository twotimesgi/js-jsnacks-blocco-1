/*
snack 1

ALTERNATIVA 1

let input = [];

input.push(parseInt(prompt("inserisci un numero!")));
input.push(parseInt(prompt("inserisci un numero!")));

console.log(Math.max(...input));

ALTERNATIVA 2 
let a = prompt("inserisci un numero: ");
let b = prompt("inserisci un numero: ");

if(a!=b){
    a > b ? console.log(a) : console.log(b);
}else{
    console.log("I numeri sono uguali!");
}

ALTERNATIVA 3
let input = [];
let max = 0;

input.push(parseInt(prompt("inserisci un numero!")));
input.push(parseInt(prompt("inserisci un numero!")));

for(let i = 0; i<input.length; i++){
    if(input[i] > max){
        max = input[i];
    }
}
console.log(max);
*/

/*
snack 2

let input1 = prompt("Parola 1:");
let input2 = prompt("Parola 2:");

if(input1.length > input2.length){
    console.log(input1);
    console.log(input2);
}else if(input2.length > input1.length){
    console.log(input1);
    console.log(input2);
}else{
    console.log("Le parole sono lunghe uguali!");
}
*/

/*

snack 3

let sum = 0;
for(let i = 0; i < 10; i++){
    sum += parseInt(prompt("Inserisci un numero:"));
}
console.log(sum); 
*/

/* 
snack 4
ALTERNATIVA 1

let invitati = ["Marco","Luigi","Luca","Leonardo","Sara","Rosella"];
let nome = prompt("Inserisci il tuo nome: ");
let invitato = false;

for(let i = 0; i < invitati.length; i++){
    if(nome.toLowerCase() == invitati[i].toLowerCase()){
        invitato = true;
    }
}
invitato ? console.log(`Benvenuto ${nome}!`) : console.log("Non sei stato invitato.");

ALTERNATIVA 2

let invitati = ["Marco","Luigi","Luca","Leonardo","Sara","Rosella"];
for(let i = 0; i < invitati.length; i++){
    invitati[i] = invitati[i].toLowerCase();
}

let nome = prompt("Inserisci il tuo nome: ").toLowerCase();
invitati.includes(nome) ? console.log(`Benvenuto ${nome}!`) : console.log("Non sei stato invitato!");
 */

/* 
snack 5

let array = [];
let input;
for(let i = 0; i < 6; i++){
    input = parseInt(prompt("Inserisci un numero: "));
    if(input%2 != 0) array.push(input);
}
console.log(array);

*/

/*
snack 6

let input = "";
let res = 0;

while(input.length != 4){
    input = prompt("Inserisci un numero di 4 cifre: ");
}
for(let i = 0; i < input.length; i++){
    res = parseInt(res) + parseInt(input[i]);
}

console.log(res);

*/