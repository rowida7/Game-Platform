const inputsContainer = document.querySelector(".inputs"),
  discTitle = document.querySelector(".disc"),
  guessCount = document.querySelector(".guess_count"),
    resetButton = document.querySelector("button"),
    homeButton = document.querySelector(".home_button"),
  typing = document.querySelector(".typing"),
  succ = new Audio("./sounds/succ.mp3"),
  winner = document.querySelector(".winner");


const words = [
    {
        word: "apple",
        disc: "فاكهة حلوة غالبًا ما تكون حمراء أو خضراء.",
      },
      {
        word: "cat",
        disc: "حيوان صغير يقول 'مياو'.",
      },
      {
        word: "dog",
        disc: "حيوان أليف ينبح.",
      },
      {
        word: "sun",
        disc: "النجم الأصفر الكبير في السماء خلال النهار.",
      },
      {
        word: "moon",
        disc: "الدائرة البيضاء في السماء ليلاً.",
      },
      {
        word: "car",
        disc: "مركبة يقودها الناس للذهاب إلى الأماكن.",
      },
      {
        word: "tree",
        disc: "نبات طويل به أوراق وفروع.",
      },
      {
        word: "ball",
        disc: "لعبة مستديرة يمكنك رميها أو ركلها.",
      },
      {
        word: "fish",
        disc: "حيوان يعيش في الماء ويسبح.",
      },
      {
        word: "milk",
        disc: "مشروب أبيض يأتي من الأبقار.",
      },
];

let word,
  maxGuess = 12,
  countToWin = [];


document.addEventListener("keydown", () => typing.focus());

typing.addEventListener("input", startGame);


resetButton.addEventListener("click", getRandomWord);

homeButton.addEventListener("click", () => {
    window.location.href = "../home.html"; 
  });


function getRandomWord() {
 
  reset();
  let randomObject = words[Math.floor(Math.random() * words.length)];
  let disc = randomObject.disc;
  
  word = randomObject.word;
 
  discTitle.innerText = disc;
  
  guessCount.innerText = maxGuess;
  
  let inputs = "";
  for (let i = 0; i < word.length; i++) {
    inputs += `<input type="text" disabled/>`;
  }
  inputsContainer.innerHTML = inputs;
}
getRandomWord();


function startGame(e) {
  let char = e.target.value.toLowerCase();
  
  if (word.includes(char)) {
    for (let i = 0; i < word.length; i++) {
      
      if (word[i] === char && !inputsContainer.querySelectorAll("input")[i].value) {
        inputsContainer.querySelectorAll("input")[i].value = char;
        countToWin.push(char);
      }
    }
  } else {
    maxGuess--;
  }
  guessCount.innerText = maxGuess;
  typing.value = "";

  
  if (countToWin.length === word.length) {
    winner.classList.remove("hidden");
    succ.play();
    countToWin = [];
  }


  setTimeout(() => {
    if (maxGuess <= 0) {
      alert("You lost 😭 Better luck next time :)");
      for (let i = 0; i < word.length; i++) {
        inputsContainer.querySelectorAll("input")[i].value = word[i];
      }
    }
  }, 100);
}


function reset() {
 
  maxGuess = 12;
  
  winner.classList.add("hidden");
 
  countToWin = [];
 
  succ.pause();
}
