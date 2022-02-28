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

/*
Snack 1.9

let i = 1;
let somma = 0;
while(i < 11){
    somma += i;
    i++;
}

console.log("Somma: " + somma + ", Media: " + somma/i);
*/

/*
Snack 2.1

let somma = 0;
for(let i = 0; i < 5; i++){
    somma += parseInt(prompt("Inserisci un numero: "));
}
console.log(somma);


let somma = 0;
let i = 0;
while(i < 5){
    somma +=  parseInt(prompt("Inserisci un numero: "));
    i++;
}
console.log(somma);
*/

/*
Snack 2.2
Inserisci un numero, se è pari stampa il numero,
se è dispari stampa il numero successivo


let num = parseInt(prompt("Inserisci un numero"));
if(num % 2 != 0) num = num + 1;
console.log(num);

*/

/*
Snack 2.3
Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.
*/


let nomi = ["Gianni", "Marco", "Stefano", "Luigi","Riccarda","Claudia","Micaela","Alberto","Filippo","Lorena"];
let cognomi = ["Rossi", "Verdi", "Bianchi", "Totti", "Salvini", "Berlusconi", "Prodi", "Putin","Di Maio"];
let nome;
let cognome;
let invitati = [];


while(invitati.length < 3){
    nome = nomi[Math.floor(Math.random()*(nomi.length))];
    cognome = cognomi[Math.floor(Math.random()*(cognomi.length))];

    if(!invitati.includes(nome+" "+cognome)){
        invitati.push(nome+" "+cognome);
    }
}
console.log(invitati);
