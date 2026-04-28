//pagina que chama a função de authenticação para todas as funções
// ou seja, apenas pessoas com o seu token de autorização porem ter acessos as paginas

function verifyauth (){
    const token = localStorage.getItem('token_de_acesso');
    const nameUser = localStorage.getItem('NomeAdmin');
    const variavelnome = document.getElementById('adminuser');
    if (variavelnome){
        document.getElementById('adminuser').innerText = nameUser;
    }
    if(!token){
    // Se meu token não existir
    //Voltar pra login
    console.warn("PÁ!!! ACESSO NEGADO");
    window.location.replace('login.html');
    }
    
}

verifyauth();