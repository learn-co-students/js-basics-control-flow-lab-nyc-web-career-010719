
function scuberGreetingForFeet(someValue) {
  //everything I want my function to do I put inside these curly braces
   //in this example, lets say I want my function, addFive, to add 5 to any number I pass in (someNumber), but only IF the number is greater than zero
   let result
   if (someValue > 0) {
     result = someValue + 5;
   }
   //at the end, if I want my function to return something, I need to state it:
   return result
}


function scuberGreetingForFeet(ride){
  let result
  if (ride <= 199) {
    result = 'This one is on me!'
  }
  else if (ride < 2500) {
    result = 'I will gladly take your thirty bucks.'
  }
  else if (ride > 2500) {
    result = 'No can do.'
  }
  return result
}

function ternaryCheckCity(city){
  let result
  if (city === 'NYC') {
    result = 'Ok, sounds good.'
  }
  else {
    result = "No go."
  }

  return result

}

function switchOnCharmFromTip(tip) {
  let result
  if (tip === 'generous') {
    result = "Thank you so much."
  }
  else if (tip === 'not as generous') {
    result = "Thank you."
  }

  else {
    result = "Bye."
  }

  return result


}
