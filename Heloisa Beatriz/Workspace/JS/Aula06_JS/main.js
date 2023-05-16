var abraao = true // boolean

var grimaldo = [true, 171, "Gabriel", 3.14]
//               0     1      2         3
console.log(abraao)
console.log(grimaldo)
console.log(grimaldo[2])
console.log(grimaldo[1])
// boolean 
// numerico 
// string 
// numero ponto flutuante

console.clear()
const turma = [
    ["turma 1", "Gabriel", 7],//0
    ["Turma 1", "Carina", 10],//1
    // 0           1       2
    ["Turma 1", "Felipe", 9]//2
]
console.log(turma)
turma[1][1] = "Jhonattan";
console.log(turma)

console.clear()

const array1 = ["Maçã", "Kiwi", "Pera", "Tomate"]
//                 0       1      2         3 
console.log(array1.toString())
console.clear()

var atrasado = ["Matheus", "Abraao", "Erick", "Jhonnatan"]
console.log(atrasado.join("*"))
console.log(atrasado.length)
let atrasado2 = atrasado.pop();
console.log(atrasado2)
console.log(atrasado)
console.clear()
let atrado2min = atrasado.push('Fequer')
console.log(atrado2min)
console.log(atrasado)
console.clear()
//shift()
let atrasada3min = atrasado.shift();
console.log(atrasada3min)
console.log(atrasado)
console.clear()
let outroAtrasado = atrasado.unshift('Adrielly')
console.log(outroAtrasado)
console.log(atrasado)
console.clear()

delete atrasado[2]

console.log(atrasado)