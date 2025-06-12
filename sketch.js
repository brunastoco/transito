let xJogador1 = 850; 

function setup() {
  createCanvas(900, 800);
}

function draw() {
  background("rgb(0,190,255)");


  fill("#32CD32");
  rect(0, height - 100, width, 100);
  fill("#708090");
  rect(0, height - 100, width, 100);


  fill("#D2691E");
  rect(0, height - 90, width, 20); 

  
   textSize (200);
  text("☁️", 300, 150);
  text("☁️", 60, 150);
   textSize (200);
  text("☁️", 600, 170);
  
  textSize (300);
  text("🏙", -50, 650);
  
  textSize (200);
  text("🏡", 700,660),
    textSize (50);
  text("🚴🏽‍♀️", 0,700),
    
    


  textSize(100);
  text("🚚", xJogador1, height - 50); 

  if (xJogador1 <= 0) {
    fill(0);
    textSize(32);
    text("Parabéns! Você transportou alimento do campo para a cidade!", 10, 400);
    noLoop();
  }
}

function keyPressed() {
  if (key === 'a' || key === 'A') {
    xJogador1 -= 10;
  }
}

