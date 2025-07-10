
//Dom Items

const DomItems = {
    nav: document.querySelector('nav'),
    navBtn: document.querySelector('.navBtn'),
    formPopUp: document.querySelector('#Form'),
    form: document.querySelector('form'),
    messageBtn: document.querySelector('.messageBtn'),
    closeBtn: document.querySelector('.closeBtn'),
    carouselPic: document.querySelector('#carouselPic'),
    backPicBtn: document.querySelector('.backPic'),
    forwardPicBtn: document.querySelector('.forwardPic'),
    WorksAllBtn: document.getElementById('WorksAllBtn')
}

//Window resize monitoring

function checkScreenSize() {
    if(window.innerWidth <= 992) {
        DomItems.nav.classList.add('hidden');
        DomItems.navBtn.classList.remove('hidden');
    } else {
        DomItems.nav.classList.remove('hidden');
        DomItems.navBtn.classList.add('hidden');
    }
}

window.addEventListener('resize', checkScreenSize);
window.addEventListener('DOMContentLoaded', checkScreenSize);

//NavBtn open and close function

if(DomItems.navBtn) {
    DomItems.navBtn.addEventListener('click', () => {
        DomItems.nav.classList.toggle('hidden');
    })
}

//FormBtn open and close function

if(DomItems.messageBtn) {
    DomItems.messageBtn.addEventListener('click', () => {
        DomItems.formPopUp.classList.remove('hidden');
    })
}

if(DomItems.closeBtn) {
    DomItems.closeBtn.addEventListener('click', () => {
        DomItems.formPopUp.classList.add('hidden');
        DomItems.form.reset();
    })
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

//Animation

window.addEventListener('scroll', () => {
    if(window.scrollY > 0) {
    DomItems.nav.classList.add('navAnimOpen');
    DomItems.nav.classList.remove('navAnimClose');
} else {
    DomItems.nav.classList.remove('navAnimOpen');
    DomItems.nav.classList.add('navAnimClose');
}
})

//

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('leftAnim');
        } else {
            entry.target.classList.remove('leftAnim'); // ha szeretnéd eltűntetni, amikor kimegy
        }
    })   
});

const sections = document.querySelectorAll('.sectionToObserve');
sections.forEach(section => observer.observe(section));


const observer1 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('opacityAnim');
        } else {
            entry.target.classList.remove('opacityAnim'); // ha szeretnéd eltűntetni, amikor kimegy
        }
    })   
});

const sections1 = document.querySelectorAll('.sectionToObserve1');
sections1.forEach(section => observer1.observe(section));