// Write your code in this file!
function scuberGreetingForFeet(distance) {
  let result
  if (distance <= 400) {
    result = 'This one is on me!';
  }
  else if (1999 < distance && distance < 2500) {
    result = 'I will gladly take your thirty bucks.';
  }
  else {
    result = 'No can do.';
  }
return result
}

function ternaryCheckCity(city) {
  if (city === 'NYC') {
    return 'Ok, sounds good.'
  }
  else {
    return 'No go.'
  }
}

function switchOnCharmFromTip(tip) {
  switch (tip) {
    case 'generous':
      return 'Thank you so much.'
      break;
    case 'not as generous':
      return 'Thank you.'
      break;
    default: 'bye'
    return 'Bye.'
  }
}
