// // Objeto --- Tipo Carro
// // Propriedades -- Caracteristicas do objeto
// // Metodos -- Ações que o objeto pode praticar
// // Classes
// // class Carro {
// //     constructor(nome, ano) { // propriedades
// //         this.nome = nome; //Ford, Audi
// //         this.ano = ano; // 2013 -- anos?  // 2013, 2019
// //     }
// //     idadeCarro(anoAtual) { // Metodo
// //         return anoAtual - this.ano;
// //     }
// // }
// // Instanciando objetos à classe
// // let meuCarro1 = new Carro('Ford', 2014);
// // let meuCarro2 = new Carro('Audi', 2019);
// // let meuNovoCarro = new Carro('A4', 2013)

// //Buscando o ano atual automaticamente
// // let dataHoje = new Date();
// // let anoAtual = dataHoje.getFullYear();
// // console.log(dataHoje);
// // console.log(`Essse é o ano ${anoAtual}`)
// // console.log(meuCarro1.idadeCarro(anoAtual));
// //Imprimindo valores
// // console.log(meuCarro1.nome);
// // console.log(meuCarro1.ano);
// // console.log(meuCarro2.nome);
// // console.log(meuCarro2.ano);

// // Mais um exmeplo de classe
// // console.clear();
// // class ClassePessoa {
// //     constructor(primeiroNome, sobrenome, ano) { // parametro são propriedades
// //         this.primeiroNome = primeiroNome;
// //         this.sobrenome = sobrenome;
// //         this.ano = new Date(ano);
// //     }
// //     pegaAnoAniversario() { // metodo 1 -- Ano do nascimento
// //         return this.ano.getFullYear();
// //     }
// //     pegaNomeCompleto() { // metodo 2 -- Nome completo
// //         return `${this.primeiroNome} ${this.sobrenome}`;
// //     }
// // }
// // // Instantiate object
// // const pessoa1 = new ClassePessoa('John', 'Doe', '1980-04-03');
// // const pessoa2 = new ClassePessoa('Marry', 'Smith', '1970-06-13');

// // console.log(pessoa1);
// // console.log(pessoa2.ano.getFullYear());
// // console.log(pessoa2.pegaAnoAniversario());
// // console.log(pessoa1.pegaNomeCompleto());

// // Lexical this em uma função
// // console.clear();
// // // Constructor de função - lexical this
// // function PessoaFunc(firstName, lastName, dob) {
// //     this.firstName = firstName;
// //     this.lastName = lastName;
// //     this.dob = new Date(dob);
// //     this.getBirthYear = function () {
// //         return this.dob.getFullYear();
// //     };
// //     this.getFullName = function () {
// //         return `${this.firstName} ${this.lastName}`;
// //     };
// // }
// // // Instanciando os objetos
// // const pessoa3 = new PessoaFunc('John', 'Doe', '1980-04-03');
// // const pessoa4 = new PessoaFunc('Marry', 'Smith', '1970-06-13');
// // console.log(pessoa3);
// // console.log(pessoa4.dob.getFullYear());

// // Adicionando prototipos
// PessoaFunc.prototype.getBirthDayMonth = function () {
//     let dados = [this.dob.getDate(), this.dob.getMonth() + 1];
//     return dados;
// };
// PessoaFunc.prototype.getFirstName = function () {
//     return `${this.firstName}`;
// };
// console.clear();
// console.log(pessoa3.getBirthDayMonth());
// console.log(pessoa4.getFirstName());
