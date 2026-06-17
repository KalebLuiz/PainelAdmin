
//Agora vamos criar outra função para ele puxar as informações do user authenticado

async function DadosUser() {
    const token_auth = localStorage.getItem('token_de_acesso');
   
    const url = CONFIG.API_AUTHME;
    

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
        localStorage.setItem('NomeAdmin',nameUSer);
        

        // passar o parametro do nome do admin para o html
        const variavelnome = document.getElementById('adminuser');
        if (variavelnome){
            document.getElementById('adminuser').innerText = nameUSer;
        }

    
       
        
    
    
    

    } catch(erro){
        console.error();
    }

}

DadosUser();












function Logout() {
    localStorage.removeItem ('token_de_acesso');
    window.location.replace('login.html');
}




