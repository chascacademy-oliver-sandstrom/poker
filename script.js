import Card, {Deck, Player} from './class.js'
 
let discardPile = [];
const myDeck = new Deck();
myDeck.createDeck();
myDeck.shuffleDeck();
console.log("Kortleken: " + myDeck.deck.length);
myDeck.deck.forEach(card => console.log(`${card.suit} ${card.value}`)); 
 
const slim = new Player("Slim");
const luke = new Player("Luke");
console.log(slim, luke);
 
for (let i = 0; i < 5; i++) {
    slim.addCard(myDeck.deck.shift());
    luke.addCard(myDeck.deck.shift());
}
console.log(myDeck.deck);
console.log(slim.hand, luke.hand);
console.log(`Slims handvärde: ${slim.getHandValue()}`);
console.log(`Luke handvärde: ${luke.getHandValue()}`);
 
slim.discardCards(2, discardPile);
luke.discardCards(2, discardPile);
 
for (let i = 0; i < 2; i++) {
    slim.addCard(myDeck.deck.shift());
    luke.addCard(myDeck.deck.shift());
}
 
console.log(myDeck.deck);
console.log(slim.hand, luke.hand);
console.log(`Slims handvärde: ${slim.getHandValue()}`);
console.log(`Luke handvärde: ${luke.getHandValue()}`);
 
slim.discardHand(discardPile);
luke.discardHand(discardPile);
 
console.log("Kasthögen: ");

 
myDeck.deck = myDeck.deck.concat(discardPile);
console.log(myDeck.deck);
 
console.log("Startar om spelet");


myDeck.shuffleDeck();
console.log(myDeck.deck);
