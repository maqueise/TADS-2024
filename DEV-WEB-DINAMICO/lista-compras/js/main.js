let inputItem = document.querySelector('#item')
let btnAdicionar = document.querySelector('#btnAdicionar')
let btnAdicionarInicio = document.querySelector('#btnAdicionarInicio')
let btnRemoverUltimo = document.querySelector('#btnRemoverUltimo')
let btnRemoverInicio = document.querySelector('#btnRemoverInicio')
let ulListaCompras = document.querySelector('#listaCompras')
let divTotalItens = document.querySelector('#total')

let listaCompras = []

if(localStorage.getItem('lista')){
    listaCompras = JSON.parse(localStorage.getItem('lista'))
}

function adicionarItem(){
   let item = inputItem.value
   if(!validarDados(item)) return
   listaCompras.push(item)
   renderLista()
   atualizarTotal()
   salvarDados()
}
function adicionarItemInicio(){
    let item = inputItem.value
    if(!validarDados(item)) return
    listaCompras.unshift(item)
    renderLista()
    atualizarTotal()
    salvarDados()
}
function removerUltimo(){
    listaCompras.pop()
    renderLista()
    atualizarTotal()
    salvarDados()
}
function removerInicio(){
    listaCompras.shift()
    renderLista()
    atualizarTotal()
    salvarDados()
}
function atualizarTotal(){
    divTotalItens.textContent = listaCompras.length
}
function salvarDados(){
    localStorage.setItem('lista',JSON.stringify(listaCompras))
}
function renderLista(){
    ulListaCompras.innerHTML = ''
    for (let item of listaCompras){
        let li = document.createElement('li')
        li.textContent = item
        li.classList.add('list-row')
        ulListaCompras.appendChild(li)
    }
}
function validarDados(item){
    if(item.trim() ==''){
        alert('insira uma descrição')
        return false
    }else{
        return true
    }
}
renderLista()
atualizarTotal()

btnAdicionar.onclick = adicionarItem
btnAdicionarInicio.onclick = adicionarItemInicio
btnRemoverUltimo.onclick = removerUltimo
btnRemoverInicio.onclick = removerInicio