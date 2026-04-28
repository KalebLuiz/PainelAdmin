async function colaboradores() {
    ////--------Configurar api para criação de um novo colaborador
const CriarColaborador = document.getElementById('Novocolaborador');

CriarColaborador.addEventListener("submit", async, (event) => {
    const nome = document.getElementById('nomenovocolaborador').value;
    const email = document.getElementById('emailnovocolaborador').value;
    const senha = document.getElementById('senhanovocolaborador').value;
    const papel = document.getElementById('papel').value;
    event.preventDefault();

    const dadosEnvio = {
        nome: nome,
        email: email,
        senha: senha,
        papel_id: papel
    }

    try{
        const response = await fetch('https://x8ki-letl-twmt.n7.xano.io/api:bQLUlOV-/user',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(dadosEnvio)
        });

        if (response.ok){
            console.log("Sucesso!");
            console.log(response)
            //CriarColaborador.reset();
            //location.reload();        
        } else{
            console.log("Erro");
        }
    }catch(erro){
        console.error("Deu erro!",erro);
    }
})
}