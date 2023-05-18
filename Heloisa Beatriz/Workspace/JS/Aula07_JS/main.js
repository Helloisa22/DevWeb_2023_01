//Objetos
let aluno = {
    primeiroNome: "Abraao",
    nota: 8,
    idade: 102,
    altura: 3.15,
    hobbies: ["ping pong","Castor de Andrade","Futebol"],
    //              0               1              2 
    personalidade: "Jogador Caro",
    endereco: {
        numeroCasa: 34,
        nomeRua: "X",
        estado: "SP"
    }
}

console.log(aluno)
console.log(aluno.hobbies[1])
console.log(aluno.endereco.numeroCasa)

console.clear()
const {
    primeiroNome,
    idade,
    nota,
    altura
} = aluno;

console.log("pegando do objeto " +aluno.nota)
console.log(nota)
console.log(idade)
console.log(primeiroNome)
console.log(altura)

console.clear()
//Array de Objetos
const alunosIOS = [
    {
        nomeAluno: "Higor Fequer",
        idade: 54,
        nota: 9
    },
    {
        nomeAluno: "Marcos",
        idade: 12,
        nota: 8
    },
    {
        nomeAluno: "Thainá Zerbinatti",
        idade: 35,
        nota: 10
    }
]

console.log(alunosIOS)
console.log(alunosIOS[0])
console.log(alunosIOS[0].nota)

console.log(JSON.stringify(alunosIOS))

let jsonzinho = requisaoDaNet


console.log(JSON.parse(jsonzinho))