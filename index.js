// Code your solutions in this file
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`)
}


const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }

  return gifts;
}

wrapGifts(gifts);

//const cards = ["Guadalupe", "Ollie", "Aki"]

function writeCards(cards, event) {
    let newArray = []
    for (let i = 0; i < cards.length; i++) {
        newArray.push(`Thank you, ${cards[i]}, for the wonderful ${event} gift!`)
    }
    return newArray
}

//writeCards(cards, "surprise");
function countDown(i) {
    while (i >= 0){
        console.log(i--)
    }
}