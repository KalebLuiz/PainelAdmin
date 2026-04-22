const API_URL_USER = "https://x8ki-letl-twmt.n7.xano.io/api:bQLUlOV-/user";
async function usuarios(){
    try{
        const return_users = await fetch (API_URL_USER);
        if(!return_users.ok){
            throw new Error ("Erro Retorno")
        }
        const ListaUser = await return_users.json();
        const  UserFiltrados = ListaUser.filter( user => user.papel_id !=6 );
        console.log("Filtrados:",UserFiltrados);

        const users_table = document.getElementById("retorno_colaboradores");
        let linhas = '';
        UserFiltrados.forEach (users => {
            linhas += `
            <tr>
            <td>${users.nome}</td>
            <td>${users.papel}</td>
            <td>${users.email}</td>
            <td><input type="radio" name="modifypapeis"></td>
            </tr>
            `
        })


    } catch (error){
        console.error(error);
    }
}

usuarios()