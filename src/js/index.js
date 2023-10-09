const botoes = document.querySelectorAll('.botao');

botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {

        const botaoSelecionado = document.querySelector(".botao.selecionado");
        botaoSelecionado.classList.remove("selecionado");

        botao.classList.add("selecionado");

        const personagens = document.querySelectorAll(".personagem");
        const personagemSelecionado = document.querySelector(".personagem.selecionado");
        personagemSelecionado.classList.remove("selecionado");
        personagens[indice].classList.add("selecionado");
    });
});