const canvas = document.querySelector("#pong");
const ctx = canvas.getContext("2d");

const COM_LEVEL = 0.2;
const PLAYER_HEIGHT = 100;
const PLAYER_WIDTH = 20;
const BALL_START_SPEED = 0.5;
const BALL_DELTA_SPEED = 0.1;

const player = {
  x: 0,
  y: canvas.height / 2 - PLAYER_HEIGHT / 2,
  width: PLAYER_WIDTH,
  height: PLAYER_HEIGHT,
  color: "#3AB0FF",
  score: 0,
};

const computer = {
  x: canvas.width - PLAYER_WIDTH,
  y: canvas.height / 2 - PLAYER_HEIGHT / 2,
  width: PLAYER_WIDTH,
  height: PLAYER_HEIGHT,
  color: "#FF1E00",
  score: 0,
};

const ball = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  radius: 10,
  speed: BALL_START_SPEED,
  velocityX: 5,
  velocityY: 5,
  color: "#3AB0FF",
};

const net = {
  x: canvas.width / 2 - 1,
  y: 0,
  width: 2,
  height: 10,
  color: "#59CE8F",
};

function drawRect(x, y, w, h, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, w, h);
}

function drawCircle(x, y, r, color) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI * 2, false);
  ctx.closePath();
  ctx.fill();
}

function drawText(text, x, y, color) {
  ctx.fillStyle = color;
  ctx.font = "45px fantasy";
  ctx.fillText(text, x, y);
}


function drawNet() {
  for (let i = 0; i <= canvas.height; i += 15) {
    drawRect(net.x, net.y + i, net.width, net.height, net.color);
  }
}

function render() {
  drawRect(0, 0, canvas.width, canvas.height, "#E8F9FD");
  drawNet();
  drawText(player.score, canvas.width / 4.5, canvas.height / 5, "#59CE8F");
  drawText(
    computer.score,
    (3 * canvas.width) / 4,
    canvas.height / 5,
    "#59CE8F"
  );

  drawRect(player.x, player.y, player.width, player.height, player.color);
  drawRect(
    computer.x,
    computer.y,
    computer.width,
    computer.height,
    computer.color
  );

  drawCircle(ball.x, ball.y, ball.radius, ball.color);
}


function collision(b, p) {
  b.top = b.y - b.radius;
  b.bottom = b.y + b.radius;
  b.left = b.x - b.radius;
  b.right = b.x + b.radius;
  p.top = p.y;
  p.bottom = p.y + p.height;
  p.left = p.x;
  p.right = p.x + p.width;
  return (
    b.right > p.left && b.bottom > p.top && b.left < p.right && b.top < p.bottom
  );
}


function resetBall() {
  ball.x = canvas.width / 2;
  ball.y = canvas.height / 2;
  ball.speed = BALL_START_SPEED;
  ball.velocityX = -ball.velocityX;
}


canvas.addEventListener("mousemove", (e) => {
  if (paused) return;
  let rect = canvas.getBoundingClientRect();
  player.y = e.clientY - rect.top - player.height / 2;
});

function lerp(a, b, t) {
  return a + (b - a) * t; 
}


let paused = false;
function update() {
  if (paused) return;
  ball.x += ball.velocityX * ball.speed;
  ball.y += ball.velocityY * ball.speed;


  if (ball.y + ball.radius > canvas.height || ball.y - ball.radius < 0) {
    ball.velocityY = -ball.velocityY;
  }


  let selectedPlayer = ball.x < canvas.width / 2 ? player : computer;
  if (collision(ball, selectedPlayer)) {
    ball.velocityX = -ball.velocityX;
    ball.speed += BALL_DELTA_SPEED;
  }

  let targetPos = ball.y - computer.height / 2;
  let currentPos = computer.y;
  computer.y = lerp(currentPos, targetPos, COM_LEVEL);


  if (ball.x - ball.radius < 0) {
    
    computer.score++;
    resetBall();
  } 
  else if (ball.x + ball.radius > canvas.width) {
   
    player.score++;
    resetBall();
  }
}


function game() {
  update();
  render();
}

const FPS = 60;
setInterval(game, 1000 / FPS);
const pauseBtn = document.querySelector("#pause");

pauseBtn.addEventListener("click", () => {
  if (pauseBtn.innerHTML === "Resume") {
    pauseBtn.innerHTML = "Pause";
    paused = false;
  } else {
    pauseBtn.innerHTML = "Resume";
    paused = true;
  }
});
