const DomItems = {
    WorksAll: document.getElementById('WorksAll'),
    WorksAllCards: document.getElementById('WorksAllCards')
}

let works = [];

for(let i = 0;i <= 50;i++) {
    const card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `
        <div class="cardImage">
            <img src="./assets/images/works/${i}.jpg" alt="Work ${i}">
        </div>
    `;

    DomItems.WorksAllCards.appendChild(card);
    console.log(`most a ${i} elem tölt be`)
}