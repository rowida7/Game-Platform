let starts =document.getElementById("stars");
let mou3 =document.getElementById("mountains3");
let mou4 =document.getElementById("mountains4");
let river =document.getElementById("river");
// let sound = document.getElementById("auidio");
let boot =document.getElementById("boot");
let moon =document.getElementById("moon");
let mou7 = document.getElementById("mountains7");
let sun=document.getElementById("sun");
sun.style.display='none';
let cloud1 = document.getElementById("cloud1");
cloud1.style.display='none';
let cloud2 = document.getElementById("cloud2");
cloud2.style.display='none';
let bird = document.getElementById("bird");
bird.style.display='none';
let bird1 = document.getElementById("bird1");
bird1.style.display='none';
let cloud3 = document.getElementById("cloud3");
cloud3.style.display='none';
let cloud4 = document.getElementById("cloud4");
cloud4.style.display='none';

// let sound = getElementById("auidio");
const sound = new Audio();
const sourceE = document.createElement("source")
sourceE.type='audio/mpeg'
sourceE.src='sound/bird sound effect morning copyright free forest   no copyright stuff.mp3'

sound.appendChild(sourceE)


window.onscroll=function(){
    let value = scrollY;
    console.log(value);
    starts.style.left= value + 'px';
    moon.style.top=value*4.5 + 'px';
    mou3.style.top=value*2 + 'px';
    mou4.style.top=value*1.5 + 'px';
    river.style.top=value + 'px';
    // boot.style.left=value*4.5 + 'px';
    boot.style.top=value + 'px';
    
    if(value >= 105){
        document.querySelector('.main').style.background='linear-gradient(#5e8de0,#d7e8fd)';
        starts.style.display='none';
        sun.style.display='block';
        cloud1.style.display='block';
        cloud2.style.display='block';
        cloud3.style.display='block';
        cloud4.style.display='block';
        
        cloud1.style.left=value + 'px';
        cloud2.style.left=value + 'px';
        cloud3.style.left=value + 'px';
        cloud4.style.left=value + 'px';
        bird.style.display='block';
        bird1.style.display='block';
        // sound.muted=false;
        // sound.play();
        sound.play();
        
        
       


    }
    else{
        document.querySelector('.main').style.background='linear-gradient(rgb(38, 26, 72),rgba(26, 14, 5, 0.871))';
        starts.style.display='block';
        sun.style.display='none';
        cloud1.style.display='none';
        cloud2.style.display='none';
        cloud3.style.display='none';
        cloud4.style.display='none';
        bird.style.display='none';
        bird1.style.display='none';
        sound.pause()
        

    }

    
}
const birdImages = [
    'images/1-removebg-preview.png',
    'images/2-removebg-preview.png',
    'images/3-removebg-preview.png',
    'images/4-removebg-preview.png',
    'images/5-removebg-preview.png',
    'images/6-removebg-preview.png'
];

let currentImageIndex = 0;
const birdElement = document.getElementById('bird');
const birdElement1 = document.getElementById('bird1');

function changeBirdImage() {
    currentImageIndex = (currentImageIndex + 1) % birdImages.length;
    birdElement.src = birdImages[currentImageIndex];
    birdElement1.src = birdImages[currentImageIndex];

}

// Change image every 0.167 seconds (1 second divided by 6 images)
setInterval(changeBirdImage, 167);


