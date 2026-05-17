const API_URL_USER = "https://x8ki-letl-twmt.n7.xano.io/api:bQLUlOV-/user";
async function usuarios(){
    try{
        const return_users = await fetch (API_URL_USER);
        if(!return_users.ok){
            throw new Error ("Erro Retorno")
        }
        const ListaUser = await return_users.json();
        const  UserFiltrados = ListaUser.filter( user => user.papel_id !=37 && user.papel_id != 32 );
        console.log("Filtrados:",UserFiltrados);

        let Papel = "";
        
        
        const MapPapeis = {
            33:"Cozinheiro",
            34:"Atendente",
            35:"Auxiliar de Cozinha",
            36:"Entregador"
        }

        const users_table = document.getElementById("funcionarios");
        let linhas = '';
        UserFiltrados.forEach (users => {
            linhas += `
            <tr>
            <td>${users.nome}</td>
            <td>${MapPapeis[users.papel_id]}</td>
            <td>${users.email}</td>
            <td><input type="radio" name="modifypapeis"></td>
            </tr>
            `;
        });
        
        users_table.innerHTML += linhas;

    } catch (error){
        console.error(error);
    }
}

usuarios()



async function colaboradores() {
    const api = ("https://x8ki-letl-twmt.n7.xano.io/api:bQLUlOV-/user");
    ////--------Configurar api para criação de um novo colaborador
    const CriarColaborador = document.getElementById('Novocolaborador');

    const nomeColaborador = document.getElementById('nomenovocolaborador').value;
    const emailColaborador = document.getElementById('emailnovocolaborador').value;
    const senhaColaborador = document.getElementById('senhanovocolaborador').value;
    const papelColaborador =  MapPapeis[document.getElementById('papeis').value];
    

    const dadosEnvio = {
        nome: nomeColaborador,
        email: emailColaborador,
        senha: senhaColaborador,
        papel_id: papelColaborador
    }

    try{
        const response = await fetch( api,{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(dadosEnvio)
        });
        console.log(response)
        if (response.ok){
            console.log("Sucesso!");
            console.log(response)     
        } else{
            console.log("Erro");
        }
    }catch(erro){
        console.error("Deu erro!",erro);
    }
};
