const mike = {
    firstName: 'Mike',
    lastName: 'Tyson',
    nickName: 'Iron Mike',
    healthPoints: 80,
    attackPower: 7,
    counterAttack: 5,
    isPlayer: false,
    currentOpponent: false,
    opponentDefeated: false,
    id: 'mike-card-holder'
};

const ali = {
    firstName: 'Muhammad',
    lastName: 'Ali',
    nickName: 'The Greatest',
    healthPoints: 120,
    attackPower: 5,
    counterAttack: 5,
    isPlayer: false,
    currentOpponent: false,
    opponentDefeated: false
};

const mayweather = {
    firstName: 'Floyd',
    lastName: 'Mayweather',
    nickName: 'Money Mayweather',
    healthPoints: 110,
    attackPower: 4,
    counterAttack: 8,  
    isPlayer: false,
    currentOpponent: false,
    opponentDefeated: false 
};

const roy = {
    firstName: 'Roy',
    lastName: 'Jones',
    nickName: 'Captain Hook',
    healthPoints: 100,
    attackPower: 6,
    counterAttack: 8, 
    isPlayer: false,
    currentOpponent: false,
    opponentDefeated: false
};
let currentPlayer;
let currentOpponent;
let defeatedOpponents = [];
let playerScore = 0;
let opponentScore = 0;
let playerSet = false;
const boxerCard = $('.boxer-card-holder');
const mikeCard = $('#mike-card-holder');
const aliCard = $('#ali-card-holder');
const mayweatherCard = $('#mayweather-card-holder');
const royCard = $('#roy-card-holder');
let punchPower = $('#player-punch-power');
let counterPunch = $('opponent-counter-power');

 //Function upon selecting player

mikeCard.click(function () {
    if (playerSet == false) {
        $(this).appendTo('#ring-area');
        currentPlayer = Object.assign({}, mike);
        playerSet = true;
        console.log(currentPlayer);
        console.log(playerSet);
        $(this).width('30%');
        $('#hp-bar').width('50%');
        $('#welcome-text h1').text('Select Your First Opponent');  
        loadDash(mike);     
    } else {
        $(this).appendTo('#ring-area');
        console.log(mike.isPlayer);
        console.log(playerSet);
        opponentArray.append(mike.lastName);
        console.log(mike.lastName);
        mike.currentOpponent = true;
        $(this).width('30%');
        $('#welcome-text h1').text('Round 1: FIGHT');
        loadDash(mike);
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
    } loadDash(ali);
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
    } loadDash(mayweather);
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
    } loadDash(roy);
 });

 

//Load object into dashboard
function loadDash (player) {
    if (player.isPlayer === true) {
       $('#player-punch-power').text(player.attackPower); 
    } else $('#opponent-counter-power').text(player.counterAttack);
};



 //HP bar logic
 function resizeHPBar(player) {
    const hpBeg = player.healthPoints;
    let hpCurrent = player.healthPoints;
    let hpBarLengthPerc = (hpBeg / hpCurrent) * 100;
    $('#hp-bar').width((hpBarLengthPerc * 100));
    return(hpBarLengthPerc);
}

//Fight - attack button on click

function attack (player, opponent) {
    opponent.heathPoints -= player.attackPoints;
    player.punchPower += punchPower; 
    resizeHPBar();
    if (opponentHP > 0) {
        player.healthPoints -= opponent.counterPower
    } else {
        opponentLose()
    };
    
    resizeHPBar();
    if (player.healthPoints <= 0) {
        playerLose();
    } 
}


//opponent lose
// opponentLose 



