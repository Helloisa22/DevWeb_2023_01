let firstNumber = document.getElementById('first');
let multiplicationTable = document.getElementById('blankSpace');

const Calculate = () => {
    let guardaValue = firstNumber.value;

    for(i = 0; i <= 10; i++){
        multiplicationTable.innerHTML += `<br> ${guardaValue} x ${[i]}  = ${guardaValue * [i]} <br>`
    }

    for(i = 0; i <= 10; i++){
        multiplicationTable.innerHTML += `<br> ${guardaValue} x ${[i]}  = ${guardaValue * [i]} <br>`
    }

    console.log(guardaValue)
}