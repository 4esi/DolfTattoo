const DomItems = {
    WorksAll: document.getElementById('WorksAll'),
    WorksAllCards: document.getElementById('WorksAllCards'),
    carouselPic: document.querySelector('#carouselPic'),
    backPicBtn: document.querySelector('.backPic'),
    forwardPicBtn: document.querySelector('.forwardPic'),
    WorksFile: document.getElementById('WorksFile'),
    close: document.querySelector('.close')

}

openGalery = function(item) {
    currentImgIndex = item;
    WorksFile.classList.remove('hidden');
    DomItems.carouselPic.src = `${imagePath}${item}.jpg`;
}

const imageIndex = [null];

for(let i = 0;i <= 50;i++) {
    const card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `
        <div class="cardImage">
            <img src="./assets/images/works/${i}.jpg" alt="Work ${i}">
        </div>
    `;
    imageIndex[i] = i;

    DomItems.WorksAllCards.appendChild(card);
    console.log(`most a ${i}. elem került a tömb ${imageIndex[i]}. helyére`);
    card.addEventListener('click', () => openGalery(i))

    
}

//Carousel function implement

let currentImgIndex = 0;
const imagePath = './assets/images/works/';
DomItems.carouselPic.src = `${imagePath}${currentImgIndex}.jpg`;

if(DomItems.forwardPicBtn) {
    DomItems.forwardPicBtn.addEventListener('click', () => {
        if(currentImgIndex < 50) {
            currentImgIndex += 1;
            DomItems.carouselPic.src = `${imagePath}${currentImgIndex}.jpg`;
        } else {
            DomItems.forwardPicBtn.style.outline = '3px solid red';
            setTimeout(() => {
                DomItems.forwardPicBtn.style.outline = '1px solid var(--fontColor)';
            }, 180)
        }
        
    })
}

if(DomItems.backPicBtn) {
    DomItems.backPicBtn.addEventListener('click', () => {
        if(currentImgIndex > 0) {
            currentImgIndex -= 1;
            DomItems.carouselPic.src = `${imagePath}${currentImgIndex}.jpg`;
        } else {
            DomItems.backPicBtn.style.outline = '3px solid red';
            setTimeout(() => {
                DomItems.backPicBtn.style.outline = '1px solid var(--fontColor)';
            }, 180)
        }
        
    })
}

if(DomItems.close) {
    DomItems.close.addEventListener('click', () => {
        WorksFile.classList.add('hidden');
    })
}