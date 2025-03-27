/* let personName = "Caio Maqueise"
personName = false 
let value1 = 100
let value2 = "50"
let result = value1 * value2

console.log('Hello Javascript Running!')
console.log(personName)
console.log(typeof personName)
console.log("O valor total é: ",result) */

/* 1ª - Selecionar os Elementos que serão manipulados */
let btn = document.querySelector('button')
let input = document.querySelector('input')
let divDisplay = document.querySelector('.display')
/* 2ª - Definir a função que será disparada por um evento*/
function changeColor(){
    divDisplay.textContent = input.value
}
/* 3ª- Vincula a função ao evento que será disparado pelo elemento */
btn.onclick = changeColor
