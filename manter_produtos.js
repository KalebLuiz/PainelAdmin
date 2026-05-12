const API_URL = "https://x8ki-letl-twmt.n7.xano.io/api:bQLUlOV-/produto";

async function RetornarProdutos (){
    try{
        const resposta = await fetch (API_URL);
        if (!resposta.ok){
            throw new Error ("Erro de Conexão")
        }
        
        //Transformar a resposta em JSON
        const retorneprodutos = await resposta.json();
        console.log("Dados recebidos", retorneprodutos);
       

        const retorntabelaprodutos = document.getElementById ("retorno-produtos");
        let linhas = '';
        retorneprodutos.forEach(produtos => {
            linhas += `
            <tr>
            <th>${produtos.nome}</th>
            <th>${produtos.descricao}</th>
            <th>${produtos.qtd_disp}</th>
            <th>${produtos.url_imagem}</th>
            <th>${produtos.preco}</th>
            <th><input type="checkbox" id="precisa-produzir"></th>
            <th>${produtos.categoria_produto}</th>
            <th><input type="radio" name="id_pratos" value="${produtos.id}"></th>
        </tr>
            
            `;
        });

        retorntabelaprodutos.innerHTML += linhas;


        
       

    }  catch (erro){
        console.error("Algo de errado não está certo", erro );
    }

   
}

RetornarProdutos()

//pegar o ID do Produto
// vamos criar uma função
function coletarID(){
    const RadioSelecionado = document.querySelector('input[name="id_pratos"]:checked');
   
    if(!RadioSelecionado){
        alert("Selecione um Produto Primeiro!");
        return;
    }
    localStorage.setItem("id_do_produto", RadioSelecionado.value)
    const ID = localStorage.getItem("id_do_produto")
    console.log(ID)
        

}



/////Botoes manter produtos 


let ButtonRemove = document.querySelector(".remove");
let ButtonAlterar = document.querySelector(".alterar");
let ButtonNovo = document.querySelector(".novo");

let BlockTabelaProdutos = document.querySelector(".retorno-produtos");
let BlockNovoProduto = document.querySelector(".novoprato");
let BlockAlterarPrato = document.querySelector(".editar_prato");
let BlockBotoes = document.querySelector(".botoesfunc");

ButtonNovo.addEventListener("click", function(){
    BlockTabelaProdutos.style.display = 'none';
    BlockAlterarPrato.style.display = 'none';
    BlockBotoes.style.display = 'none';
    BlockNovoProduto.style.display = 'block';
   
});

ButtonAlterar.addEventListener("click", function (){
    BlockTabelaProdutos.style.display = 'none';
    BlockBotoes.style.display = 'none';
    BlockNovoProduto.style.display = 'none';
    BlockAlterarPrato.style.display = 'block';
})


//Retornar Produto para sua edição
const ID = localStorage.getItem("id_do_produto")
async function RetorneItem() {
    try{
        const response = await fetch(API_URL);
        if (!response.ok){
            console.log("Deu Erro!")
        }

        const listaitem = await response.json();
        const item = listaitem.filter(produto => produto.id == ID)
        console.log(item)
        if (item.id == ID){
            console.log(listaitem.nome)
        }
        
    } catch(erro){
        console.error(erro)
    }
    
}

RetorneItem()


