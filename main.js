/* =========================
   TYPING EFFECT
========================= */

const typed = new Typed(".typing", {

    strings: [
        "AI/ML Engineer",
        "Machine Learning Developer",
        "Deep Learning Enthusiast",
        "Computer Vision Developer"
    ],

    typeSpeed: 80,

    backSpeed: 50,

    backDelay: 1500,

    loop: true

});


/* =========================
   MOBILE MENU
========================= */

const menuIcon = document.getElementById("menu-icon");

const navbar = document.getElementById("navbar");


menuIcon.addEventListener("click", () => {

    navbar.classList.toggle("active");

    const icon = menuIcon.querySelector("i");

    if (navbar.classList.contains("active")) {

        icon.classList.remove("bx-menu");

        icon.classList.add("bx-x");

    } else {

        icon.classList.remove("bx-x");

        icon.classList.add("bx-menu");

    }

});


/* =========================
   CLOSE MOBILE MENU
========================= */

const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");

        const icon = menuIcon.querySelector("i");

        icon.classList.remove("bx-x");

        icon.classList.add("bx-menu");

    });

});


/* =========================
   ACTIVE NAVBAR LINK
========================= */

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            current = section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === "#" + current
        ) {

            link.classList.add("active");

        }

    });

});


/* =========================
   SCROLL REVEAL
========================= */

const revealElements =
    document.querySelectorAll(
        ".section, .home-content, .home-image"
    );


const observer =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        },

        {
            threshold: 0.15
        }

    );


revealElements.forEach(element => {

    observer.observe(element);

});


/* =========================
   CONTACT FORM
========================= */

const contactForm =
    document.getElementById("contact-form");


contactForm.addEventListener("submit", function (event) {

    event.preventDefault();


    const name =
        document.getElementById("name").value;

    const email =
        document.getElementById("email").value;

    const subject =
        document.getElementById("subject").value;

    const message =
        document.getElementById("message").value;


    if (
        name === "" ||
        email === "" ||
        subject === "" ||
        message === ""
    ) {

        alert("Please fill in all fields.");

        return;

    }


    alert(
        "Thank you, " +
        name +
        "! Your message has been received."
    );


    contactForm.reset();

});


/* =========================
   HEADER BACKGROUND
========================= */

window.addEventListener("scroll", () => {

    const header =
        document.querySelector(".header");


    if (window.scrollY > 50) {

        header.style.background =
            "rgba(0, 8, 18, 0.92)";

    } else {

        header.style.background =
            "rgba(0, 0, 0, 0.35)";

    }

});