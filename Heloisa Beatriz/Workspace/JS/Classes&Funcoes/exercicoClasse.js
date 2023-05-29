class Pessoa{
    constructor(nome, dataNascimento){
        this.nome = nome;
        this.dataNascimento = new Date(dataNascimento);
    }

    getIdade(anoAtual){ // 25/05/2023
        anoAtual = new Date();
        return anoAtual.getFullYear() - this.dataNascimento.getFullYear();
    }
}

let pessoas = [
    new Pessoa("Joao",    '1977-02-13'), // 0 // Intancia o Objeto
    new Pessoa("Pedro",   '1998-05-31'), // 1
    new Pessoa("Maira",   '1978-03-13'), // 2
    new Pessoa("Rafa",    '1978-11-18'), // 3
    new Pessoa("Ana",     '1994-04-27'), // 4
    new Pessoa("Moana",   '2013-06-28'), // 5
    new Pessoa("Rafaela", '2002-08-10'), // 6
    new Pessoa("Marcos",  '1989-02-15'), // 7
    new Pessoa("Marcia",  '1997-07-16'), // 8
    new Pessoa("Paulo",   '1987-05-19'), // 9
]

Pessoa.prototype.getNiver = function () { // dia do mes
    let mesNascimento = [this.dataNascimento.getMonth() + 1];
    return mesNascimento;
}

Pessoa.prototype.getNome = function() {
    return `${this.nome}`
}

for(var i = 0; i < pessoas.length; i++){
    let mesAtual = new Date().getMonth() + 1;
    // var diaCorrente = new Date().getDate() + 1;

    if(mesAtual < pessoas[i].getNiver()){
        console.log(`${pessoas[i].getNome()} tem ${pessoas[i].getIdade()} anos e já/ainda não fez aniversário esse ano`) 
    }
}