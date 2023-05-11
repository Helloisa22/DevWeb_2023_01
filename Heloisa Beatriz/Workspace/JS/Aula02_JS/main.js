'use strict';

// Concatenar Strings
var texto1 = "Todos reprovados "

var texto2 = " X Apenas o Marcos Blanco Aprovado"

console.log(texto1 + texto2) // apresentar informação

console.clear()

// caracter de escape

var sober = "Now that I am sober I take back what I said Im \n sittin with this love hangover And boy, its hurtin my head Its the middle of October"

console.log(sober)

console.clear()

var boolean = false

console.log(boolean)

var silencio

console.log(silencio)

console.clear()

//NAN
var zeroByZero = 0 / 0
console.log(zeroByZero)

var num1 = 8 * null // 0
console.log(num1)

var num2 = "5" - "1 ovo"
console.log(num2)

var texto1 = "3" // tipo númerico

var texto2 = "Todos reprovados "

console.log(texto1 + texto2) // apresentar informação

console.clear()

//Operadores aritméticos
var ovo1 = 5
var ovo2 = 4
// adição
var adicao = ovo1 + ovo2
console.log("Resultado da adição é: " + adicao)
//Subtração
var subtracao = ovo1 - ovo2
console.log(subtracao)
//divisão
var divisao = ovo1 / ovo2
console.log(divisao)
// multiplicação
var multiplicacao = ovo1 * ovo2
console.log(multiplicacao)

console.clear()

// precedência dos operadores
// () / * + -
var numero3 = (3+5) / 4 + 6

// Comparação
var compara = ovo1 < ovo2
console.log(compara) // false

// terceira tipo de comparação
var variavel1 = 3 // númerico
var variavel2 = 3 // String = texto
var compara2 = variavel1 < variavel2
console.log(compara2) //true
console.clear()

var variavel3 = 3 // númerico
var variavel4 = "3" // String = texto
var comparaTudo = variavel3 <= variavel4 != variavel3 > variavel4 
                    // true diferente // false
console.log(!comparaTudo)

console.clear()

//  X = 2 + 2
var X = 2
X += X

console.log(X)
// 4

console.log(typeof 4.5) // number
console.log(typeof "Texto") // String
console.log(typeof true) // Boolean
console.log(typeof 'N') // String

console.clear()
var pipoca1 = "String"
var pipoca1 = 4
console.log(pipoca1)

let pipoca2

const pipoca3 = 4
pipoca3 = 34
console.log(pipoca3)