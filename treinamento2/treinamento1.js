function calcularTabuada(numero=0){

console.log(`Calcular a tabuada do: ${numero}`);

for(i=0;i<=10;i++){
 console.log(`${numero}*${i} = ${numero*i}`);  
}
console.log(`Fim da tabuada`);

}

calcularTabuada(5);