// Write your code in this file!
function scuberGreetingForFeet(distanceInFeet) {
  if (distanceInFeet <= 400) {
      return "This one is on me!";
    } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
      return "I will gladly take your thirty bucks.";
    } else if (distanceInFeet > 2500) {
      return "No can do.";
    }
}

function ternaryCheckCity(cityName) {
  return (cityName === "NYC") ? ("Ok, sounds good.") : ("No go.");
}

function switchOnCharmFromTip(tipDescription) {
  switch (tipDescription) {
      case "generous":
        return "Thank you so much.";
        break;
      case "not as generous":
        return "Thank you.";
        break;
      default:
        return "Bye.";
        break;
    }
}
