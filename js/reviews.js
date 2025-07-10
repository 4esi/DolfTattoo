const DomItems = {
    ReviewsAll: document.getElementById('ReviewsAll'),
    ReviewsAllCards: document.getElementById('ReviewsAllCards')
}

const reviews = [
    {
        name: 'Anna',
        comment: 'Rendkívül precíz munkát végez, és az ár-érték arány is kiváló.'
    },
    {
        name: 'Gábor',
        comment: 'Megbízható, gyors, és az eredmény mindig szuper minőségű.'
    },
    {
        name: 'Eszter',
        comment: 'Kedvező ár mellett kiemelkedő szakmai hozzáértést tapasztaltam.'
    },
    {
        name: 'Balázs',
        comment: 'Nagyon elégedett vagyok a végeredménnyel, szívesen ajánlom másoknak is.'
    },
    {
        name: 'Zsófia',
        comment: 'Gyors, pontos, és a részletekre is odafigyel - mindez megfizethető áron.'
    },
    {
        name: 'Péter',
        comment: 'Kiváló munkát végzett, mind az ár, mind a minőség szempontjából tökéletes volt.'
    },
    {
        name: 'Réka',
        comment: 'Professzionális hozzáállás, és az árak is barátságosak voltak.'
    },
    {
        name: 'Miklós',
        comment: 'A megbeszéltek szerint dolgozott, határidőre és minőségben is kifogástalanul.'
    },
    {
        name: 'Kata',
        comment: 'Nem bántam meg a választást, egy igazi profi, ráadásul kedvező áron.'
    },
    {
        name: 'Tamás',
        comment: 'Kiváló ár-érték arány, és nagyon elégedett vagyok a munkával.'
    }
];

for(let i = 0;i < reviews.length;i++) {
    const card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `
        <div class="card">
            <p>
                "${reviews[i].comment}"
            </p>
            <p class="name">${reviews[i].name}</p>
        </div>
    `;

    DomItems.ReviewsAllCards.appendChild(card);
    console.log(`most a ${i} elem tölt be`)
}