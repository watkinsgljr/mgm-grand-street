// //HP bar logic
// function barResize() {
//     const hpBeg = player.healthPoints;
//     let hpCurrent = player.healthPoints;
//     hpBarLengthPerc = hpBeg / hpCurrent;
//     $('#hp-bar').width((hpBarLengthPerc * 100) % );
// }


// function numOfVowels(string) {
//    let counter = 0
//    vowelArray = ["a","e", "i", "o", "u", "A","E", "I", "O", "U"]
//    (i = 0; i < string.length; i++)
//      if (indexOf(string[i]) != -1) {
//         counter += 1;
//      }
    
// }

function palindromeCheck(string) {
    for (i = 0; i < string.length; i++)
    if (string.length <= 1) {
      return true;
    } else if (string[0] == string[string.length - 1]) {
    var removed = string.splice(0,-1);
    } else return false;
        
}

palindromeCheck('poop');