const mike = {
    firstName: 'Mike',
    lastName: 'Tyson',
    nickName: 'Iron Mike',
    healthPoints: 80,
    basePower: 7,
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
    healthPoints: 80,
    basePower: 7,
    attackPower: 5,
    counterAttack: 5,
    isPlayer: false,
    currentOpponent: false,
    opponentDefeated: false,
    id: 'ali-card-holder'
};

const mayweather = {
    firstName: 'Floyd',
    lastName: 'Mayweather',
    nickName: 'Money Mayweather',
    healthPoints: 110,
    basePower: 7,
    attackPower: 4,
    counterAttack: 8,  
    isPlayer: false,
    currentOpponent: false,
    opponentDefeated: false ,
    id: 'mayweather-card-holder'
};

const roy = {
    firstName: 'Roy',
    lastName: 'Jones',
    nickName: 'Captain Hook',
    healthPoints: 100,
    basePower: 7,
    attackPower: 6,
    counterAttack: 8, 
    isPlayer: false,
    currentOpponent: false,
    opponentDefeated: false,
    id: 'roy-card-holder'
};

// GLOBAL VARIABLES --------------------------------------------------------------------------------------------------------------
let currentPlayer;
let currentOpponent;
let defeatedOpponents = [];
let playerSet = false;
const boxerCard = $('.boxer-card-holder');
const mikeCard = $('#mike-card-holder');
const aliCard = $('#ali-card-holder');
const mayweatherCard = $('#mayweather-card-holder');
const royCard = $('#roy-card-holder');
let punchPower = $('#player-punch-power');
let counterPunch = $('opponent-counter-power');

 //Function upon selecting player --------------------------------------------------------------------------------------
 // boxer click events -------------------------------------------------------------------------------------------------

mikeCard.click(function () {
    if (playerSet == false) {
        $(this).appendTo('#ring-area');
        currentPlayer = Object.assign({}, mike);
        console.log(currentPlayer)
        playerSet = true;
        $(this).width('30%');
        // $('#hp-bar').width('50%');
        $('#welcome-text h1').text('Select Your First Opponent');  
        loadDash(mike);     
    } else if (mike.opponentDefeated == true) {
        alert("Fighter has already been defeated.  Please select another boxer.")
    } else {
        $(this).appendTo('#ring-area');
        currentOpponent = Object.assign({}, mike);
        console.log(currentOpponent)
        $(this).width('30%');
        $('#welcome-text h1').text('Round 1: FIGHT');
        loadDash(mike);
    }
 });

aliCard.click(function () {
    if (playerSet == false) {
        $(this).appendTo('#ring-area');
        currentPlayer = Object.assign({}, ali);
        ali.isPlayer = true;
        playerSet = true;
        console.log(ali.isPlayer);
        console.log(playerSet);
        $(this).width('30%');
        $('#welcome-text h1').text('Select Your First Opponent');       
    } else if (ali.opponentDefeated == true) {
        alert("Fighter has already been defeated.  Please select another boxer.")
    } else {
        $(this).appendTo('#ring-area');
        currentOpponent = Object.assign({}, ali);
        console.log(ali.isPlayer);
        console.log(playerSet);
        $(this).width('30%');
        $('#welcome-text h1').text('Round 1: FIGHT');
    } loadDash(ali);
 });

mayweatherCard.click(function () {
    if (playerSet == false) {
        $(this).appendTo('#ring-area');
        currentPlayer = Object.assign({}, mayweather);
        mayweather.isPlayer = true;
        playerSet = true;
        console.log(mayweather.isPlayer);
        console.log(playerSet);
        $(this).width('30%');
        $('#welcome-text h1').text('Select Your First Opponent');       
    } else if (mayweather.opponentDefeated == true) {
        alert("Fighter has already been defeated.  Please select another boxer.")
    } else {
        $(this).appendTo('#ring-area');
        currentOpponent = Object.assign({}, mayweather);
        console.log(mayweather.isPlayer);
        console.log(playerSet);
        $(this).width('30%');
        $('#welcome-text h1').text('Round 1: FIGHT');
    } loadDash(mayweather);
 });

royCard.click(function () {
    if (playerSet == false) {
        $(this).appendTo('#ring-area');
        currentPlayer = Object.assign({}, roy);
        roy.isPlayer = true;
        playerSet = true;
        console.log(roy.isPlayer);
        console.log(playerSet);
        $(this).width('30%');
        $('#welcome-text h1').text('Select Your First Opponent');       
    } else if (roy.opponentDefeated == true) {
        alert("Fighter has already been defeated.  Please select another boxer.")
    } else {
        $(this).appendTo('#ring-area');
        currentOpponent = Object.assign({}, roy);
        console.log(roy.isPlayer);
        console.log(playerSet);
        $(this).width('30%');
        $('#welcome-text h1').text('Round 1: FIGHT');
    } loadDash(roy);
 });

 

//Load object into dashboard ----------------------------------------------------------------------

function loadDash (player) {
    if (player.isPlayer === true) {
       $('#player-punch-power').text(player.attackPower); 
    } else $('#opponent-counter-power').text(player.counterAttack);
};



 //HP bar logic---------------------------------------------------------------------------------------------

 function resizeHPBar(player) {
    const hpBeg = currentPlayer.healthPoints;
    let hpCurrent = currentPlayer.healthPoints;
    let hpBarLengthPerc = (hpBeg / hpCurrent) * 100;
    $('#hp-bar').width((hpBarLengthPerc * 100 + '%'));
    return(hpBarLengthPerc);
}

//Fight - attack button on click ------------------------------------------------------------------------------------

$('#attack').click(function attack () {
    if (currentOpponent == null) {
        alert("Select your next match.")

    } else {

    currentOpponent.healthPoints -= currentPlayer.attackPower;
    currentPlayer.attackPower += currentPlayer.basePower;
    loadDash(currentPlayer);
    loadDash(currentOpponent);
    console.log(currentPlayer.attackPower) 
    console.log(currentOpponent.healthPoints)
    
    resizeHPBar();
    } if (currentOpponent.healthPoints > 0) {
        currentPlayer.healthPoints -= currentOpponent.counterAttack;
        console.log(currentPlayer.healthPoints)
    } else if (currentOpponent.healthPoints <= 0) {
        opponentDefeated();
    }; 
}); 

function opponentDefeated() {
    $('#' + currentOpponent.id).appendTo($('#opponent-area'));
    $('#' + currentOpponent.id).css("opacity", .4);
    currentOpponent.opponentDefeated = true;
    console.log(currentOpponent.opponentDefeated)
    $('#' + currentOpponent.id).unbind("click");
    defeatedOpponents.push(currentOpponent.lastName);
    console.log(defeatedOpponents)
    currentOpponent = null;
    
    console.log()
    //grey out card with grey overlay...opponent.show
};











//SOURCES----------------------------------------
// https://codepen.io/susanwinters/pen/epLzRG

// https://www.codeproject.com/Questions/736336/How-Can-I-Diable-Click-On-A-Div




