//const btnFront = document.getElementById("btnFiltrarLivrosFront")
//btnFront.addEventListener("click", filtrarLivros)
const botoes = document.querySelectorAll(".btn")
botoes.forEach((btn) => btn.addEventListener("click", filtrarLivros))

function filtrarLivros() {
  const elementoBtn = document.getElementById(this.id)
  const categoria = elementoBtn.value
  let livrosFiltrados =
    categoria == "disponivel"
      ? filtrarPorDisponibilidade()
      : filtrarPorCategoria(categoria)
  exibirLivrosTela(livrosFiltrados)
  if (categoria == "disponivel") {
    const valorTotal = calculaValorTotalLivrosDisponiveis(livrosFiltrados)
    exibirValorTotalLivros(valorTotal)
  }
  // categoria == "disponivel" ? exibirValorTotalLivros() : ""
}

function filtrarPorCategoria(categoria) {
  return livros.filter((livro) => livro.categoria == categoria)
}

function filtrarPorDisponibilidade() {
  return livros.filter((livro) => livro.quantidade > 0)
}

function exibirValorTotalLivros(valorTotal) {
  elementoValorTotalLivros.innerHTML = `
    <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
    </div>
  `
}
