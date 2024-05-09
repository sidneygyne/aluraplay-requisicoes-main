import { conectaApi } from "./conectaApi.js"

const formulario = document.querySelector("[data-formulario]");

async function criaVideo(evento) {
    evento.preventDefault(); // impede que a pagina atualiza apos clicar no botao enviar
    const imagem = document.querySelector("[data-imagem]").value;
    const url = document.querySelector("[data-url]").value;
    const titulo = document.querySelector("[data-titulo]").value;
    const descricao = Math.floor(Math.random() * 10).toString(); // GERA UM NUMERO ALEATORIO PARA DESCRIÇÃO NO NUMERO DE VISUALIZAÇOES 
    try {
        await conectaApi.criaVideo(titulo, descricao, url, imagem); // apos import da linha um conecta Api
        window.location.href = "../pages/envio-concluido.html";
    } catch (e) {
        alert(e); // mensagem de alerta de erro // linha 25 conecta Api.js
    }
    
}

formulario.addEventListener("submit", evento => criaVideo(evento))

//DESCRIÇÃO DO CÓDIGO
//1. Importação da função "conectaApi" do arquivo "conectaApi.js".
//2. Seleção do formulário usando o seletor "data-formulario".
//3. Definição da função "criaVideo" que é chamada quando o formulário é submetido.
// A função "criaVideo" recebe o evento como parâmetro.
// Ela impede o comportamento padrão de atualização da página usando "evento.preventDefault()".
// Seleciona os valores dos campos de imagem, URL, título e descrição.
// A descrição é gerada aleatoriamente usando "Math.floor(Math.random() * 10).toString()".
// Chama a função "conectaApi.criaVideo()" passando os valores coletados dos campos.
// Redireciona o usuário para a página "envio-concluido.html" usando "window.location.href".
//4. Adiciona um event listener ao formulário, chamando a função "criaVideo" quando o evento de submit for disparado.
// Esse código integra a função "conectaApi.criaVideo()" para enviar os dados do formulário para a API. Ele também gera uma descrição aleatória e redireciona o usuário para a página de envio concluído após o envio bem-sucedido.