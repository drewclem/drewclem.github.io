

const item = document.querySelectorAll('.fade-in');

function checkSlide(e) {
    item.forEach(slideImage => {
        const slideInAt = (window.scrollY + window.innerHeight);
        console.log(slideInAt);
    })
}

window.addEventListener('scroll', checkSlide);