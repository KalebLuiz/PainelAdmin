






//chamar uma função assicrona com a API
async function realizarLogin(email, senha) {
    const url = 'https://x8ki-letl-twmt.n7.xano.io/api:yNjbB5PN/auth/login';
    const dados = {
        email: email,
        senha: senha
    };
    
    try {
        const resposta = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dados)
        });

        if (resposta.ok) {
            const resultado = await resposta.json(); 
            console.log("Login Realizado com sucesso");
            // se resposta for ok ele nos leva para o index
            const token = resultado.authToken;
            localStorage.setItem('token_de_acesso',token);
            
            //window.location.replace('index.html');

           
            function verifyauth (){
                const token = localStorage.getItem('token_de_acesso');
        
                if(!token){
                // Se meu token não existir
                //Voltar pra login
                console.warn("PÁ!!! ACESSO NEGADO");
                window.location.replace('login.html');

                }
            }

    verifyauth();
    
        
            
            
            
        } else {
            console.log("Credenciais Inválidas");
            console.log("Acesso negado.")
        }
    } catch (erro) {
        console.error("Erro de conexão com server", erro);
    }
}

//configuração para chamar o formulario
// no caso ele vai só vai acontecer quando a gente apertar
// no botão subtmi (enviar)
 

//--------Criando variavel para passar os parametros do formulario
 const FormLogin = document.getElementById('forms');

 // Esperando o submit

 FormLogin.addEventListener('submit', async (event) =>{
    event.preventDefault(); //----- Para não recarregar a pagina

    //Pegando os valores de email e senha do forms
    const EmailUser = document.getElementById('emailUser').value;
    const SenhaUser = document.getElementById('senhaUser').value;
    
    // Usamos .Value para ele pegar o que foi digitado


    //chamar a nossa função la do inicio
    await realizarLogin(EmailUser, SenhaUser);

    
    
 });



//------------função para passar os dados
 async function DadosUser() {
    const token_auth = localStorage.getItem('token_de_acesso');
    const url = 'https://x8ki-letl-twmt.n7.xano.io/api:yNjbB5PN/auth/me';
    

    try {
        resposta = await fetch(url,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token_auth}`
          }
         });

        if (resposta.status === 401){
            Logout();
        
        }
        const dados = await resposta.json();
        const nameUSer = dados.nome
        

        // passar o parametro do nome do admin para o html
        const variavelnome = document.getElementById('adminuser');
        localStorage
        if (variavelnome){
            document.getElementById('adminuser').innerText = nameUSer;
        }

        console.log(token_auth);
       
        
    
    
    

    } catch(erro){
        console.error();
    }

}



 





