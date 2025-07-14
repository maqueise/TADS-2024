let mensagem = "Iniciando o script...";
console.log(mensagem);
function carregarDados(fnRetorno) {
    console.log('Executando Função...')
    setTimeout(function(){
        console.log('Executou depois de 3 segundos')
        let disciplinas = ['Desenvolvimento Web', 'Banco de Dados'];
        fnRetorno(disciplinas)
    },3000)  
} 
console.log('Buscando DADOS....')

carregarDados(function (disciplinas){
    console.log(disciplinas)
    console.log('FIM DA EXECUÇÃO')
})




// FUNÇÕES DE PRIMEIRA CLASSE // 
// declaração de função
function ola(){
   console.log('Olá') 
}
//ola()

// atribuição  de função / função anônima

let saudacao = function(){
   console.log('Olá Fulano de Tal') 
}
//saudacao()
// passagem de função como parametro de outra função
// Callback 
function msg(fn){
    fn('Mensagem de CallBack')
}
msg(function(mensagem){
    console.log(mensagem)
})
