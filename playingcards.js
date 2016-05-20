//CARD DECK
var CLUB = 0, DIAMOND = 1, HEART = 2, SPADE = 3;
var ACE = 1, JACK = 11, QUEEN = 12, KING = 13;
var RANK = 0, SUIT = 1, IMAGE = 2;

function topOfDeck()
{
	return 0;
}

function bottomOfDeck(deck)
{
	return deck.length - 1;
}

function getNumCards(deck)
{
	return deck.length;
}

function generateStandardDeck()
{
	var deck = new Array();
	
	for (s = CLUB; s <= SPADE; s++)
		for (r = ACE; r <= KING; r++)
		{
			cardStr = r + ";" + s + ";" + r + "-" + s + ".png";
			
			deck.push(cardStr);
		}
		
	return deck;
}

function CardDeck()
{
	this.deck = new Array();
}
function extractCardData(card, dataIdx)
{
	var cardInfo = card.split(";");
	return cardInfo[dataIdx];
}

function removeCard(deck, idx)
{
	var card = deck.splice(idx, 1);
	return card[0];
}

function insertCard(deck, card, idx)
{
	if (!idx)
		idx = topOfDeck();
		
	deck.splice(idx, 0, card);
}

function insertCards(deck, cards, idx)
{
	for (var i = 0; i < cards.length; i++)
		insertCard(deck, cards[i], idx + i);
}

function combineDecks(receiver, giver)
{
	return receiver.concat(giver);
}

function shuffle(deck)
{
	var tmpDeck = new Array();
	while (deck.length > 0)
	{
		cardIdx = parseInt(Math.random() * deck.length);
		card = removeCard(deck, cardIdx);
		tmpDeck.push(card);
	}

	return tmpDeck;
}

function isEmpty(deck)
{
	return deck.length == 0;
}

function dealCard(deck)
{
	return removeCard(deck, topOfDeck());
}