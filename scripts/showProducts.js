import { conectApi } from "./conectApi.js";
const listOfProducts = document.getElementById('productsList');

export default function showProducts(nome, preco, imagem, id){
    const product = document.createElement('li');
    product.innerHTML = 
    `
        <li class="product">
            <div id="productBanner">
                <img class="productImage" src="${imagem}" alt="">
            </div>
            <div id="productDescription">
                <p class="productName">${nome}</p>
                <div id="productPriceInfo">
                    <p class="productPrice">$${preco}</p>
                    <i class="fa-solid fa-trash deleteButton" data-id="${id}"></i>
                </div>
            </div>
        </li>
    `
    return product;
}

async function productsList(){
    const apiProductsList = await conectApi.productsList();
    apiProductsList.forEach(product => listOfProducts.appendChild(showProducts(product.nome, product.preco, product.imagem, product.id)));
}

productsList();
