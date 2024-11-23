const apiUrl = 'http://localhost:3000/products';


//pegando produto da api

export async function pegarProdutos() {
    try {
        //fazendo a requsição get para a API
        const resposta = await fetch(apiUrl);
        if (!resposta.ok) {
            throw new Error('Erro ao buscar produto!');
        }
        //retorna o JSON com os dados dos produtos (converte)
        return await resposta.json();
    } catch (error){
        console.error('Erro ao carregar produtos.', error);
        return[];
    }

}

//adicionando os produtos na api

export async function adicionaProdutos(produto) {
    try {
        //faz a requisição POST para adicionar um novo produto
        const resposta = await fetch(apiUrl, {
            method: 'POST',
            headers: { 
                'Content-type': 'application/json' 
                },
            body: JSON.stringify(produto), //Envia o produto como JSON no corpo da requisição
        });

        if (!resposta.ok) {
            throw new Error('Erro ao adicionar produto!');
        }

        return await resposta.json();

    } catch (error) {
        console.error('Erro ao adicionar produto. ', error);
    }
}







