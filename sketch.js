let xQuadrado = 0;
let yQuadrado = 0;

let quadrado00 = "";
let quadrado10 = "";
let quadrado20 = "";
let quadrado01 = "";
let quadrado11 = "";
let quadrado21 = "";
let quadrado02 = "";
let quadrado12 = "";
let quadrado22 = "";

let jogador = "O";

let fim = false;

function setup() {
  createCanvas(640, 640);
}

function draw() {
  
  if (fim == false){
    background("grey");

    criarGrade();
    fazerJogada();
    criarQuadrado00();
    criarQuadrado10();
    criarQuadrado20();
    criarQuadrado01();
    criarQuadrado11();
    criarQuadrado21();
    criarQuadrado02();
    criarQuadrado12();
    criarQuadrado22();

    verificarVencedor();
  }
  
  recomecarJogo();
}







function criarGrade(){
  noStroke()
  fill("black")
  //barras verticais
  rect(200, 0, 20, 640);
  rect(420, 0, 20, 640);
  
  //barras horizontais
  rect(0, 200, 640, 20);
  rect(0, 420, 640, 20); 
}

function criarCirculo(xQuadrado, yQuadrado){
  strokeWeight(15);
  stroke(1)
  fill("grey");
  circle(100+xQuadrado*(200+20), 100+yQuadrado*((200+20)), 120);
}

function criarX(xQuadrado, yQuadrado){
  strokeWeight(15);
  stroke("black")
  line(60+xQuadrado*(200+20), 60+yQuadrado*(200+20), 140+xQuadrado*(200+20), 140+yQuadrado*(200+20));
  line(60+xQuadrado*(200+20), 140+yQuadrado*(200+20), 140+xQuadrado*(200+20), 60+yQuadrado*(200+20));
}

function criarQuadrado00() {
  if (quadrado00 == "O"){
    criarCirculo(0, 0);
  } else if (quadrado00 == "X"){
    criarX(0, 0);
  }
}

function criarQuadrado10() {
  if (quadrado10 == "O"){
    criarCirculo(1, 0)
  } else if (quadrado10 == "X"){
    criarX(1, 0);
  }
}

function criarQuadrado20() {
  if (quadrado20 == "O"){
    criarCirculo(2, 0)
  } else if (quadrado20 == "X"){
    criarX(2, 0);
  }
}

function criarQuadrado01() {
  if (quadrado01 == "O"){
    criarCirculo(0, 1)
  } else if (quadrado01 == "X"){
    criarX(0, 1);
  }
}

function criarQuadrado11() {
  if (quadrado11 == "O"){
    criarCirculo(1, 1)
  } else if (quadrado11 == "X"){
    criarX(1, 1);
  }
}

function criarQuadrado21() {
  if (quadrado21 == "O"){
    criarCirculo(2, 1)
  } else if (quadrado21 == "X"){
    criarX(2, 1);
  }
}

function criarQuadrado02() {
  if (quadrado02 == "O"){
    criarCirculo(0, 2)
  } else if (quadrado02 == "X"){
    criarX(0, 2);
  }
}

function criarQuadrado12() {
  if (quadrado12 == "O"){
    criarCirculo(1, 2)
  } else if (quadrado12 == "X"){
    criarX(1, 2);
  }
}

function criarQuadrado22() {
  if (quadrado22 == "O"){
    criarCirculo(2, 2)
  } else if (quadrado22 == "X"){
    criarX(2, 2);
  }
}

function fazerJogada(){
  if(keyIsDown(103) && quadrado00 == "") {
    if (jogador == "O"){
      quadrado00 = "O";
      mudarJogador();
    } else if (jogador == "X"){
      quadrado00 = "X"
      mudarJogador();
    }
}
  
  if(keyIsDown(104) && quadrado10 == "") {
    if (jogador == "O"){
      quadrado10 = "O";
      mudarJogador();
    } else if (jogador == "X"){
      quadrado10 = "X"
      mudarJogador();
    }
  }
  
  if(keyIsDown(105) && quadrado20 == "") {
    if (jogador == "O"){
      quadrado20 = "O";
      mudarJogador();
    } else if (jogador == "X"){
      quadrado20 = "X"
      mudarJogador();
    }
  }
  
  if(keyIsDown(100) && quadrado01 == "") {
    if (jogador == "O"){
      quadrado01 = "O";
      mudarJogador();
    } else if (jogador == "X"){
      quadrado01 = "X"
      mudarJogador();
    }
  }
  
  if(keyIsDown(101) && quadrado11 == "") {
    if (jogador == "O"){
      quadrado11 = "O";
      mudarJogador();
    } else if (jogador == "X"){
      quadrado11 = "X"
      mudarJogador();
    }
  }
  
  if(keyIsDown(102) && quadrado21 == "") {
    if (jogador == "O"){
      quadrado21 = "O";
      mudarJogador();
    } else if (jogador == "X"){
      quadrado21 = "X"
      mudarJogador();
    }
  }
  
  if(keyIsDown(97) && quadrado02 == "") {
    if (jogador == "O"){
      quadrado02 = "O";
      mudarJogador();
    } else if (jogador == "X"){
      quadrado02 = "X"
      mudarJogador();
    }
  }
  
  if(keyIsDown(98) && quadrado12 == "") {
    if (jogador == "O"){
      quadrado12 = "O";
      mudarJogador();
    } else if (jogador == "X"){
      quadrado12 = "X"
      mudarJogador();
    }
  }
  
  if(keyIsDown(99) && quadrado22 == "") {
    if (jogador == "O"){
      quadrado22 = "O";
      mudarJogador();
    } else if (jogador == "X"){
      quadrado22 = "X"
      mudarJogador();
    }
  }
}

function mudarJogador(){
  if(jogador == "X"){
    jogador = "O";
  } else if (jogador == "O"){
    jogador = "X";
  }
}

function verificarVencedor(){
  if (quadrado00 == quadrado10 && quadrado10 == quadrado20 && quadrado00 != ""){
    textoVencedor(quadrado00);
    strokeWeight(15);
    stroke("red");
    line(100, 100, 540, 100);
    fimDoJogo();
  }
  if (quadrado01 == quadrado11 && quadrado11 == quadrado21 && quadrado01 != ""){
    textoVencedor(quadrado01);
    strokeWeight(15);
    stroke("red");
    line(100, 320, 540, 320);
    fimDoJogo();
  }
  if (quadrado02 == quadrado12 && quadrado12 == quadrado22 && quadrado02 != ""){
    textoVencedor(quadrado02);
    strokeWeight(15);
    stroke("red");
    line(100, 540, 540, 540);
    fimDoJogo();
  }
  
  if (quadrado00 == quadrado01 && quadrado01 == quadrado02 && quadrado00 != ""){
    textoVencedor(quadrado00);
    strokeWeight(15);
    stroke("red");
    line(100, 100, 100, 540);
    fimDoJogo();
  }
  if (quadrado10 == quadrado11 && quadrado11 == quadrado12 && quadrado10 != ""){
    textoVencedor(quadrado10);
    strokeWeight(15);
    stroke("red");
    line(320, 100, 320, 540);
    fimDoJogo();
  }
  if (quadrado20 == quadrado21 && quadrado21 == quadrado22 && quadrado20 != ""){
    textoVencedor(quadrado20);
    strokeWeight(15);
    stroke("red");
    line(540, 100, 540, 540);
    fimDoJogo();
  }
  
  if (quadrado00 == quadrado11 && quadrado11 == quadrado22 && quadrado00 != ""){
    textoVencedor(quadrado00);
    strokeWeight(15);
    stroke("red");
    line(100, 100, 540, 540);
    fimDoJogo();
  }
  
  if (quadrado02 == quadrado11 && quadrado11 == quadrado20 && quadrado02 != ""){
    textoVencedor(quadrado02);
    strokeWeight(15);
    stroke("red");
    line(100, 540, 540, 100);
    fimDoJogo();
  }
  
  if (quadrado00 != "" && quadrado10 != "" && quadrado20 != "" &&
     quadrado01 != "" && quadrado11 != "" && quadrado21 &&
     quadrado02 != "" && quadrado12 != "" && quadrado22 && fim == false){
    textoVencedor("Empate");
  }
}

function fimDoJogo(){
  fim = true;
}

function recomecarJogo(){
  
  if(keyIsDown(32)){
  xQuadrado = 0;
  yQuadrado = 0;

  quadrado00 = "";
  quadrado10 = "";
  quadrado20 = "";
  quadrado01 = "";
  quadrado11 = "";
  quadrado21 = "";
  quadrado02 = "";
  quadrado12 = "";
  quadrado22 = "";

  jogador = "O";

  fim = false;
     }
}

function textoVencedor(vencedor){
  if (vencedor == "Empate"){
    texto = "Deu velha!";
  } else {
    texto = vencedor + " ganhou!";
  }
  
  strokeWeight(2);
  fill("red")
  textSize(20);
  textAlign(CENTER);
  
  text(texto, 320, 435);
}