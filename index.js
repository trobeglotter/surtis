let origin = location.href;

function setActiveLink() {
    if (origin.includes('index')) {
        document.querySelector('.nav-a-about').classList.add('active');
    }
    if (origin.includes('projects')) {
        document.querySelector('.nav-a-projects').classList.add('active');
    }
    if (origin.includes('contact')) {
        document.querySelector('.nav-a-contact').classList.add('active');
    }
}
setActiveLink();

function openNav() {
    document.querySelector('.nav-left').classList.add('visible');
    document.querySelector('.open-nav').classList.add('invisible');
}

function closeNav() {
    document.querySelector('.nav-left').classList.remove('visible');
    document.querySelector('.open-nav').classList.remove('invisible');
}

const d = new Date();
let year = d.getFullYear();
document.querySelector("#copyright-date").innerHTML = year;

