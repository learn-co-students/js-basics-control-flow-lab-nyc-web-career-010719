// Write your code in this file!
function scuberGreetingForFeet(num)
{
  if (num >2500)
  {
    return 'No can do.'
  }
  return num <=400 ? 'This one is on me!':'I will gladly take your thirty bucks.'
};

function ternaryCheckCity(city)
{
  return city == 'NYC' ? 'Ok, sounds good.':'No go.'
};

function switchOnCharmFromTip(tip)
{
  switch (tip){
    case 'generous': return 'Thank you so much.'
    case 'not as generous': return 'Thank you.'
    default: return 'Bye.'
  }
};
