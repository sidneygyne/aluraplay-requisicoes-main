import { conectaApi } from "./conectaApi.js";
import constroiCard from "./mostrarVideos.js";


async function buscarVideo(evento) {
    evento.preventDefault();
    const dadosDePesquisa = document.querySelector("[data-pesquisa]").value;
    const busca = await conectaApi.buscaVideo(dadosDePesquisa);

    // console.log(busca);
    
    const lista = document.querySelector("[data-lista]");

    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }

    busca.forEach(elemento => lista.appendChild(
        constroiCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem)))

        // mensagem de erro quando nao encontrar videos com termo pesquisado
        if(busca.length ==0) {
            lista.innerHTML = `<h2 class="mensagem__titulo">Não existem vídeos com o termo "${dadosDePesquisa}". Tente novamente!</h2>`
        }
    }

const botaoDePesquisa = document.querySelector("[data-botao-pesquisa]");

botaoDePesquisa.addEventListener("click", evento => buscarVideo(evento))




// 1. Você está importando corretamente os módulos necessários: "conectaApi.js e mostrarVideos.js".

// 2. A função "buscarVideo() "está bem implementada:
// Ela está recebendo o evento de clique do botão de pesquisa.
// Está pegando o valor do campo de pesquisa.
// Está chamando a função "buscaVideo()" do módulo "conectaApi" para obter os resultados da busca.
// Está limpando a lista de vídeos antes de adicionar os novos resultados.
// Está usando a função "constroiCard()" do módulo "mostrarVideos" para criar os novos cards de vídeo e adicioná-los à lista.

// 3. A lógica de limpar a lista antes de adicionar os novos resultados é importante, pois evita que a lista fique com itens duplicados ou incorretos.

// 4. O evento de clique no botão de pesquisa está sendo adicionado corretamente.