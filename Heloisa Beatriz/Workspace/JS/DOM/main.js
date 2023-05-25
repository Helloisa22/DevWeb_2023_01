// JavaScript e DOM
// objeto document
console.log(document);

// Acessar informações
console.clear();
console.log(document.domain); // IP
console.log(document.URL); // URL
console.log(document.title); // TITULO DO HTML
console.log(document.head); // CONFIGURAÇÕES DA HEAD
console.log(document.body); // ELEMENTOS QUE ESTÃO DENTRO DA BODY


// Alterar o título
document.title = "Todo mundo em panico";

// Criar um elemento <h1>
var nomeUsuario = 'Bruno'

if(nomeUsuario === 'Marcos'){
    let heading = document.createElement('H1');
    heading.innerHTML = 'Olá Marcos!';
    document.body.appendChild(heading);
}else{
    let heading = document.createElement('H1');
    heading.innerHTML = 'Olá Novo Uusuario!';
    document.body.appendChild(heading);
}


let teste = document.createElement('H1');
teste.innerHTML = 'Olá Novo Uusuario 2!';

let teste2 = document.createElement('h1');
teste2.innerHTML = 'Olá Novo mano!';
document.body.appendChild(teste,teste2);
document.body.appendChild(teste2);




// Utilizando boas praticas do Dom.. Crie no Javascript uma tag h1 com o texto "cadastro de usuario" insira essa tag no html utilizando o DOM. troque o nome do title para "cadastro empresa Macron"