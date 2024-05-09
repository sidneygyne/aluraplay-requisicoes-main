import { conectaApi } from "./conectaApi.js";

const lista = document.querySelector("[data-lista]");

export default function constroiCard(titulo, descricao, url, imagem) {
    const video = document.createElement("li");
    video.className = "videos__item";
    video.innerHTML = `<iframe width="100%" height="72%" src="${url}"
        title="${titulo}" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
    </iframe>
    <div class="descricao-video">
        <img src="${imagem}" alt="logo canal alura">
        <h3>${titulo}</h3>
        <p>${descricao}</p>
    </div>`

    return video;
}


async function listaVideos() {
    try {
        const listaApi = await conectaApi.listaVideos();
        listaApi.forEach(elemento => lista.appendChild(
        constroiCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem)))
    } catch {
       lista.innerHTML = `<h2 class="mensagem__titulo">Não foi possivel carregar lista de vídeos!</h2>` 
    }
    
}

listaVideos();


// Descrição do código
// 1. "import { conectaApi } from "./conectaApi.js"";: Essa linha importa a função "listaVideos()" do arquivo "conectaApi.js" para ser utilizada neste arquivo.

// 2. "const lista = document.querySelector("[data-lista]")";: Essa linha seleciona um elemento HTML com o atributo "data-lista" e armazena uma referência a ele na variável "lista". Esse elemento provavelmente será usado para exibir a lista de vídeos.

// 3. "function constroiCard(titulo, descricao, url, imagem)": Essa função cria um elemento "<li>" com a classe "videos__item" e preenche seu conteúdo HTML com as informações passadas como parâmetros (título, descrição, URL do vídeo e URL da imagem). Ela retorna esse elemento "<li>" para ser usado posteriormente.

// 4. "async function listaVideos()": Essa função assíncrona é responsável por obter a lista de vídeos da API e exibi-los na tela.
// Ela: Chama a função "conectaApi.listaVideos()" (importada anteriormente) para obter a lista de vídeos.
// Itera sobre cada elemento da lista e chama a função "constroiCard()" para criar um card de vídeo.
// Adiciona cada card de vídeo como filho do elemento "lista" selecionado anteriormente.

// 5. "listaVideos();": Essa linha chama a função "listaVideos()" para iniciar a exibição da lista de vídeos.

// 6. export default: é uma funcionalidade do JavaScript que permite exportar um valor padrão de um módulo
// Quando se define uma função, classe ou variável como export default em um módulo, isso significa que esse será o valor padrão exportado daquele módulo.
