async function listaVideos () {
    const conexao = await fetch("http://localhost:3000/videos")
    const conexaoConvertida = await conexao.json();
    
    return conexaoConvertida;
}

async function criarVideo(titulo, descricao, url, imagem) {
    const conexao = await fetch ("http://localhost:3000/videos", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} mil vizualizações`,
            url: url,
            imagem: imagem
        })
    });

    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}

//Para pesquisar os videos
async function buscaVideo(termoBusca){
    const conexao = await fetch(`http://localhost:3000/videos?q=${termoBusca}`);
    const conexaoConvertida =  conexao.json();

    return conexaoConvertida;
}



// Exportando o conectaApi
export const conectaApi = {
    listaVideos,
    criarVideo,
    buscaVideo
}