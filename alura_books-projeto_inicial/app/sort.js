const btnOrdenarPreço = document.getElementById("btnOrdenarPorPreco")
btnOrdenarPreço.addEventListener("click", ordenarLivroPreco)

function ordenarLivroPreco() {
  let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco)
  exibirLivrosTela(livrosOrdenados)
}
