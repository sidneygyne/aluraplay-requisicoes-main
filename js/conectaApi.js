// json-server --watch db.json


async function listaVideos () {
    const conexao = await fetch("http://localhost:3000/videos"); // servidor criado pelo comando: json-server --watch bd.joson  (Endpoints: http://localhost:3000/videos)
    const conexaoConvertida = await conexao.json(); // Convertendo os dados recebidos em um objeto JSON

    return conexaoConvertida;
}

async function criaVideo(titulo, descricao, url, imagem) {
    const conexao =  await fetch("http://localhost:3000/videos", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} mil visualizações`,
            url: url,
            imagem: imagem
        })
    });

    if (!conexao.ok) { // se conexao nao estiver ok -- para exibir na tela arquivo criarVideo.js foi acrescentado no codigo "try" e "catch" 
        throw new Error ("Não foi possível enviar o vídeo!");
    }

    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

async function buscaVideo(termoDeBusca) {
    const conexao = await fetch(`http://localhost:3000/videos?q=${termoDeBusca}`)
    const conexaoConvertida = conexao.json();

    return conexaoConvertida;
}


export const conectaApi = {
    listaVideos,
    criaVideo, 
    buscaVideo
}


// 1. A função "listaVideos" é assíncrona e utiliza a função "fetch" para fazer uma requisição GET para o endpoint "http://localhost:3000/videos". Essa URL provavelmente foi criada usando o comando "json-server --watch db.json", que cria um servidor local com uma API REST baseada no arquivo "db.json".

// 2. A função "listaVideos" aguarda a resposta da "requisição (await conexao)" e, em seguida, converte a resposta em um objeto JSON usando o método "conexao.json()". Finalmente, a função retorna esse objeto JSON.

// 3. A função "criaVideo" também é assíncrona e utiliza a função "fetch" para fazer uma requisição POST para o mesmo endpoint "http://localhost:3000/videos". Essa função recebe 4 parâmetros: "titulo, descricao, url e imagem".

// 4. Dentro da função "criaVideo", é configurado o método da requisição como "POST" e é adicionado um objeto "headers" com o "Content-type" definido como "application/json". Isso indica que o corpo da requisição será enviado no formato JSON.

// 5. O corpo da requisição é criado como um objeto JavaScript e, em seguida, convertido para uma string JSON usando "JSON.stringify()". Esse objeto contém as propriedades "titulo, descricao, url e imagem," que são preenchidas com os valores recebidos como parâmetros da função.

// 6. Assim como na função "listaVideos", a função "criaVideo" aguarda a resposta da requisição "(await conexao)" e, em seguida, converte a resposta em um objeto JSON usando o método "conexao.json()". Finalmente, a função retorna esse objeto JSON.

// 7."buscaVideo()": Esta função utiliza o método "fetch" para fazer uma requisição GET para o endpoint "http://localhost:3000/videos?q=${termoDeBusca}", onde "termoDeBusca" é uma variável que não está definida no código fornecido.
// A Promise retornada pelo "fetch" é aguardada usando await e os dados recebidos são convertidos de JSON para um objeto JavaScript usando "conexao.json()".
// Finalmente, a função retorna o objeto JavaScript contendo os dados dos vídeos encontrados pela busca.

// 8. Por fim, o código exporta um objeto "conectaApi" que contém as funções "listaVideos", "criaVideo" e "buscaVideo".