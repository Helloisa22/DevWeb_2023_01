// Objetos
let pessoa = {
    firstName: 'Irmão do',
    lastName: 'Jorel',
    idade: 10,
    corDosOlhos: 'preto',
    hobbies: ['música', 'filmes', 'esportes'],
    endereco: {
        rua: 'Rua do bobos',
        numero: 0,
        cidade: 'São Paulo',
        estado: 'SP',
    },
};
console.log(pessoa); // retorna o Objeto
console.log(pessoa.firstName); // retorna o primeiro nome do Objeto
console.log(pessoa.lastName, pessoa.idade); // Retorna o sobrenome e a idade
console.log(pessoa.hobbies[1]); // retorna o segundo hobbie
console.log(pessoa.endereco.cidade); // retorna a cidade que está dentro do endereço

console.log(JSON.stringify(pessoa));

// Atribuição via desestruturação
console.clear();
const {
    firstName,
    lastName,
    endereco: { estado },
} = pessoa;
console.log(`${firstName} ${lastName} é de ${estado}`);

// Atribuição via desestruturação com arrays
console.clear();
const array = [1, 2, 3, 4, 5, 6, 8, 9];
let [pipoca, valor02, ...resto] = array;
console.log(pipoca);
console.log(valor02);
console.log(resto);

let [valorA, valorB, valorC, ...restante] = array;
console.log(valorA);
console.log(valorB);
console.log(valorC);
console.log(restante);

// Array de objetos
console.clear();
const tarefas = [
    {
        id: 1,
        texto: 'Levar o lixo para fora',
        isCompleted: true,
    },
    {
        id: 2,
        texto: 'Encontrar com o chefe',
        isCompleted: true,
    },
    {
        id: 3,
        texto: 'Consulta no dentista',
        isCompleted: false,
    },
];
console.log(tarefas);
console.log(tarefas[1].texto);
console.log(tarefas[2].id, tarefas[2].texto, tarefas[2].isCompleted);

// Transformar um array em JSON
console.log(JSON.stringify(tarefas));

// JSON
const tarefa_JSON =
'[{"id":1,"texto":"Levar o lixo para fora","isCompleted":true},{"id":2,"texto":"Encontrar com o chefe","isCompleted":true},{"id":3,"texto":"Consulta no dentista","isCompleted":false}]';
const objeto = JSON.parse(tarefa_JSON);
console.clear();
console.log(objeto);