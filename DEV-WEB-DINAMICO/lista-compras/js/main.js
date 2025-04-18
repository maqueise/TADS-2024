let inputItem = document.querySelector('#item')
let btnAdicionar = document.querySelector('#btnAdicionar')
let ulListaCompras = document.querySelector('#listaCompras')
let divTotalItens = document.querySelector('#total')

let listaCompras = []
if(localStorage.getItem('lista')){
    listaCompras = JSON.parse(localStorage.getItem('lista'))
}

function adicionarItem(){
   let item = inputItem.value
   listaCompras.push(item)
   renderLista()
   atualizarTotal()
   localStorage.setItem('lista',JSON.stringify(listaCompras))
}
function atualizarTotal(){
    divTotalItens.textContent = listaCompras.length
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
renderLista()
atualizarTotal()

btnAdicionar.onclick = adicionarItem