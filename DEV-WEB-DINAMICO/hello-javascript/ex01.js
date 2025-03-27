/* 1ª - Selecionar os Elementos que serão manipulados */
let btn = document.querySelector('button')

let divDisplay = document.querySelector('div')
/* 2ª - Definir a função que será disparada por um evento*/
function changeColor(){
    divDisplay.className = 'cor2'
}
/* 3ª- Vincula a função ao evento que será disparado pelo elemento */
btn.onclick = changeColor