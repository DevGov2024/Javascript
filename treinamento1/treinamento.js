console.log(`Iniciar sorteiro`);


function calcularSorteio(){

let numero;
let total = 0;



for(i=0;i<=5;i++){
numero= Math.floor(Math.random()*100);
console.log(`Luck:${numero}`);

total+=numero;

}
console.log(`${total}`);

}

calcularSorteio();