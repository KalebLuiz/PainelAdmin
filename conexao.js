// criar variavel da api
const API_URL = "https://x8ki-letl-twmt.n7.xano.io/api:bQLUlOV-/papel";

// criar uma função assicrona de chamada da api
async function CriarPapel() {
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
                <td><input type="radio" name="selecao"></td>
            </tr>
        
        
        `;

    });  

    



    retornoPapeis.innerHTML += linhas;

    } catch (erro){
        console.error("algo de errado nao esta certo ",erro);
    }
}

CriarPapel()


const FormNovoPapel = document.getElementById("formularioNovoPapel");

// Criar um "ouvinte" que espera meu submit para executar a função
FormNovoPapel.addEventListener('submit', async (event) => {
    const papelfunc = document.getElementById("campoPapel").value;
    event.preventDefault()

    //criar a varieavel de envio
    const DadosEnvio = {
    papel: papelfunc
    }
    console.log('Dados para enviar são: ', DadosEnvio);
    //fazer a chamada com o Xano
    try{
        const resposta_papel = await fetch('https://x8ki-letl-twmt.n7.xano.io/api:bQLUlOV-/papel',{
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(DadosEnvio)
            
        });
        //fazer apos cadastro de papel a tela voltar pra table
        if (resposta_papel.ok){
            alert("Sucesso");
            FormNovoPapel.reset() //Resetar o forM
            const SairTelaCadastro = document.querySelector(".block-novopapel");
            SairTelaCadastro.style.display = "none";

            const VoltarTelaTabela = document.querySelector(".blocktabela-papeis")
            VoltarTelaTabela.style.display = "block";
            location.reload()
        } else {
            alert('Erro');
        }
        
    
    
    } catch(erro){
        console.error("Deu erro na conexão",erro)
    }

});






