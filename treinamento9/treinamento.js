const selecionados = new Array('Jão Paulo Vitor Teixeira Batista', 'Renan Coelho Borges Almeida cereija', 'Bruno Peixoto Mongo Morais', 'Umberto Costa Macedo Sandro de Oliveira');

const selecionadas  =['Monica Alvez Amareal Tereza', 'Vitória Lavosier Almeida', 'Ana Asis Mocca', 'Rita Brás Alexandre Cubas']

console.log(selecionados);
console.log(selecionados[1]);
console.log(selecionadas[3]);
console.log(selecionadas);

console.log(` Selecionados masculinos: ${selecionados.length}`);

console.log(`Selecionadas femininas: ${selecionadas.length}`);


selecionados.unshift('Paulo Bruno Motta');

selecionadas.push('Márcia Lenícia');

console.log(selecionadas);
console.log(selecionados);

selecionados.shift();
selecionados.pop();


console.log(selecionados);

console.log(selecionados.length);

selecionados.splice(2,0, 'Bruno Peixoto Mongo Morais', 'Umberto Costa Macedo Sandro de Oliveira');

console.log(selecionados);

const novaArray =selecionados.slice(1,2);
console.log('Novo array criado')

console.log(novaArray);

selecionadas.sort();

console.log(selecionadas);


const todosSelecionados = selecionados.concat(selecionadas);

console.log(todosSelecionados);