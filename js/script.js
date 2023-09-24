
const windowHeight = window.innerHeight;
const parallaxLayer = document.getElementById('parallax-layer');
const projectsLeft = document.querySelectorAll('.projectLeft');
const projectsRight = document.querySelectorAll('.projectRight');
const projects_container = document.querySelectorAll('.project_container');
const animates_to_fadein = document.querySelectorAll(".animate_to_fadein");
const animates_to_slide_up = document.querySelectorAll(".animate_to_slide_up");

// Flashlight Handling
function handleFlashlightMovement(e) {
    const flashlight = document.getElementById('flashlight');
    flashlight.style.display = "inline";
    const x = e.clientX;
    const y = e.clientY;
    flashlight.style.left = x + 'px';
    flashlight.style.top = y + 'px';
}

// Animation Handling
function applyAnimation(className, condition, elements) {
    elements.forEach((element) => {
        if (element.getBoundingClientRect().top < windowHeight * 1.2) {
            element.classList.add(className);
        }
    });
}

// Scroll Handling (parallax effect & animations)
function applyAnimationsOnScroll() {
    const scrollY = window.scrollY;

    if (scrollY <= windowHeight) {
        parallaxLayer.style.transform = `translateY(-${scrollY * 0.25}px)`;
    }

    animates_to_slide_up.forEach(animate_to_slide_up => {
        applyAnimation('slide-up', (top, windowHeight) => top < windowHeight, [animate_to_slide_up]);
    });

    animates_to_fadein.forEach(animate_to_fadein => {
        applyAnimation('fade-in', (top, windowHeight) => top < windowHeight, [animate_to_fadein]);
    });

    if (window.innerWidth >= 768) {
        applyAnimation('slide-in-left', (top, windowHeight) => top < windowHeight, projectsLeft);
        applyAnimation('slide-in-right', (top, windowHeight) => top < windowHeight, projectsRight);
    } else {
        applyAnimation('fade-in', (top, windowHeight) => top < windowHeight, projectsLeft);
        applyAnimation('fade-in', (top, windowHeight) => top < windowHeight, projectsRight);
    }
}


// Project_image hover Handling
projects_container.forEach((project) => {
    const project_image = project.querySelector('.project_image');
    const project_tech = project.querySelector('.project_tech');

    project_tech.addEventListener('mouseover', () => {
        project_tech.style.opacity = 1;
        project_image.style.opacity = .2;
    });

    project_image.addEventListener('mouseover', () => {
        project_tech.style.opacity = 1;
        project_image.style.opacity = .2;
    });

    project_image.addEventListener('mouseout', () => {
        project_tech.style.opacity = 0;
        project_image.style.opacity = 1;
    });
});
document.addEventListener('mousemove', handleFlashlightMovement);
window.addEventListener('scroll', applyAnimationsOnScroll);
window.addEventListener('load', applyAnimationsOnScroll);


const hello_there = document.getElementById("hello_there");
let audio = new Audio('src/obi-wan-hello-there.mp3');
audio.volume = 0.05;
hello_there.addEventListener("click", function () {
    audio.play();
});
