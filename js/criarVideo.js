import { conectaApi } from "./conectaAPI.js";

const formulario = document.querySelector("[data-formulario]");

async function criarVideo (evento) {
    //Para não ter o envio padrão e atualizar sair da pagina ao enviar
    evento.preventDefault();

    const imagem = document.querySelector("[data-imagem]").value;
    const url = document.querySelector("[data-url]").value;
    const titulo = document.querySelector("[data-titulo]").value;
    const descricao = Math.floor(Math.random()*10).toString();

    // Tratando erros que podem acontecer ao inserir video
    try{
        await conectaApi.criarVideo(titulo, descricao, url, imagem);
        
        window.location.href = "/pages/envio-concluido.html";
    }catch (e){
        alert(e);
    }
}

formulario.addEventListener("submit", evento => criarVideo(evento));
