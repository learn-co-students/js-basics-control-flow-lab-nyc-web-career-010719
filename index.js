// * `switchOnCharmFromTip()` — Use a `switch` statement to return a different
// response based on the generosity of the passenger's tip.

let distance, city, greeting, tip;

function scuberGreetingForFeet(distance) {

  if (distance <= 400) {
    greeting = 'This one is on me!';
  } else if (distance > 2000 && distance <=2500) {
    greeting = 'I will gladly take your thirty bucks.';
  } else if (distance > 2500) {
    greeting = 'No can do.';
  };

  return greeting;
};

function ternaryCheckCity(city) {
  city === 'NYC' ? greeting = 'Ok, sounds good.' : greeting = 'No go.';

  return greeting;
};

function switchOnCharmFromTip(tip) {
  if (tip === 'generous') {
    greeting = 'Thank you so much.';
  } else if (tip === 'not as generous') {
    greeting = 'Thank you.';
  } else {
    greeting = 'Bye.';
  };

  return greeting;
};





// describe('switchOnCharmFromTip()', function () {
//   it('should return "Thank you so much." if the tip is generous', function () {
//     expect(switchOnCharmFromTip('generous')).to.equal('Thank you so much.');
//   });
//
//   it('should return "Thank you." if the tip is not as generous', function () {
//     expect(switchOnCharmFromTip('not as generous')).to.equal('Thank you.');
//   });
//
//   it('should return "Bye." if anything else', function () {
//     expect(switchOnCharmFromTip('thanks for everything')).to.equal('Bye.');
//   });
