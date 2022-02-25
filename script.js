/*
snack 1

let input = [];

input.push(parseInt(prompt("inserisci un numero!")));
input.push(parseInt(prompt("inserisci un numero!")));

console.log(Math.max(...input));

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

let invitati = ["Marco","Luigi","Luca","Leonardo","Sara","Rosella"];
let nome = prompt("Inserisci il tuo nome: ");
let invitato = false;

for(let i = 0; i < invitati.length; i++){
    if(nome.toLowerCase() == invitati[i].toLowerCase()){
        invitato = true;
    }
}
invitato ? console.log(`Benvenuto ${nome}!`) : console.log("Non sei stato invitato.");
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

Chiedi un numero di 4 cifre all’utente
e calcola la somma di tutte le cifre che compongono il numero.

let input = prompt("Inserisci un numero: ");
let res = 0;
for(let i = 0; i < input.length; i++){
    res = parseInt(res) + parseInt(input[i]);
} 
console.log(res);
*/