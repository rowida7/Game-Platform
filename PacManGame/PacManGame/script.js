const ScoreDisplay= document.querySelector('.score');
const width=28;
let score=0;
let winScore=234;
let grid=document.querySelector('.grid');
const layout = [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
    1, 3, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 3, 1,
    1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
    1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 4, 4, 4, 2, 2, 4, 4, 4, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 4, 2, 2, 2, 2, 2, 2, 4, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
    4, 4, 4, 4, 4, 4, 0, 0, 0, 4, 4, 2, 2, 2, 2, 2, 2, 4, 4, 0, 0, 0, 4, 4, 4, 4, 4, 4,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 4, 2, 2, 2, 2, 2, 2, 4, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
    1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
    1, 3, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 3, 1,
    1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1,
    1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1,
    1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
    1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
]
var squares = [];

function createBoard() {
    for (let i = 0; i < layout.length; i++) {
        const square = document.createElement('div');
        grid.appendChild(square);
        squares.push(square);
        squares[i].classList.add(i);

        if (layout[i] === 0) {
            squares[i].classList.add('pac-dot');
            const img = document.createElement('img');
            img.src = 'dollar.png';
            squares[i].appendChild(img);
        }
        if (layout[i] === 1) {
            squares[i].classList.add('wall');
        }
        if (layout[i] === 2) {
            squares[i].classList.add('ghost-lair');
        }
    }
}

createBoard();

let pacManCurrentIndex = 490;
const pacManImg = document.createElement('img');
pacManImg.src = 'PacMan.png';
squares[pacManCurrentIndex].classList.add('pac-man');
squares[pacManCurrentIndex].appendChild(pacManImg);

function movePacman(e) {
    if (score === winScore) {
        return;
    }

    const pacManCurrentSquare = squares[pacManCurrentIndex];
    pacManCurrentSquare.classList.remove('pac-man');
    pacManCurrentSquare.removeChild(pacManCurrentSquare.querySelector('img'));

    let newIndex = pacManCurrentIndex;

    switch (e.key) {
        case 'ArrowLeft':
            if (pacManCurrentIndex % width !== 0) newIndex--;
            if (squares[newIndex] === squares[363]) newIndex = 391;
            pacManImg.style.transform = 'scaleX(-1)';
            break;
        case 'ArrowRight':
            if (pacManCurrentIndex % width < width - 1) newIndex++;
            if (newIndex === 392) newIndex = 364;
            pacManImg.style.transform = 'scaleX(1)';
            break;
        case 'ArrowUp':
            if (pacManCurrentIndex - width >= 0) newIndex -= width;
            pacManImg.style.transform = 'rotate(-90deg)';
            break;
        case 'ArrowDown':
            if (pacManCurrentIndex + width < squares.length) newIndex += width;
            pacManImg.style.transform = 'rotate(90deg)';
            break;
    }

   
    if (squares[newIndex] && !squares[newIndex].classList.contains('wall') && !squares[newIndex].classList.contains('ghost-lair')) {
        pacManCurrentIndex = newIndex;
    }

    squares[pacManCurrentIndex].classList.add('pac-man');
    squares[pacManCurrentIndex].appendChild(pacManImg);

    pacDotEat();
    checkForGameOver();
    win();
}

document.addEventListener('keydown', movePacman);

function pacDotEat() {
    const pacManSquare = squares[pacManCurrentIndex];
    if (pacManSquare.classList.contains('pac-dot')) {
        score++;
        ScoreDisplay.innerHTML = score;
        pacManSquare.removeChild(pacManSquare.querySelector('img'));
        pacManSquare.classList.remove('pac-dot');
    }
}

function win() {
    if (score === winScore) {
        const modal = document.createElement('div');
        modal.style.position = 'fixed';
        modal.style.left = '50%';
        modal.style.top = '50%';
        modal.style.transform = 'translate(-50%, -50%)';
        modal.style.padding = '20px';
        modal.style.backgroundColor = 'white';
        modal.style.border = '1px solid black';
        modal.style.boxShadow = '0px 0px 10px rgba(0,0,0,0.5)';
        modal.style.zIndex = '1000';

        const message = document.createElement('p');
        message.textContent = 'You won! Press OK to restart.';
        modal.appendChild(message);

        const okButton = document.createElement('button');
        okButton.textContent = 'OK';
        okButton.addEventListener('click', () => {
            window.location.reload();
        });
        modal.appendChild(okButton);

        document.body.appendChild(modal);
    }
}

class Ghost {
    constructor(className, startIndex, speed, imgSrc) {
        this.className = className;
        this.startIndex = startIndex;
        this.speed = speed;
        this.currentIndex = startIndex;
        this.timerId = null;
        this.imgSrc = imgSrc;
    }

    generateRandomDirection() {
        const directions = [-1, +1, -width, +width];
        return directions[Math.floor(Math.random() * directions.length)];
    }

    isValidMove(direction) {

        const newIndex = this.currentIndex + direction;
        return newIndex >= 0 && newIndex < squares.length &&
               !squares[newIndex].classList.contains('wall') &&
               !squares[newIndex].classList.contains('ghost');
    }


    updatePosition(direction) {
        squares[this.currentIndex].classList.remove(this.className, 'ghost');
        this.currentIndex += direction;
        squares[this.currentIndex].classList.add(this.className, 'ghost');
    }

    move() {
       
        const currentSquare = squares[this.currentIndex];
        const existingGhostImg = currentSquare.querySelector('img.ghost-img');
        if (existingGhostImg) {
            currentSquare.removeChild(existingGhostImg);
        }
        
        let direction = this.generateRandomDirection();
        if (this.isValidMove(direction)) {
            this.updatePosition(direction);
        } else {
            direction = this.generateRandomDirection();
        }

      
        if (squares[this.currentIndex].classList.contains('pac-man')) {
            squares[this.currentIndex].classList.remove(this.className, 'ghost');
            this.currentIndex = this.startIndex;
            ScoreDisplay.textContent = score;
            this.updatePosition(0); 
        }

        
        const ghostImg = document.createElement('img');
        ghostImg.src = this.imgSrc;
        ghostImg.classList.add('ghost-img'); 
        squares[this.currentIndex].appendChild(ghostImg);
       
    }
    
}

function moveGhost(ghost) {
    ghost.timerId = setInterval(() => {
        ghost.move();
    }, ghost.speed);
    checkForGameOver();
}

const ghosts = [
    new Ghost('blinky', 665, 110, 'Blinky.webp'),
    new Ghost('pinky', 619, 170, 'Pinky.webp'),
    new Ghost('inky', 202, 120, 'Inky.webp'),
    new Ghost('clyde', 485, 150, 'Clyde.webp')
];

ghosts.forEach((ghost) => {
    const ghostImg = document.createElement('img');
    ghostImg.src = ghost.imgSrc;
    ghostImg.classList.add('ghost-img')
    squares[ghost.startIndex].classList.add(ghost.className, 'ghost');
    squares[ghost.startIndex].appendChild(ghostImg);
   
});

ghosts.forEach((ghost) => moveGhost(ghost));

function checkForGameOver() {
    if (squares[pacManCurrentIndex].classList.contains('ghost')) {
        ghosts.forEach((ghost) => clearInterval(ghost.timerId));
        document.removeEventListener('keydown', movePacman);
        alert('Game Over');
        window.location.reload();
    }
}
