function gerarDiaDaSemana(){
        // Obtém o dia da semana atual no formato longo (ex: "segunda-feira").
    const diaDaSemana = new Date().toLocaleDateString("pt-BR", {
        weekday: "long"
    });
    // Obtém a data atual no formato brasileiro (ex: "25/05/2025").
    const data = new Date().toLocaleDateString("pt-BR")
    // Obtém a hora atual no formato numérico (ex: "11:06").
    const hora = new Date().toLocaleTimeString("pt-BR", {
        hour: "numeric",
        minute: "numeric"
    })
    // Monta a string completa com dia da semana, data e hora.
    const dataCompleta = `${diaDaSemana} (${data}) às ${hora}`


    return dataCompleta
}

export default gerarDiaDaSemana;