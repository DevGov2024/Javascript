//cotação valor

console.log(`Conversão de valores`);

function conversao(valorReal, cotacaoDolar){
return(valorReal/cotacaoDolar);



}

const valorReal= Math.floor(Math.random()*1000);
const cotacaoDolar = 5.55;

const cotacaoDia= conversao(valorReal, cotacaoDolar);


console.log(`${valorReal.toFixed(2)}`);
console.log(`${cotacaoDolar}`);

console.log(`${cotacaoDia.toFixed(2)}`);
