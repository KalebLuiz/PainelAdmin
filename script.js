
let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let btn3 = document.querySelector(".btn3");
let btn4 = document.querySelector(".btn4");
let BlockTabelaPapeis = document.querySelector(".blocktabela-papeis")
let BlockNovoPapel = document.querySelector(".block-novopapel")

btn3.addEventListener("click", function(){
    BlockTabelaPapeis.style.display = 'none'
    BlockNovoPapel.style.display = 'block';

})

