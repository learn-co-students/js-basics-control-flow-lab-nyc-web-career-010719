// Write your code in this file!
function scuberGreetingForFeet(ride){
  let message
  if (ride <= 400){
    message = "This one is on me!"
  }
  else if (ride >= 200 && ride < 2500) {
    message = "I will gladly take your thirty bucks."
  }
  else if (ride >= 2500) {
    message = "No can do."

  }
  return message
}


function ternaryCheckCity(city){
  let message
  if (city === "NYC"){
  message = "Ok, sounds good."
}
else {
  message ="No go."
}
return message
}



function switchOnCharmFromTip(tip){
  let message
  if (tip === "generous"){
    message = "Thank you so much."
  }
  else if (tip === "not as generous"){
    message = "Thank you."
  }
  else {
    message = "Bye."
  }
  return message
}
