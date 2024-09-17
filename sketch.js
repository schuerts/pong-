//variaveis bolinha 
  let xBolinha = 200;
  let yBolinha = 200;
  let diametro = 30;

let velocidadeXBolinha=6;
let velocidadeYBolinha=3;

  //variaveis minha raquete
  let xRaquetejogador = 5;
  let yRaquetejogador = 15;
  let alturaRaquetejogador = 10;
  let larguraRaquetejogador = 90;


// variaveis raquete oponente
 let xRaqueteOponente = 385;
  let yRaqueteOponente = 150;
  let alturaRaqueteOponente = 10;
  let larguraRaqueteOponente = 90;


let velocidadeyOponente



function mostraRaqueteOponente(){
      fill("#5FBB2C")
      stroke("yellow")
      
      rect (yRaqueteoponente, xRaqueteoponente, alturaRaqueteoponente, larguraRaqueteoponente);

}






// colisao
let colidiu = false;
  


let posicaoHorizontal; //x
let posicaovertical; //y

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("black");
  mostraBolinha();
  movimentaBolinha();
  verificaColisao();
  mostraRaquetejogador();
  movimentaRaquetejogador();
  verificaColisaoRaqueteJogador();

}

  function mostraBolinha(){
    fill("red")
    circle(xBolinha,yBolinha,diametro);
    
    
  }


    function movimentaBolinha(){
  xBolinha+= velocidadeXBolinha;
  yBolinha+= velocidadeYBolinha;
      
    }


    function mostraRaquetejogador(){
      fill("#5FBB2C")
      stroke("yellow")
      
      rect (yRaquetejogador, xRaquetejogador, alturaRaquetejogador, larguraRaquetejogador);
      
    }  
      function verificaColisao(){
      if(xBolinha>width|| xBolinha< 0){
        velocidadeXBolinha*=-1;}
        if(yBolinha>height || yBolinha< 0){
        velocidadeYBolinha*=-1;
      
      }
       

}
    function movimentaRaquetejogador(){
    if(keyIsDown(UP_ARROW)){
    xRaquetejogador-=10;}
      
       if(keyIsDown(DOWN_ARROW)){
    xRaquetejogador+=10;
    }
    }

   function verificaColisaoRaquetejogador(){}
colidiu=collideRectCircle( 
  xRaquetejogador,
  yRaquetejogador,
  alturaRaquetejogador,
  larguraRaquetejogador,
  xBolinha,
  yBolinha,
  diametro/2 );
if (colidiu ==true){
  velocidadexBolinha=-1
}
 


velocidadeYoponrnete = yBolinha - yRaqueteOponente - alturaRaqueteOponente/2 - 30;



  




