const produtoLista = document.getElementById("product-list");
const produtoForm = document.getElementById("product-form");

// função para exibir produtos na tela

export function mostraProdutos(produtos) {
  produtoLista.innerHTML = "";
  produtos.forEach((produto) => {
    const produtoCard = document.createElement("div");
    produtoCard.classList.add("card");
    produtoCard.innerHTML = `
                    <div class="card-body">
                    <img src="${produto.imagem}" class="card-img-top" alt="${produto.nome}">
                    <div class="card-title">
                    <h5>${produto.nome}</h5>
                    <div class="card-title-price">
                    <p class="card-text">R$ ${produto.preco}</p>
                    <a href="#" class="btn btn-primary"><img src="assets/delete.png" alt="logo de deletar"></a>
                    </div> 
                    </div>`
                    ;

    produtoLista.appendChild(produtoCard);
  });
}

//função para pegar os dados do formulario

export function pegaDadosForm() {
  const nomeProduto = document.getElementById("product-name").value;
  const precoProduto = parseFloat(
    document.getElementById("product-price").value
  );
  const imgProduto = document.getElementById("product-image").value;

  return {
    nome: nomeProduto,
    preco: precoProduto,
    imagem: imgProduto,
  };
}

//função para previnir o padrão de envio do formulario

export function previneEnvioPadraoForm(onSubmit) {
  produtoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    onSubmit();
  });
}

// função para limpar o formulario

export function limpaForm() {
  document.getElementById("product-name").value = "";
  document.getElementById("product-price").value = "";
  document.getElementById("product-image").value = "";
}
//função para limpar o formulario no clique

export function limpaOForm() {
  const botaoLimpaForm = document.getElementById("clear-form");
  botaoLimpaForm.addEventListener("click", () => {
    limpaForm();
  });
}

limpaOForm();
