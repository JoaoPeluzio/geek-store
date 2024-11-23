import { pegarProdutos, adicionaProdutos } from "./api.js";
import { mostraProdutos, pegaDadosForm, previneEnvioPadraoForm, limpaForm, limpaOForm } from './ui.js';

//função que carrega e exibe os produtos na tela

async function carregaProdutos() {
    try {
        const produtos = await pegarProdutos();
        mostraProdutos(produtos);
    } catch (error) {
        console.error('Erro ao carregar produtos.', error);
    }
}

//função que adiciona um novo produto

async function adicionaNovoProduto() {
    const novoProduto = pegaDadosForm(); 
    try {
        await adicionaProdutos(novoProduto);
        limpaOForm();
        carregaProdutos();
    } catch (error) {

        console.error('Erro ao adicionar produto.', error);
    }
}

previneEnvioPadraoForm(adicionaNovoProduto);

carregaProdutos();

