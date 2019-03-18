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

 const mikeCard = $('#mike-card-holder');
 const aliCard = $('#mike-card-holder');
 const mayweatherCard = $('#mike-card-holder');
 const royCard = $('#mike-card-holder');

 mikeCard.click(function () {
     alert('testing 123');
 });
