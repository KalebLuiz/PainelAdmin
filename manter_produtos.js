const API_URL = CONFIG.API_PRODUTO;


async function RetornarProdutos (){
    try{
        const resposta = await fetch (API_URL);
        if (!resposta.ok){
            throw new Error ("Erro de Conexão")
        }
        
        //Transformar a resposta em JSON
        const retorneprodutos = await resposta.json();
        
       

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
        const item = listaitem.filter(produto => produto.id == ID)[0] // adicionamos o index 0 para pegar o OBJETO e não retornar como lista
         
           

        
       
         document.getElementById("edit_nome_prato").value = item.nome;
         document.getElementById("edit_descricao_prato").value = item.descricao;
         document.getElementById("edit_quantidade_disp_prato").value = item.qtd_disp;
         document.getElementById("edit_url_imagem").value = item.url_imagem;
         document.getElementById("edit_preco_prato").value = item.preco;
         document.getElementById("edit_precisa_produzir").checked = item.precisa_produzir;
         document.getElementById("edit_categoria_prato").value = item.categoria_produto;

        
    } catch(erro){
        console.error(erro)
    }
    
}

RetorneItem()


//--- Edição do produto

async function atualizarprato() {
    const DadosAtualizados = {
        nome: document.getElementById("edit_nome_prato").value,
        descricao: document.getElementById("edit_descricao_prato").value,
        qtd_disp: document.getElementById("edit_quantidade_disp_prato").value,
        url_imagem: document.getElementById("edit_url_imagem").value,
        preco: document.getElementById("edit_preco_prato").value,
        categoria_produto: document.getElementById("edit_categoria_prato").value,
        precisa_produzir: document.getElementById("edit_precisa_produzir").checked
    }

    try {
        const response = await fetch (`${API_URL}/${ID}`, {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(DadosAtualizados)
        });

        if(response.ok){
            console.log("Atualização Feita Com Sucesso!")
            location.reload()
        } else{
            console.log("Aconteceu Algo de Errado!")
        }
    } catch (erro){
        console.error(erro)
    }
   
    }



async function Deleteproduto() {
    const ID_DELETE = localStorage.getItem("id_do_produto")
    try {
        const response =  await fetch (`${API_URL}/${ID_DELETE}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok){
            console.log("Deu certo!")
            alert("Produto Deletado!")
            location.reload()
           
        } else {
            console.log("Deu algum erro")
        }
    } catch (erro){
        console.error(erro)
    }
}

