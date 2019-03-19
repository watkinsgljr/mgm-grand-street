let mike = {
    firstName: 'Mike',
    lastName: 'Tyson',
    nickName: 'Iron Mike',
    healthPoints: 80,
    attackPower: 8,
    counterAttack: 5,
    isPlayer: false
};

let ali = {
    firstName: 'Muhammad',
    lastName: 'Ali',
    nickName: 'The Greatest',
    healthPoints: 120,
    attackPower: 5,
    counterAttack: 5,
    isPlayer: false
};

let mayweather = {
    firstName: 'Floyd',
    lastName: 'Mayweather',
    nickName: 'Money Mayweather',
    healthPoints: 110,
    attackPower: 4,
    counterAttack: 8,  
    isPlayer: false 
};

let roy = {
    firstName: 'Roy',
    lastName: 'Jones',
    nickName: 'Captain Hook',
    healthPoints: 100,
    attackPower: 6,
    counterAttack: 8, 
    isPlayer: false
};

let playerScore = 0;
let opponentScore = 0;
let playerSet = false;
const boxerCard = $('.boxer-card-holder');
const mikeCard = $('#mike-card-holder');
const aliCard = $('#ali-card-holder');
const mayweatherCard = $('#mayweather-card-holder');
const royCard = $('#roy-card-holder');

 //Function upon selecting player

mikeCard.click(function () {
    if (playerSet == false) {
        $(this).appendTo('#ring-area');
        mike.isPlayer = true;
        playerSet = true;
        console.log(mike.isPlayer);
        console.log(playerSet);
        $(this).width('30%');
        $('#welcome-text h1').text('Select Your First Opponent');       
    } else {
        $(this).appendTo('#ring-area');
        console.log(mike.isPlayer);
        console.log(playerSet);
        $(this).width('30%');
        $('#welcome-text h1').text('Round 1: FIGHT');
    }
 });

aliCard.click(function () {
    if (playerSet == false) {
        $(this).appendTo('#ring-area');
        ali.isPlayer = true;
        playerSet = true;
        console.log(ali.isPlayer);
        console.log(playerSet);
        $(this).width('30%');
        $('#welcome-text h1').text('Select Your First Opponent');       
    } else {
        $(this).appendTo('#ring-area');
        console.log(ali.isPlayer);
        console.log(playerSet);
        $(this).width('30%');
        $('#welcome-text h1').text('Round 1: FIGHT');
    }
 });

mayweatherCard.click(function () {
    if (playerSet == false) {
        $(this).appendTo('#ring-area');
        mayweather.isPlayer = true;
        playerSet = true;
        console.log(mayweather.isPlayer);
        console.log(playerSet);
        $(this).width('30%');
        $('#welcome-text h1').text('Select Your First Opponent');       
    } else {
        $(this).appendTo('#ring-area');
        console.log(mayweather.isPlayer);
        console.log(playerSet);
        $(this).width('30%');
        $('#welcome-text h1').text('Round 1: FIGHT');
    }
 });

royCard.click(function () {
    if (playerSet == false) {
        $(this).appendTo('#ring-area');
        roy.isPlayer = true;
        playerSet = true;
        console.log(roy.isPlayer);
        console.log(playerSet);
        $(this).width('30%');
        $('#welcome-text h1').text('Select Your First Opponent');       
    } else {
        $(this).appendTo('#ring-area');
        console.log(roy.isPlayer);
        console.log(playerSet);
        $(this).width('30%');
        $('#welcome-text h1').text('Round 1: FIGHT');
    }
 });

 

//Load object into dashboard


 //HP bar logic

//Beginning player and opponent selection



