
//LET THE JAVASCRIPT COMMENCE


// alert("Hey there friend, Welcome to my website!"); 

// console.log("Hello World")

const navSlide = () => {
    const burger = document.querySelector('.hamsauce');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

    });

    // navLinks.forEach((link, index) => {
       // link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
    // });
}

navSlide();