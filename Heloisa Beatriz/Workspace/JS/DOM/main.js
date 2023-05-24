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
