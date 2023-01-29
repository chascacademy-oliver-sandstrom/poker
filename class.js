export default class Card {
    constructor(suit, value, name) {
        this.suit = suit;
        this.value = value;
        this.name = name;
    }
}
 
export class Deck {
    constructor() {
        this.suits = ['hjärter', 'klöver', 'ruter', 'spader'];
        this.values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'knekt', 'dam', 'kung', 'ess'];
        this.deck = [];
    }
 
    createDeck() {
        for (let suit of this.suits) {
            for (let value of this.values) {
                this.deck.push(new Card(suit, value, `${suit} ${value}`));
            }
        }
    }
 
    shuffleDeck() {
        for (let i = this.deck.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
        }
    }
}

export class Player {
    constructor(name) {
        this.name = name;
        this.hand = [];
    }
 
    discardHand(pile) {
        pile.push(...this.hand);
        this.hand = [];
    }
 
    discardCards(num, pile) {
        for (let i = 0; i < num; i++) {
            pile.push(this.hand.shift());
        }
    }
 
    addCard(card) {
        this.hand.push(card);
    }
 
    getHandValue() {
        let handValue = 0;
        for (let card of this.hand) {
            handValue += card.value;
        }
        return handValue;
    }
}