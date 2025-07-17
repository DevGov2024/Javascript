function criarHeroi(nome, poder){


return{
nome,
poder,
falar : function(){

console.log(`Olá, eu sou ${nome}, e meu poder é ${poder}`);
}

};

}

const heroi = criarHeroi('Superman', 'Força');
const heroi2 = criarHeroi('Batman', 'Inteligência');

heroi.pontofraco = 'Kryptonita';

console.log(heroi);
delete heroi2.poder;
console.log(heroi2);
heroi.falar();
heroi2.falar();