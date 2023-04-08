let livros = []
const api = "https://guilhermeonrails.github.io/casadocodigo/livros.json"

buscarLivrosApi()

//Queremos que essa função seja assíncrona. Para isso, precisamos definir a palavra async antes da palavra function
async function buscarLivrosApi() {
  // Para dizer que essa função precisa esperar uma promessa de receber todos os livros dessa api, vamos usar o await
  const res = await fetch(api)
  livros = await res.json()
  let livrosComDesconto = aplicarDesconto(livros)
  exibirLivrosTela(livrosComDesconto)
}
