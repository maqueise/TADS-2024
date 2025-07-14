import './style.css'
const inputCep = document.querySelector('#cep')
const inputLogradouro = document.querySelector('#logradouro')
const inputBairro = document.querySelector('#bairro')
const inputCidade = document.querySelector('#cidade')

inputCep.addEventListener('focusout', function(event){
    let cep = event.target.value
    buscarEndereco(cep)
})

function preencherCampos(dados){
    inputLogradouro.value = dados.logradouro
    inputBairro.value = dados.bairro
    inputCidade.value = dados.localidade
}

function buscarEndereco(cep){
 let responsePromise = fetch(`http://viacep.com.br/ws/${cep}/json/`)
 responsePromise.then(function(response){
  let dadosPromise = response.json()
  dadosPromise.then(function(dados){
    preencherCampos(dados)
  })
 })
}



