let inputNome =  document.querySelector('input')
let btnEnviar =  document.querySelector('button')
let divAlerta = document.querySelector('div')

/* Definir a função que responderá ao evento do usuário */
function mostrarNome(){
    divAlerta.textContent = inputNome.value
}

btnEnviar.onclick = mostrarNome
inputNome.oninput = mostrarNome