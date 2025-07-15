//Gerar novas senhas diariamente

const gerarSenha = ()=>{const caracteres='ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%&';

let novaSenha = '';

for(i=0; i<=5;i++){

const indice = Math.round(Math.random()* caracteres.length);

novaSenha+=caracteres[indice];

}

return novaSenha;
}

console.log(`Senha gerada: ${gerarSenha()}`);




