import { conectApi } from "./conectApi.js";


const forumalario = document.querySelector("[data-formulario");

async function criarProduto(evento) {
    evento.preventDefault();

    const nome = document.querySelector("[data-nome]").value;
    const preco = document.querySelector("[data-preco").value;
    const imagem = document.querySelector("[data-imagem]").value;

    console.log(conectApi.criaProduto(nome, preco, imagem));
    //await conectApi.criaProduto(nome, preco, imagem);
}

forumalario.addEventListener("submit", evento => criarProduto(evento));