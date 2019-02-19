// Write your code in this file!

function scuberGreetingForFeet(distance) {
  let greeting
  if(distance < 400) {
    greeting = "This one is on me!"
  } else if (distance > 2500) {
    greeting = "No can do."
  } else if (distance > 2000){
    greeting = "I will gladly take your thirty bucks."
  }
  return greeting
}

function ternaryCheckCity(city) {
  let greeting
  if(city === "NYC") {
    greeting = "Ok, sounds good."
  } else {
    greeting = "No go."
  }
  return greeting
}


function switchOnCharmFromTip(tip) {
  let greeting
  if(tip === "generous") {
    greeting = "Thank you so much."
  } else if (tip === "not as generous") {
    greeting = "Thank you."
  } else {
    greeting = "Bye."
  }
  return greeting
}
