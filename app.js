//ANIMATIONS & MORE
const fadein = "animation: fadein 400ms ease-out forwards";
const fadeout = "animation: fadeout 400ms ease-in forwards";

//CARDS
const bluecard = document.querySelector('.card1');
const pinkcard = document.querySelector('.card2');
const greencard = document.querySelector('.card3');
const orangecard = document.querySelector('.card4');
const purplecard = document.querySelector('.card5');
const greycard = document.querySelector('.card6');

//COVER & INFO-BOARDS
const cover = document.querySelector('.cover');
const pinkboard = document.querySelector('.pink-board');
const blueboard = document.querySelector('.blue-board');
const greenboard = document.querySelector('.green-board');
const orangeboard = document.querySelector('.orange-board');
const purpleboard = document.querySelector('.purple-board');
const greyboard = document.querySelector('.grey-board');

//OPEN FUNCTION
pinkcard.addEventListener('click', function(){
    pinkboard.style.cssText = fadein;
    cover.style.cssText = fadein;
});

bluecard.addEventListener('click', function(){
    blueboard.style.cssText = fadein;
    cover.style.cssText = fadein;
});

greencard.addEventListener('click', function(){
    greenboard.style.cssText = fadein;
    cover.style.cssText = fadein;
});

orangecard.addEventListener('click', function(){
    orangeboard.style.cssText = fadein;
    cover.style.cssText = fadein;
});

purplecard.addEventListener('click', function(){
    purpleboard.style.cssText = fadein;
    cover.style.cssText = fadein;
});

greycard.addEventListener('click', function(){
    greyboard.style.cssText = fadein;
    cover.style.cssText = fadein;
});

//CLOSE FUNCTION
var buttons = document.querySelectorAll('.close-btn')
Array.from(buttons).forEach(function(item){
    var parent = item.parentNode;
    item.addEventListener('click', function(){
        parent.style.cssText = fadeout;
        cover.style.cssText = fadeout;
    })
});