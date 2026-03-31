let imagem  = document.querySelector(".copao");
let fundo = document.querySelector(".circulo");


function trocarImagem(endereco){

  imagem.src = endereco
}

function trocarFundo(cor){
  fundo.style.background = cor;
}