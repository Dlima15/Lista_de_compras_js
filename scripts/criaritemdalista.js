import gerarDiaDaSemana from "./geradrDiaDaSemana.js";

// Pega o elemento HTML da caixa de texto onde o usuário digita o item.
const inputItem = document.getElementById("input-item")


let contador = 0;


export function criarItemDaLista() {
   
    // Verifica se a caixa de texto do item está vazia.
    if (inputItem.value === "") {
        // Se estiver vazia, exibe um alerta para o usuário.
        alert("Por favor, insira um item!");
        // Sai da função, impedindo que o resto do código seja executado.
        return
    }

    // Cria um novo elemento de lista (<li>) para o item de compra.
    const itemDaLista = document.createElement("li");
    // Cria uma <div> para agrupar o checkbox e o nome do item.
    const containerItemDaLista = document.createElement("div");
    // Adiciona uma classe CSS ao container para estilização.
    containerItemDaLista.classList.add("lista-item-container");
    // Cria um novo elemento <input> para ser o checkbox.
    const inputCheckbox = document.createElement("input");
    // Define o tipo do input como "checkbox".
    inputCheckbox.type = "checkbox";
    // Atribui um ID único ao checkbox (ex: "checkbox-0", "checkbox-1").
    inputCheckbox.id = "checkbox-" + contador++;
    // Cria um novo elemento de parágrafo (<p>) para exibir o nome do item.
    const nomeItem = document.createElement("p");
    // Define o texto do parágrafo como o valor digitado na caixa de texto.
    nomeItem.innerText = inputItem.value;

// Adiciona um "ouvinte" ao checkbox: quando ele for clicado, a função dentro dele será executada.
inputCheckbox.addEventListener("click", function() {
    // Verifica se o checkbox está marcado.
    if (inputCheckbox.checked) {
        // Se estiver marcado, adiciona um risco no meio do texto do item.
        nomeItem.style.textDecoration = "line-through";
        } else {
            // Se não estiver marcado, remove qualquer risco do texto do item.
            nomeItem.style.textDecoration = "none"
        }
    }
)

    // Adiciona o checkbox dentro do container.
    containerItemDaLista.appendChild(inputCheckbox);
    // Adiciona o nome do item dentro do container.
    containerItemDaLista.appendChild(nomeItem);

    // Adiciona o container (com checkbox e nome do item) dentro do item da lista.
    itemDaLista.appendChild(containerItemDaLista)

    const dataCompleta = gerarDiaDaSemana();

    const itemData = document.createElement("p");
    // Define o texto do parágrafo como a data completa.
    itemData.innerText = dataCompleta;
    // Adiciona uma classe CSS para estilização da data.
    itemData.classList.add("texto-data")
    // Adiciona o parágrafo da data e hora ao item da lista.
    itemDaLista.appendChild(itemData)

    

    return itemDaLista;
}