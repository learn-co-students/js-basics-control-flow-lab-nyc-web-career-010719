// Write your code in this file!
function scuberGreetingForFeet(someNumber) {
  if (someNumber <= 400) {
      return 'This one is on me!';
    } else if (someNumber > 1999 && someNumber < 2500) {
        return 'I will gladly take your thirty bucks.';
    } else {
        return "No can do.";
  }
} //ends function
//
// function ternaryCheckCity(city) {
//   if (city == "NYC") {
//     return "Ok, sounds good.";
//   }
//   else {
//     return "No go.";
//   }
// } //end

function ternaryCheckCity(city) {
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}


function switchOnCharmFromTip(tip) {
  switch (tip) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default:
      return 'Bye.';
  }
}
// function switchOnCharmFromTip(tip) {
//   if (tip == "generous") {
//     return 'Thank you so much.';
//   } else if (tip == "not as generous")
//     return "Thank you.";
//   } else {
//     return "Bye.";
//   }
// } //end
