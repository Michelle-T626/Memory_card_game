const cards = document.querySelectorAll(".card");

function flipCard(e) {
    let clickedCard = e.target; //getting user clicked card
    clickedCard.classList.add("flip");
}

cards.forEach(card => { //adding click event to all cards
    card.addEventListener("click", flipCard);
});

