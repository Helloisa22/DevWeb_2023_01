class pessoa{
    constructor(nome, dataNascimento){
        this.nome = nome;
        this.dataNascimento = new Date(dataNascimento);
    }

    getIdade(){ // 25/05/2023 
        return this.dataNascimento.getFullYear();
    }
}

 

console.log(pessoa.dataNascimento.getIdade())