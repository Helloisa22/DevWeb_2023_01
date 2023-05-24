function sorteioDaVida() {

    var numerosDoDestino = Math.floor(Math.random() * 101) + 1;

    console.log("Número sorteado: " + numerosDoDestino);
}


let heading = document.createElement('input');
heading.innerHTML = sorteioDaVida();;

