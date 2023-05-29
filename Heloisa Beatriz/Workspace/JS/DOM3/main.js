// Método querySelector
let paragrafo = document.querySelector('p'); // pega a primeira tag que contrar no codigo
paragrafo.style.background = '#FBBEBA';

// Busca a tag e a classe
let parClasse = (document.querySelector('p.exemplo').innerHTML =
    'Mudei o texto aqui'); // guarda o caminho do elemento e a mudança

// Busca somente a classe
let elemento = (document.querySelector('.myclass').style.fontSize = 'x-large');

//EVENTOS
// Função chamada pelo evento onclick
const Clique = () => {
    document.querySelector('#my-span').style.backgroundColor = '#CEFBBA';
};

// METODO QUERYSELECTORALL
// Método querySelectorAll
let listaLi = document.querySelectorAll('li');
for (i = 0; i < listaLi.length; i++) {
    listaLi[i].style.border = '1px solid #0000FF';
    listaLi[i].style.padding = '3px';
}
console.log(listaLi);

// Busca por classe
let myItem = document.querySelectorAll('.item');
myItem.forEach((item) => (item.style.backgroundColor = '#E7BAFB'));

// Busca por elemento e classe
let myTeste = document.querySelectorAll('li.teste');
myTeste.forEach((elemento) => (elemento.style.color = '#FFF'));