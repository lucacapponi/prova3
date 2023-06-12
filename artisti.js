// JS DELLA TOP 10
const carousel = document.querySelector(".carousel")
const arrowBtns = document.querySelectorAll(".wrapper svg")
const firstCardWidth = carousel.querySelector(".card").offsetWidth


let isDragging = false, startX, startScrollLeft

let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);


arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;
    })
});

const dragStart = (e) => {
    isDragging = true;
    carousel.classlist.add("dragging");
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if(!isDragging) return; 
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () => {
    isDragging = false;
    carousel.classlist.remove("dragging");
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);


//JS DELLA NEWSLETTER 
$("#contactForm").submit(function(event){ 
    event.preventDefault();
    submitForm();
});



