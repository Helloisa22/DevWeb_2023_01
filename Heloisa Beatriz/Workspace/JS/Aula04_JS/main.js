var notaMinima = 7

if(notaMarcos >= notaMinima){ // false
    console.log("Você está aprovado")
}else{
    console.log("Você está reprovado")
}


// impar ou par 
// se a sobra da divisão do número por 2 for
// 1 esse número é impar
// se a sobra da divisão do número por 2 for
// 0 esse par
var imparPar = 11
if(imparPar % 2 == 1){ // 0
    console.log("é impar")
}else{
    console.log("é par")
}


// Validação encadeada
// primeira validação se é par
// segunda validação número maior que 10
// o número é par e  maior que 10
// o número é par porem é menor que 10
var imparPar2 = 10
if(imparPar2 % 2 == 1){ // 0
    console.log("é impar")
}else{
    console.log("é par")
}

// 10 / 2 = 0
var resultado = imparPar2 % 2 == 1 ? console.log("é impar") : console.log("é par")

// Se é maior que 7 apresenta "Aprovado"
// Se é menor que 7 (6.9) apresenta "reprovado"
// Se está entre 7 e 5 "Aprovado por conselho"
if(4 > 7){
    console.log("Aprovado")
}else if(4 < 6.9 && 4 > 5){
    console.log("Aprovado por conselho")
}else{
    console.log("Reprovado")
}

var notaMarcos = 5
switch(notaMarcos > 7){ // false
    case true:
    console.log("Aprovado")
    break;
    case false:
    console.log("Reprovado")
    break;
}