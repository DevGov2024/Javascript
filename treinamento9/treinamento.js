const selecionado = new Array('Bruno', 'ótávio', 'Gilmar');

const selecionadas = ['Maria', 'Carla', 'Merlinda'];


console.log(selecionado);

console.log(selecionadas);


console.log(selecionado.length);
console.log(selecionadas.length);

selecionado.unshift('Marlon');
selecionadas.unshift('Bruna');
console.log(selecionado);
console.log(selecionadas);

selecionado.push('Ricardo');
console.log(selecionado);

selecionado.shift();
selecionado.pop();
console.log(selecionado);

const todosJuntos= selecionado.concat(selecionadas);

console.log(todosJuntos);