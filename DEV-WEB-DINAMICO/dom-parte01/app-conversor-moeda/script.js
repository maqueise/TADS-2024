let inputBRL =  document.querySelector('#inputBRL')
let inputUSD =  document.querySelector('#inputUSD')
let btnConverter =  document.querySelector('#btnConverter')
let cotacao = 5.75
let resultadoCotacao = 0
/* Definir a função que responderá ao evento do usuário */
function converter(){
   let valorBRL =  parseFloat(inputBRL.value)
   resultadoCotacao = valorBRL / cotacao
   inputUSD.value = resultadoCotacao.toFixed(2)
}

btnConverter.onclick = converter

