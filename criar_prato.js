async function CriarPrato() {
    const CriarNovoPrato = document.getElementById('novoprato');
    CriarNovoPrato.addEventListener("submit", async (event) => {
        const nome = document.getElementById("nome_prato").value;
        const descricao = document.getElementById("descricao_prato").value;
        const quantidade = document.getElementById("quantidade_disp_prato").value;
        const url_imagem = document.getElementById("url_imagem").value;
        const preco = document.getElementById("preco_prato").value;
        const precisa_produzir = document.getElementById("precisa_produzir").checked;
        const categoria = document.getElementById("categoria_prato").value;
        event.preventDefault();

        

        const DadosEnviados = {
            nome: nome,
            descricao: descricao,
            qtd_disp: quantidade,
            url_imagem: url_imagem,
            preco: preco,
            precisa_produzir: precisa_produzir,
            categoria_produto: categoria
        }

        try{
            const response = await fetch(API_URL,{
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(DadosEnviados)
            });
            if(response.ok){
                console.log("Prato Cadastrado!");
                console.log(response);
                CriarNovoPrato.reset();
                location.reload();
            } else{
                console.log("ERROR")
            }
        } catch (erro){
            console.error("Deu erro!", erro)
        }
    })
}

CriarPrato()

