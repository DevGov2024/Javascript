const premio = new Array ('Carro', 'casa','dinheiro',);

const premio2 =['Celular', 'Ventilador', 'Notebook'];




premio.sort();
premio2.sort();


const todoPremio = premio.concat(premio2);
console.log(premio);
console.log(premio2);
console.log(todoPremio);

premio.unshift( 'Cobertura');

console.log(premio);

console.log(premio.length);

premio.push('Moto');

console.log(premio);

premio.shift(0);
console.log(premio);

premio.pop(1);
console.log(premio);