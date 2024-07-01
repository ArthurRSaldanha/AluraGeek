async function productsList(){
    const getApi = await fetch("http://localhost:3000/produtos");
    const convertApi = await getApi.json();

    return convertApi;
}

async function criaProduto(nome, preco, imagem) {
    const conexao = fetch("http://localhost:3000/produtos", {
        method : "POST",
        headers : {
            "Content-type" : "application/json"
        },
        body : JSON.stringify({
            nome: nome,
            preco: preco,
            imagem: imagem
        })
    });

    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

async function deleteProduct(idProduct) {
    const getApi = fetch(`http://localhost:3000/produtos/${idProduct}`,{
        method: 'DELETE',
        headers : {
            'Content-type' : 'application/json'
        }
    });

    const convertApi = (await getApi).json();
    return convertApi;
}

export const conectApi =  {
    productsList,
    criaProduto,
    deleteProduct
}