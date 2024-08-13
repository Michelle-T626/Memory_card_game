const cards = document.querySelectorAll(".card");

let matchedCard = 0;
let cardOne, cardTwo;
let disableDeck = false;

function flipCard(e) {
    let clickedCard = e.target; //getting user clicked card
    if(clickedCard !== cardOne && !disableDeck) {
        clickedCard.classList.add("flip");
        if(!cardOne) {
            //return the cardOne value to clickedCard
            return cardOne = clickedCard;
        }
        cardTwo = clickedCard;
        disableDeck = true;
        let cardOneImg = cardOne.querySelector("img").src,
        cardTwoImg = cardTwo.querySelector("img").src;
        matchCard(cardOneImg, cardTwoImg);
    }
}

function matchCard(img1, img2) {
    if(img1 === img2) { //if two img matched
        matchedCard++; //if increment matched value by 1
        // if matched value is 8 that means user has matched all the cards (8 * 2 = 16 cards)
        if(matchedCard == 8) {
            return shuffleCard();
        }
        cardOne.removeEventListener("click", flipCard);
        cardTwo.removeEventListener("click", flipCard);
        cardOne = cardTwo = ""; // setting both card value to blank
        return disableDeck = false;
    }
    //if two card not matched
    setTimeout(() => {
        // adding shake class to both card after 400ms
        cardOne.classList.add("shake");
        cardTwo.classList.add("shake");
    }, 400);

    setTimeout(() => {
        // removing both the shake & flip classes from the both card after 1.2 seconds 
        cardOne.classList.remove("shake","flip",);
        cardTwo.classList.remove("shake","flip",);
        cardOne = cardTwo = "";// setting both card value to blank
        disableDeck = false;
    }, 1200);
}

function shuffleCard() {
    matchedCard = 0;
    cardOne = cardTwo = "";
    cards.forEach(card => {
        card.classList.remove("flip");
        card.addEventListener("click", flipCard);
        disableDeck = false;

    });


}

cards.forEach(card => { //adding click event to all cards
    card.addEventListener("click", flipCard);
});
