'use strict';
game.createHand = function () {
	var that = {},
		cards = [],
		numberOfAces = 0,
		totalValue = 0;

	that.getTotalValue = function () {
		return totalValue;
	};

	that.getCardValue = function (cardObject) {
		var card = cardObject.id;
		var cardValue = 0;
		if (isNaN(Number(card[0]))) {
			if (card[0] === 'A') { // The card is an A.
				cardValue = 11;
			} else { // The card is either a T, J, Q, K
				cardValue = 10;
			}
		} else { // If 2, 3, 4, 5, 6, 7, 8, 9
			cardValue = Number(card[0]);
		}
		return cardValue;
	};

	that.getCards = function () {
		return cards;
	};

	that.getCardString = function () {
		var cardString = '| ';

		// Add the hands card to playerCards
		for (var i = 0; i < cards.length; i++) {
			cardString += cards[i] + ' | ';
		}
		return cardString;
	};

	that.addCard = function (card) {
		var cardValue = that.getCardValue(card);
		cards.push(card);
		totalValue += cardValue;

		if (cardValue === 11) { // If the card that was added is an ace
			numberOfAces++;
		}
		if (totalValue > 21) { // If the value of the hand is over 21
			if (numberOfAces > 0) { // and there are aces in the hand
				totalValue -= 10; // change the value of an ace to 1
				numberOfAces--;
			}
		}
	};

	return that;
};