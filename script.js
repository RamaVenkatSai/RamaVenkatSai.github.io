// add class navbarDark on navbar scroll
let text = 'Hey, I am Venkat Sai Rama\u{1F91D}'; 
let i = 0;
let speed = 100; 
let typewriterSound = document.getElementById("typewriter_sound");

function typeWriter() {
  if (i < text.length) {
    document.getElementById("hero_title").innerHTML += text.charAt(i);
    typewriterSound.play();
    i++;
    setTimeout(typeWriter, speed);
  } else {
    document.getElementById("hero_desc").style.opacity = "1";
  }
}
typeWriter();

const header = document.querySelector('.navbar');
console.log(header)
window.onscroll = function() {
    const top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}
// collapse navbar after click on small devices
const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarSupportedContent')

navLinks.forEach((l) => {
    l.addEventListener('click', () => { new bootstrap.Collapse(menuToggle).toggle() })
})
