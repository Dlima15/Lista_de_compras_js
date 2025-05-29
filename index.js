import { criarItemDaLista } from "./scripts/criaritemdalista.js";
import verificarListaVazia from "./scripts/verificarListaVazia.js";


// Pega o elemento HTML da lista onde os itens de compra serão adicionados.
const listaDeCompras = document.getElementById("lista-de-compras");
// Pega o elemento HTML do botão "Adicionar Item".
const botaoAdicionar = document.getElementById("adicionar-item");
// Cria uma variável para contar os itens, começando em zero.


// Adiciona um "ouvinte" ao botão: quando ele for clicado, a função dentro dele será executada.
botaoAdicionar.addEventListener("click", (evento) => {
    // Impede o comportamento padrão de recarregar a página ao clicar no botão de um formulário.
    evento.preventDefault();

    const itemDaLista = criarItemDaLista();
    // Adiciona o item da lista completo (com checkbox, nome, data) à lista de compras principal.
    listaDeCompras.appendChild(itemDaLista)


    verificarListaVazia(listaDeCompras);
})



verificarListaVazia(listaDeCompras);



 

 



