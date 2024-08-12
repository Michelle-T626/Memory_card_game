const cards = document.querySelectorAll(".card");

let cardOne, cardTwo;

function flipCard(e) {
    let clickedCard = e.target; //getting user clicked card
    if(clickedCard !== cardOne) {
        clickedCard.classList.add("flip");
        if(!cardOne) {
            //return the cardOne value to clickedCard
            return cardOne = clickedCard;
        }
        cardTwo = clickedCard;

        let cardOneImg = cardOne.querySelector("img").src,
        cardTwoImg = cardTwo.querySelector("img").src;
        matchCards(cardOneImg, cardTwoImg);
    }
}

function matchCards(img1, img2) {
    if(img1 === img2) { //if two img matched
        return console.log("Card matched");
    }
    console.log("Card not matched");
}

cards.forEach(card => { //adding click event to all cards
    card.addEventListener("click", flipCard);
});

//17:40 from tutorial 
