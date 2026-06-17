///////-------- Botoes Manter Papeiss
let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let btn3 = document.querySelector(".btn3");
let btn4 = document.querySelector(".btn4");
let BlockTabelaPapeis = document.querySelector(".blocktabela-papeis");
let BlockNovoPapel = document.querySelector(".block-novopapel");
let BlockEditarPapel = document.querySelector(".block-Edicaopapel");

btn3.addEventListener("click", function(){
    BlockTabelaPapeis.style.display = 'none';
    BlockEditarPapel.style.display = 'none';
    BlockNovoPapel.style.display = 'block';

});

btn2.addEventListener("click", function(){
    BlockTabelaPapeis.style.display = 'none';
    BlockEditarPapel.style.display = 'block';
    BlockNovoPapel.style.display = 'none';

});






///////-------------Botoes manter colaboradores

let ButtonRemove = document.querySelector(".ButtonRemove");
let ButtonAlterar =  document.querySelector(".ButtonAlterar");
let ButtonNew = document.querySelector(".ButtonNew");
let ButtonVoltar = document.querySelector(".ButtonVoltar");

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


