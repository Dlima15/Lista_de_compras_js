const inputItem = document.getElementById("input-item")

const botaoAdicionar = document.getElementById("dicionaar-item")

botaoAdicionar.addEventListener("click", (evento) =>{
    evento.preventDefault();
    console.log(inputItem.value);
})

