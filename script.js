const daysElement = document.getElementById('days');
const monthsElement = document.getElementById('months');
const hoursElement = document.getElementById('hours');
const minsElement = document.getElementById('mins');
const secsElement = document.getElementById('secs');

function countdown() {
  const date = new Date();
  const christmas = new Date(date.getFullYear(), 11, 25); 
  
  if (date > christmas) {
    christmas.setFullYear(christmas.getFullYear() + 1);
  }

  const difference = christmas - date;
  const monthsLeft = Math.floor(difference / 1000 / 60 / 60 / 24 / 30);
  const days = Math.floor(difference / 1000 / 60 / 60 / 24);
  const hours = Math.floor(difference / 1000 / 60 / 60) % 24;
  const minutes = Math.floor(difference / 1000 / 60) % 60;
  const seconds = Math.floor(difference / 1000) % 60;

  monthsElement.innerHTML = monthsLeft;
  daysElement.innerHTML = days;
  hoursElement.innerHTML = hours;
  minsElement.innerHTML = minutes;
  secsElement.innerHTML = seconds;
}

const timer = setInterval(countdown, 1000);
countdown();

const jokes = [
    "Why does the Santa have three gardens? So he can ho-ho-ho!",
    "What do you call Santa when he doesn't move? Santa Pause!",
    "What do you call people who are afraid of Santa Claus? Claustrophobic!",
    "What nationality is Santa Claus? North Polish!",
    "Where does Santa go to vote? The North Poll!",
    "How much did Santa pay for his sleigh? Nothing, it was on the house!",
    "What does \"Oh, Oh, Oh\" spell? Santa walking backwards!",
    "Why don't aliens celebrate Christmas? Because they don't want to give away their presence!",
    "What do you get if you cross Santa with a duck? A Christmas Quacker!",
    "What was Santa's favorite subject in school? Chemistree!",
    "How did Mrs. Claus tell Santa the weather today? \"It looks reindeer!\"",
    "What does Santa use to measure? Santameters!",
    "What is Santa's dog's name? Santa Paws!",
    "What did Luke Skywalker say to the Christmas Tree? May the Forest be with you!",
    "Why did Santa go to music school? So he could improve his wrapping skills!",
    "Why did Rudolph have to attend Summer School? Because he went down in History!",
    "What falls at the North Pole but never gets hurt? Snow!",
    "What do you call a greedy elf? Elfish!",
    "What do snowmen say to one another in the morning? Have an ice day!",
    "What do you call a snowman with a six pack? An abdominal snowman!",
    "Why did Santa's helper see the doctor? Because he had low \"elf\" esteem!",
    "What do you call a snowman in the summer? A puddle!",
    "What do you call an elf that runs away from Santa's workshop? A rebel without a Claus!",
    "What's the best Christmas present? A broken drum, you just can't beat it!",
    "What reindeer game do reindeers play at sleepovers? Truth or deer!"
];

const doors = document.querySelectorAll('.door');
const jingleSound = new Audio('jingle.mp3');
const modal = document.querySelector('.modal');
const modalWrapper = document.querySelector('.modal-wrapper');
const close = document.querySelector('.close');
const joke = document.querySelector('#joke-content');
modal.style.display = "none";
const today = new Date().getDate();
const e = document.querySelector(`[data-num="${today}"]`);
if (today){
    e.classList.add('today');
}

document.querySelectorAll('.door').forEach(door => {
    door.addEventListener('click', function() {
        const date = new Date();
        const doorNum = parseInt(this.getAttribute('data-num'));
        const doorDate = new Date(date.getFullYear(), 11, doorNum);

        if (date < doorDate) {
            alert("You can't open this door yet!");}
        else{
        const jokee = jokes[doorNum - 1];
        joke.innerHTML = jokee;
        modal.classList.add('opened');
        modal.style.display = "flex";
        this.style.transform = "scale(1.2)";
        jingleSound.play();
        setTimeout(() => this.style.transform = "scale(1)", 300);}
        setTimeout(() => {
            modalWrapper.style.transform = 'scaleX(0)';
        }, 100);
        
    });
});

close.addEventListener('click', function() {
    modal.style.display = "none";
    modal.classList.remove('opened');
    setTimeout(() => {
        modal.style.display = "none";
        modalWrapper.style.transform = 'scaleX(1)';
    }, 300);
});

window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
        modal.classList.remove('opened');
        modalWrapper.style.transform = 'scaleX(1)';
    }
});

const headers = document.querySelectorAll('header');

function createSnowflake(headerElement) {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.innerHTML = '❄';
    snowflake.style.left = `${Math.random() * 100}vw`;
    snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`;
    headerElement.appendChild(snowflake);
    setTimeout(() => snowflake.remove(), 5000);
}

headers.forEach(header => {
    setInterval(() => createSnowflake(header), 500);
});

const santaSleigh = document.querySelector('.santa-sleigh');
const hoHoHo = new Audio("hohoho.mp3");

function animatedSanta(){
    santaSleigh.style.animation = 'sleigh-move 10s linear';
    hoHoHo.play();
    setTimeout(() => {
        santaSleigh.style.animation = 'none';
    },10000);
}
setInterval(animatedSanta, 15000);
