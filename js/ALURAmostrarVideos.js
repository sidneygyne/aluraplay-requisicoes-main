import { conectaApi } from "./conectaApi.js";

const lista = document.querySelector("[data-lista]");

function constroiCard(titulo, descricao, url, imagem) {
    const video = document.createElement("li");
    video.className = "videos__item";
    video.innerHTML = `<iframe width="100%" height="72%" src="${url}"
    title="${titulo}" frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen></iframe>
<div class="descricao-video">
    <img src="${imagem}" alt="logo canal alura">
    <h3>${titulo}</h3>
    <p>${descricao}</p>
</div>`

    return video;
}

async function listaVideos() {
    const listaApi = await conectaApi.listaVideos();
    listaApi.forEach(elemento => lista.appendChild(
        constroiCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem)))
}

listaVideos();



// import { conectaApi } from "./conectaApi.js";: Essa linha importa uma função chamada "conectaApi" de um arquivo chamado c"onectaApi.js". Essa função provavelmente é responsável por fazer a conexão com uma API que fornece os dados dos vídeos.

// const lista = document.querySelector("[data-lista]");: Essa linha seleciona um elemento HTML que possui o atributo "data-lista". Esse elemento provavelmente é onde a lista de vídeos será exibida.

// function constroiCard(titulo, descricao, url, imagem): Essa função recebe quatro parâmetros (título, descrição, URL e imagem) e cria um elemento HTML <li> com uma estrutura específica para exibir um vídeo. Ela retorna esse elemento.

// async function listaVideos(): Essa é uma função assíncrona que faz o seguinte:
// Chama a função "conectaApi.listaVideos()" para obter a lista de vídeos da API.
// Itera sobre cada elemento da lista de vídeos.
// Para cada elemento, chama a função "constroiCard()" passando os dados do vídeo como parâmetros.
// Adiciona o elemento criado pela função "constroiCard()" como filho do elemento selecionado anteriormente "(lista)".

// listaVideos();: Essa linha chama a função "listaVideos()", que é responsável por exibir a lista de vídeos na página.
// Em resumo, esse código é responsável por buscar os dados dos vídeos em uma API, criar elementos HTML para exibir cada vídeo e adicioná-los à lista na página. Isso permite que a página exiba uma lista de vídeos de forma dinâmica, sem a necessidade de ter todo o conteúdo hardcoded no HTML.

// Algumas observações adicionais:
// O código utiliza a sintaxe "async/await" para lidar com a chamada assíncrona à API.
// A função "constroiCard()" é responsável por criar o HTML para exibir cada vídeo, incluindo a imagem, título e descrição.
// A função "listaVideos()" é responsável por chamar a API, iterar sobre os resultados e adicionar cada vídeo à lista na página.