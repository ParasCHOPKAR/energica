const text = document.querySelector("h1");
const birds = document.querySelector(".birds");
const land = document.querySelector(".land");


window.addEventListener("scroll", () => {
    
    
    let scroll = window.scrollY;

    text.style.marginTop = scroll * 0.7 + 'px';
    birds.style.left = scroll * 1.5 + 'px';
    land.style.top = scroll * 1.2 + 'px';

})