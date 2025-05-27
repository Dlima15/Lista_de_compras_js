const inputItem = document.getElementById("input-item") /* selecionando o input direto do html */
const listaDeCompras = document.getElementById("lista-de-compras")

const botaoAdicionar = document.getElementById("dicionaar-item") /* selecionando o botao enviar direto do html */
let contador = 0;

botaoAdicionar.addEventListener("click", (evento) =>{    /* defini que ao clicar no botão ele vai gerar um evento */
    evento.preventDefault();  /* aqui eu previni que enviasse as informações e recarregasse a pagina e perdesse os dados */
    if (inputItem.value === "" ){   /* aqui eu estou dizendo que se o conteudo do input item for igual a nada " ", ele vai emitir uma mensagem dizendo pra adicionar algo*/
        alert("Adicione algo na lista!")
        return
    }

    // Cria um novo elemento <li> (item de lista), mas ainda só na memória
    const itemDaLista = document.createElement("li"); 

    // Cria um novo <div> que vai servir como o "embrulho" do item da lista
    const containerItemDaLista = document.createElement("div");

    // Adiciona uma classe CSS chamada "lista-item-container" nesse <div>
    // Isso serve pra poder estilizar esse container depois, deixar bonito, espaçado, etc
    containerItemDaLista.classList.add("lista-item-container");

    // Cria um novo <input> (um campo de entrada)
    const inputCheckbox = document.createElement("input");

    // Define que o tipo desse input é "checkbox", ou seja, vai ser aquela caixinha 
    inputCheckbox.type = "checkbox";

    // Cria um id único pra esse checkbox, tipo "checkbox-0", "checkbox-1", etc
    // O contador vai aumentando a cada novo item criado
    inputCheckbox.id = "checkbox-" + contador++;

    // contruir a variavel , criei um item p
    const nomeItem = document.createElement("p");
    nomeItem.innerText = inputItem.value; /* agora eu defini que o NomeItem, que é o p ele tem o mesmo valor da Varivael que eu defini do input que [e input-item]*/

    containerItemDaLista.appendChild(inputCheckbox);
    containerItemDaLista.appendChild(nomeItem);

    itemDaLista.appendChild(containerItemDaLista);

    listaDeCompras.appendChild(itemDaLista)
    

})

