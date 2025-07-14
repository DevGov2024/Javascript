// Cotação de valor 

console.log(`Função de cotação`)

function coversaoValor(valorReal, cotacao){

    return valorReal, cotacao;

}

const valorReal = Math.floor(Math.random()* 1000);

const cotacaoDolar =5.55;


const cotacaoDia = coversaoValor(valorReal, cotacaoDolar);


console.log(`Cotação real:${valorReal.toFixed(2)}`);

console.log(`Cotação dolar: ${cotacaoDolar}`);

console.log(`cotação final:${cotacaoDia.toFixed(2)}`); 


