function somarNumero(){

let numero;

let total =0;

for(let i=0; i<=5; i++){

numero=Math.floor(Math.random()*101);

console.log(`${numero}`);
total+=numero;



}

console.log(`total:${total}`);


}

somarNumero();