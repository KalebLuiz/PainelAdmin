// criar variavel da api
const API_URL = "https://x8ki-letl-twmt.n7.xano.io/api:bQLUlOV-/papel";

// criar uma função assicrona de chamada da api
async function RetornaPapel() {
    try{
        const resposta = await fetch(API_URL);
        if (!resposta.ok){
        //se a resposta for diferte de 200 entao ele da erro
        throw new Error ("Erro conexão")
        }
        
    //transformar em json
        const ListaPapeis = await resposta.json();
        console.log("Dados recebidos", ListaPapeis);


    //fetch -> tag responsavel para fazer a chamada
        const retornoPapeis = document.getElementById("retorno_papeis");
        let linhas = '';
        ListaPapeis.forEach(item => {
        linhas += `
            <tr>
                <td>${item.Papel}</td>
                <td><input type="radio" name="selecao" value=${item.id}></td>
            </tr>
        
        
        `;

    });  

    



    retornoPapeis.innerHTML += linhas;

    } catch (erro){
        console.error("algo de errado nao esta certo ",erro);
    }
}

RetornaPapel()



    

async function CriarPapel() {
    const papel = document.getElementById("campoPapel").value
    const DadosEnvio = {
        Papel: papel 
    }

    try{
        const response = await fetch (API_URL, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(DadosEnvio)
        })

        if (response.ok){
            console.log("Deu tudo certo")
            location.reload()
        } else {
            console.log("erro")
        }
    } catch(errro){
        console.error(erro)
    }
    
}
   

function coletarID(){
    const IDSelecionado = document.querySelector('input [name="selecao"]:checked ')

    if (!IDSelecionado){
        alert("Selecione um Papel!")
        return;
    }

    localStorage.setItem(IDSelecionado, "IDSelecionado")
}


async function retornarPapel() {
    const papel_id = localStorage.getItem("IDSelecionado")
    console.log(papel_id)
    try{
        const response = await fetch (API_URL)
        if (!response.ok){
            console.log("Erro!!")
        }   
        

        const retornoPapel = await response.json();
        const retornoPapelFiltrado = retornoPapel.filter(papel => papel.id == papel_id)[0]
        console.log(retornoPapelFiltrado)
        document.getElementById("campoEditarPapel").value = retornoPapelFiltrado.Papel
    } catch(erro){
        console.error(erro)
    }
    
}



