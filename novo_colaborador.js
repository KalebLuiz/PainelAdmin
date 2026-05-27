const API_URL_USER = "https://x8ki-letl-twmt.n7.xano.io/api:bQLUlOV-/user";



const MapPapeis = {
            33:"Cozinheiro",
            34:"Atendente",
            35:"Auxiliar de Cozinha",
            36:"Entregador"
        }


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
        
        
        

        const users_table = document.getElementById("funcionarios");
        let linhas = '';
        UserFiltrados.forEach (users => {
            linhas += `
            <tr>
            <td>${users.nome}</td>
            <td>${MapPapeis[users.papel_id]}</td>
            <td>${users.email}</td>
            <td><input type="radio" value="${users.id}" name="modifypapeis"></td>
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
    const api = ("https://x8ki-letl-twmt.n7.xano.io/api:zh4DA7Of/auth/signup");
    ////--------Configurar api para criação de um novo colaborador
    const CriarColaborador = document.getElementById('Novocolaborador');

    const nomeColaborador = document.getElementById('nomenovocolaborador').value;
    const emailColaborador = document.getElementById('emailnovocolaborador').value;
    const senhaColaborador = document.getElementById('senhanovocolaborador').value;
    const papelColaborador = document.getElementById('papeis').value;
   
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
           
            location.reload()
        } else{
            console.log("Erro");
        }
    }catch(erro){
        console.error("Deu erro!",erro);
    }
};



// ALTERAR COLABORADOR 
// Função para coletar o ID

function COLETARID() {
    const idSelecionado = document.querySelector('input[name="modifypapeis"]:checked');
    
    if (!idSelecionado){
        alert("Selecione um colaborador!")
        return;
    }
    
    localStorage.setItem("id_colaborador", idSelecionado.value)
    const id_colab = localStorage.getItem("id_colaborador")
   
}


//retornarItemColetadoParaEdicao
async function retornoColaboradores() {
    const id_colab = localStorage.getItem("id_colaborador")
    try{
        const response = await fetch (API_URL_USER)
        if(!response.ok){
            console.log("Deu um erro!")
        }

        const retornoColab = await response.json()
        const retornoFiltrado = retornoColab.filter (user => user.id == Number(id_colab))[0]
        document.getElementById("nomealterarcolaborador").value = retornoFiltrado.nome
        document.getElementById("emailalteracaocolaborador").value = retornoFiltrado.email
        document.getElementById("papeis").value = retornoFiltrado.papel_id
       
    } catch (erro){
        console.error(erro)
    }
}




// Funcao para alterar 

async function atualizarColaborador () {
    const id_colab = localStorage.getItem("id_colaborador")
    const papelColaborador = document.getElementById('papeis').value;
    const DadosAtualizados = {
        nome: document.getElementById("nomealterarcolaborador").value,
        email: document.getElementById("emailalteracaocolaborador").value,
        papel_id: Number(document.getElementById('papeis-alterar').value)

        
    }
    try{
        const response = await fetch (`${API_URL_USER}/${id_colab}`, {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(DadosAtualizados)
        });
        if(response.ok){
            console.log("Deu certo")
            location.reload()

        }
    } catch(erro){
        console.error(erro)
    }

    
}

async function deletarColaborador() {
    const id_colab = localStorage.getItem("id_colaborador")
    try{
        const response = await fetch (`${API_URL_USER}/${id_colab}`,{
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'}
        })

        if(response.ok) {
            console.log("Deu certo!")
            alert("Colaborador Deletado!")
            location.reload()
        } else {
            console.log("erro!!")
        }
    } catch(erro){
        console.error(erro)
    }
}