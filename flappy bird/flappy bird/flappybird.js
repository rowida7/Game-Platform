var board;
var context;
var bottomPipeImg;
var topPipeImg;
var birdImage;
var bgMusic;
var jumpSound;
var gameOverSound;
var pipeArray = [];
var pipeWidth = 64;
var pipeHeight = 512;
var pipeX = 600;
var pipeY = 0;
var randomPipeY = 0;
var openingSpace = 150;
var velocityX = -2;
var velocityY = 0;
var birdX = 50;
var birdY = 325;
var gravity = 0.1;
var gameOver = false;
var score = 0;

window.onload = function () {
  board = document.getElementById("board");
  board.height = 650;
  board.width = 600;
  context = board.getContext("2d");

  birdImage = new Image();
  birdImage.src = "images/flappybird.png";
  birdImage.onload = function () {
    context.drawImage(birdImage, birdX, birdY, 40, 40);
  };

  bottomPipeImg = new Image();
  bottomPipeImg.src = "images/bottompipe.png";
  topPipeImg = new Image();
  topPipeImg.src = "images/toppipe.png";

  bgMusic = new Audio("sounds/background.mp3");
  jumpSound = new Audio("sounds/jump.mp3");
  gameOverSound = new Audio("sounds/gameover.mp3");

  // Start the background music
  bgMusic.loop = true;
  bgMusic.play().catch(function(e){
    console.log("Autoplay prevented");
    // play music on first user interaction
    document.addEventListener('click', playMusicOnInteraction);
    document.addEventListener('keydown', playMusicOnInteraction);
  });

  requestAnimationFrame(update);
  setInterval(addPipes, 2000);
  document.addEventListener('keydown', birdMove);
};

function playMusicOnInteraction() {
  bgMusic.play();
  document.removeEventListener('click', playMusicOnInteraction);
  document.removeEventListener('keydown', playMusicOnInteraction);
}

function update() {
  if (gameOver) {
    displayGameOver();
    return;
  }

  context.clearRect(0, 0, board.width, board.height);

  velocityY += gravity;
  birdY += velocityY;

  context.drawImage(birdImage, birdX, birdY, 40, 40);

  for (let i = 0; i < pipeArray.length; i++) {
    pipeArray[i].x += velocityX;
    context.drawImage(pipeArray[i].img, pipeArray[i].x, pipeArray[i].y, pipeWidth, pipeHeight);

    if (pipeArray[i].x < birdX + 20 && pipeArray[i].x + pipeWidth > birdX &&
      pipeArray[i].y < birdY + 20 && pipeArray[i].y + pipeHeight > birdY) {
      gameOver = true;
      gameOverSound.play();
      bgMusic.pause();
      displayGameOver();
      return;
    }

  
    if (pipeArray[i].x === birdX && pipeArray[i].img === topPipeImg) {
      score++;
    }
  }

  pipeArray = pipeArray.filter(pipe => pipe.x + pipeWidth > 0);

  if (birdY > board.height || birdY < 0) {
    gameOver = true;
    gameOverSound.play();
    bgMusic.pause();
    displayGameOver();
    return;
  }

  context.fillStyle = "rebeccapurple";
  context.font = "20px Arial";
  context.fillText("Score: " + score, 10, 50);

  requestAnimationFrame(update);
}

function addPipes() {
  if (gameOver) return;

  let randomPipeY = pipeY - pipeHeight / 4 - Math.random() * (pipeHeight / 2);
  let topPipe = {
    img: topPipeImg,
    x: pipeX,
    y: randomPipeY,
    width: pipeWidth,
    height: pipeHeight,
  };
  pipeArray.push(topPipe);

  let bottomPipe = {
    img: bottomPipeImg,
    x: pipeX,
    y: randomPipeY + pipeHeight + openingSpace,
    width: pipeWidth,
    height: pipeHeight,
  };
  pipeArray.push(bottomPipe);
}

function birdMove(e) {
  if (e.code == "Space" || e.code == "ArrowUp") {
    velocityY = -3;
    jumpSound.play();
  }
}

function displayGameOver() {
  context.fillStyle = " rebeccapurple";
  context.font = "30px Arial";
  context.fillText("Game Over!", board.width / 2-40, board.height / 2);
  context.font = "20px Arial ";
  context.fillText("Score: " + score, board.width / 2, board.height / 2 + 40);
  context.fillText("Press any key to Restart", board.width / 2-50, board.height / 2 + 80);
  document.addEventListener('keydown', restartGame);
}

function restartGame() {
  gameOver = false;
  birdX = 50;
  birdY = 325;
  velocityY = 0;
  pipeArray = [];
  score = 0;
  bgMusic.currentTime = 0;
  bgMusic.play();
  document.removeEventListener('keydown', restartGame);
  requestAnimationFrame(update);
}
