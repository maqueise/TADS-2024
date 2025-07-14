import './style.css'

/* let responsePromise = fetch('https://ummyjson.com/products')
responsePromise.then(function(response){
    console.log(response)
}).catch(function(error){
    console.log('Erro ao buscar produtos:', error);
}); */

async function buscarProdutos() {
    let response = await fetch('https://dummyjson.com/products')
    let dados = await response.json()
    listarProdutos(dados.products)
}
buscarProdutos()

function listarProdutos(produtos) {
    const listaProdutos = document.querySelector('#listaProdutos')
    for(let produto of produtos){
    const card = document.createElement('div')
    card.className = "card bg-base-100 w-60 shadow-sm"
    card.innerHTML = `
       <figure>
    <img
      src="${produto.thumbnail}"
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">${produto.title}</h2>
    <div class="card-actions justify-end">
      R$ ${produto.price}
      <button class="btn btn-primary">Comprar</button>
    </div>
  </div>
    `
    listaProdutos.appendChild(card)
 }
}
