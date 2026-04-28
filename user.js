const API_URL_USER = "https://x8ki-letl-twmt.n7.xano.io/api:bQLUlOV-/user";
async function usuarios(){
    try{
        const return_users = await fetch (API_URL_USER);
        if(!return_users.ok){
            throw new Error ("Erro Retorno")
        }
        const ListaUser = await return_users.json();
        const  UserFiltrados = ListaUser.filter( user => user.papel_id !=37 );
        console.log("Filtrados:",UserFiltrados);

        let Papel = "";
        if (user => user.papel_id == 32 ){
            Papel = "Admin"
        
        } else if (user => user.papel_id == 33 ){
            Papel = "Cozinheiro"
        } else if (user => user.papel_id == 34 ){
            Papel = "Atendente"
        }else if (user => user.papel_id == 35 ){
            Papel = "Auxiliar de Cozinha"
        } else if (user => user.papel_id == 36 ){
            Papel = "Entregador"
        }
        console.log(Papel);

        const users_table = document.getElementById("funcionarios");
        let linhas = '';
        UserFiltrados.forEach (users => {
            linhas += `
            <tr>
            <td>${users.nome}</td>
            <td>${Papel}</td>
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






