
//chamar uma função assicrona com a API
async function realizarLogin(email, senha) {
    const url = CONFIG.API_LOGIN;
    const dados = {
        email: email,
        password: senha
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
            
            
            window.location.replace('index.html');

           
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






 





