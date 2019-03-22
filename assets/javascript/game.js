// BOXER OBJECTS ------------------------------------------------------------------------------

const mike = {
    firstName: 'Mike',
    lastName: 'Tyson',
    nickName: 'Iron Mike',
    healthPoints: 80,
    healthPointsBase: 80,
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
    healthPointsBase: 80,
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
    healthPointsBase: 110,
    basePower: 7,
    attackPower: 4,
    counterAttack: 15,  
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
    healthPointsBase: 100,
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
let opponentSet = false;
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
        $(this).appendTo('#player-corner');
        mike.isPlayer = true;
        currentPlayer = Object.assign({}, mike);
        playerSet = true;
        $(this).width('100%');
        $(this).height('100%');
        $('#welcome-text h1').text('Select Your First Opponent');  
        loadDash(mike);     
    } else if (mike.opponentDefeated == true) {
        alert("Fighter has already been defeated.  Please select another boxer.")
    } else if (opponentSet == true) {
          alert('Opponenent already selected. Time to fight!')
      } else {
        $(this).appendTo('#opponent-corner');
        currentOpponent = Object.assign({}, mike);
        opponentSet = true;
        $(this).width('100%');
        $(this).height('100%');
        $('#welcome-text h1').text('Round ' + (defeatedOpponents.length + 1) + ': FIGHT!');
        opponentSet = true;
        loadDash(mike);
    }
 });

aliCard.click(function () {
    if (playerSet == false) {
        $(this).appendTo('#player-corner');
        ali.isPlayer = true;
        currentPlayer = Object.assign({}, ali);
        playerSet = true;
        $(this).width('100%');
        $(this).height('100%');
        $('#welcome-text h1').text('Select Your First Opponent');       
    } else if (ali.opponentDefeated == true) {
        alert("Fighter has already been defeated.  Please select another boxer.")
    } else if (opponentSet == true) {
        alert('Opponenent already selected. Time to fight!')
    } else {
        $(this).appendTo('#opponent-corner');
        currentOpponent = Object.assign({}, ali);
        $(this).width('100%');
        $(this).height('100%');
        $('#welcome-text h1').text('Round ' + (defeatedOpponents.length + 1) + ': FIGHT!');
        opponentSet = true;
    } loadDash(ali);
 });

mayweatherCard.click(function () {
    if (playerSet == false) {
        $(this).appendTo('#player-corner');
        mayweather.isPlayer = true;
        currentPlayer = Object.assign({}, mayweather);
        playerSet = true;
        $(this).width('100%');
        $(this).height('100%');
        $('#welcome-text h1').text('Select Your First Opponent');       
    } else if (mayweather.opponentDefeated == true) {
        alert("Fighter has already been defeated.  Please select another boxer.")
    } else if (opponentSet == true) {
        alert('Opponenent already selected. Time to fight!')
    } else {
        $(this).appendTo('#opponent-corner');
        currentOpponent = Object.assign({}, mayweather);
        $(this).width('100%');
        $(this).height('100%');
        $('#welcome-text h1').text('Round ' + (defeatedOpponents.length + 1) + ': FIGHT!');
        opponentSet = true;
    } loadDash(mayweather);
 });

royCard.click(function () {
    if (playerSet == false) {
        $(this).appendTo('#player-corner');
        roy.isPlayer = true;
        currentPlayer = Object.assign({}, roy);
        playerSet = true;
        $(this).width('100%');
        $(this).height('100%');
        $('#welcome-text h1').text('Select Your First Opponent');       
    } else if (roy.opponentDefeated == true) {
        alert("Fighter has already been defeated.  Please select another boxer.")
    } else if (opponentSet == true) {
        alert('Opponenent already selected. Time to fight!')
    } else {
        $(this).appendTo('#opponent-corner');
        currentOpponent = Object.assign({}, roy);
        $(this).width('100%');
        $(this).height('100%');
        $('#welcome-text h1').text('Round ' + (defeatedOpponents.length + 1) + ': FIGHT!');
        opponentSet = true;
    } loadDash(roy);
 });

 

//Load object into dashboard ----------------------------------------------------------------------

function loadDash (player) {
    if (player.isPlayer == true) {
       $('#player-punch-power').text(player.attackPower); 
    } else $('#opponent-counter-power').text(player.counterAttack);
};



 //HP bar logic---------------------------------------------------------------------------------------------

 function resizeHPBar(player) {
    const hpBeg = player.healthPointsBase;
    let hpCurrent = player.healthPoints;
    let hpBarLengthPerc = (hpCurrent / hpBeg) * 100;
    $('#hp-bar').css('width', hpBarLengthPerc.toString() + '%');
}

function resizeOpponentHPBar(player) {
    const hpBeg = player.healthPointsBase;
    let hpCurrent = player.healthPoints;
    let hpBarLengthPerc = (hpCurrent / hpBeg) * 100;
    $('#opponent-hp-bar').css('width', hpBarLengthPerc.toString() + '%');
}

//Fight - attack button on click ------------------------------------------------------------------------------------

$('#attack').click(function attack () {
    if (currentOpponent == null) {
        alert("Select your next opponent.")

    } else {

    currentOpponent.healthPoints -= currentPlayer.attackPower;
    currentPlayer.attackPower += currentPlayer.basePower;
    loadDash(currentPlayer);
    loadDash(currentOpponent);
    resizeOpponentHPBar(currentOpponent);
    } if (currentOpponent.healthPoints > 0) {
        currentPlayer.healthPoints -= currentOpponent.counterAttack;
        resizeHPBar(currentPlayer);
    } else if (currentOpponent.healthPoints <= 0) {
        opponentDefeated();
    }; 
}); 

function opponentDefeated() {
    $('#' + currentOpponent.id).appendTo($('#select-player-container'));
    $('#' + currentOpponent.id).css("opacity", .4);
    currentOpponent.opponentDefeated = true;
    console.log(currentOpponent.opponentDefeated)
    $('#' + currentOpponent.id).unbind("click");
    defeatedOpponents.push(currentOpponent.id);
    console.log(defeatedOpponents)
    opponentSet = false;
    currentOpponent = null;
    if (defeatedOpponents.length == 3) {
        winGame();
    }
    
};

function winGame() {
    $.each(defeatedOpponents, function(index, item) {
    $('#' + item).fadeOut('slow')
    $('#attack').attr('disabled', true);
    $(currentPlayer).animate({margin: 'auto'}, 'slow');
    $('#select-player-container h1').text('You Win!!');
    });
}











//SOURCES----------------------------------------
// https://codepen.io/susanwinters/pen/epLzRG

// https://www.codeproject.com/Questions/736336/How-Can-I-Diable-Click-On-A-Div

// https://www.w3schools.com/howto/howto_css_flip_card.asp

// http://api.jquery.com/jquery.each/

// https://www.mkyong.com/jquery/how-to-disable-submit-button-after-clicked-with-jquery/



