let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', buscarItems);

// Adiciona item
function addItem(e) {
    e.preventDefault();
    // Pega o valor do <input>
    let newItem = document.getElementById('item').value;
    // Cria novo elemento <li>
    let li = document.createElement('li');
    // Adiciona classe
    li.className = 'list-group-item';
    // Adiciona o texto no novo elemento com o valor armazenado no newItem
    li.appendChild(document.createTextNode(newItem));
    // Cria o elemento botão para deletar um item
    let deleteBtn = document.createElement('button');
    // Adiciona classes para o botão de deletar
    deleteBtn.className = 'btn btn-danger btn- float-end delete';
    // Acrescenta o texto no novo elemento
    deleteBtn.appendChild(document.createTextNode('x'));
    // Acrescenta o botão no elemento li
    li.appendChild(deleteBtn);
    itemList.appendChild(li); // Adiciona o novo item na lista
    form.reset(); // Limpa o formulário
}

// Função Remove Item
function removeItem(e) {
    if (e.target.classList.contains('delete')) {
        let li = e.target.parentElement;
        itemList.removeChild(li);
    }
}

// Função buscarItems
function buscarItems(e) {
    // Converte o texto digitado para minúsculo
    let text = e.target.value.toLowerCase();
    // Busca todos os itens
    let items = itemList.getElementsByTagName('div');
    // Converte os itens para array
    Array.from(items).forEach(function (item) {
        // Busca o primeiro item da lista
        let itemName = item.firstChild.textContent;
        
        var transformaJSON = JSON.stringify(itemName)
    });
}


// Crie um sistema de login com os seguintes campos usuario, senha e cargo
// CSS: Centralize os três campos coloque eles dentro de uma div com borda e uma fonte e cor de sua escolha

// JS: No Javascript deve seguir as seguintes regras e validações abaixo
// Campo Usuario -- Tipo de entrada texto, o sistema deve receber esse texto em Maiusculo
// Campo Senha   -- Minimo de 8 caracteres tem que conter um caracter especial, um numero, uma letra maiuscula
// Campo Cargo   -- O sistema deve receber o nome do cargo em uma lista supensa apenas com o texto e o usuario vai escolher qual cargo ele pertence
// Os número são apenas para validar no JS
// Estagio = 1, Trainne = 2, Analita = 3, JR = 4, 
// SN = 5, PL = 6, Lider Tecnico = 7, CEO = 8

// Após validar os campo acima e identificar o cargo do usuario 
// você  utilizando os respectivos números
// o sistema deve mostrar um alert com a seguinte mensagem 
// "Olá, Fulano, seu cargo é ***, vamos te 
// redirecionar para a pagina desejada"

// Fique a vontade para redirecionar o usuario para uma pagina de sua escolha




