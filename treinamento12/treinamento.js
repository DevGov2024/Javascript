function Usuarios(id, nome, idade, email, profissao){

    this.id = id;
    this.nome= nome;
    this.idade = idade;
    this.email = email;
    this.profissao = profissao;






}

const usuario1=new Usuarios(12343, 'Gabriel', 21, 'mouraghbm@gmaIL.com', 'analista de sistemas');

console.log(usuario1);