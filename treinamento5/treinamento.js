const gerarSenha= () => { const caracteres = 'MSLTHETRIPPONFIGHER'; 

let password ='';

for(z=0; z<=4;z++){

indice = Math.round(Math.random()* caracteres.length);

password += caracteres[indice];

}
return password;
}

console.log(`Sua senha é: ${gerarSenha()}`);

