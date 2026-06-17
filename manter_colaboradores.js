///////-------------Botoes manter colaboradoress

let ButtonRemove = document.querySelector(".ButtonRemove");
let ButtonAlterar =  document.querySelector(".ButtonAlterar");
let ButtonNew = document.querySelector(".ButtonNew");


let BlockTabelaNovoColaborador = document.querySelector(".NovoColaborador");
let BlockTabelaAlterarColaborador = document.querySelector(".AlteracaoColaborador");
let ActionButtons = document.querySelector(".actionbuttons");
let BlockTableFuncionarios = document.querySelector(".blocktablefuncionarios");


ButtonNew.addEventListener("click", function(){
    BlockTabelaAlterarColaborador.style.display = 'none';
    ActionButtons.style.display = 'none';
    BlockTableFuncionarios.style.display = 'none';
    BlockTabelaNovoColaborador.style.display = 'block';
});

ButtonAlterar.addEventListener("click", function() {
    BlockTableFuncionarios.style.display = 'none';
    BlockTabelaNovoColaborador.style.display = 'none';
    ActionButtons.style.display = 'none';
    BlockTabelaAlterarColaborador.style.display = 'block';
});





