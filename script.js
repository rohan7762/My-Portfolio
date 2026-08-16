$(document).ready(function () {

    // Mobile menu
    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    // Scroll events
    $(window).on('scroll load', function () {

        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        // Scroll to top button
        if (window.scrollY > 60) {
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }

        // Scroll spy
        $('section').each(function () {

            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let top = $(window).scrollTop();
            let id = $(this).attr('id');

            if (top > offset && top < offset + height) {
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }

        });

    });


    // Smooth scrolling
    $('a[href*="#"]').on('click', function (e) {

        e.preventDefault();

        let target = $(this).attr('href');

        if ($(target).length) {
            $('html, body').animate({
                scrollTop: $(target).offset().top,
            }, 500, 'linear');
        }

    });


    // Contact form
// Contact form
$("#contact-form").submit(function (event) {

    event.preventDefault();

    if (typeof emailjs === "undefined") {
        alert("Contact form is currently unavailable. Please contact me through LinkedIn or email.");
        return;
    }

    emailjs.init({
        publicKey: "GaMcPwYDfgLwELBK3"
    });

    emailjs.sendForm(
        "portfolio_contact",
        "template_43s1twf",
        "#contact-form"
    )
    .then(function (response) {

        console.log("SUCCESS!", response.status, response.text);

        document.getElementById("contact-form").reset();

        alert("Message sent successfully!");

    })
    .catch(function (error) {

        console.log("FAILED...", error);

        alert("Message could not be sent. Please try again later.");

    });

});


// Change page title when visitor leaves/returns
document.addEventListener('visibilitychange', function () {

    if (document.visibilityState === "visible") {

        document.title = "Portfolio | Rohan Paheli";

        $("#favicon").attr(
            "href",
            "assets/images/favicon.png"
        );

    } else {

        document.title = "Come Back To Portfolio";

        $("#favicon").attr(
            "href",
            "assets/images/favhand.png"
        );

    }

});


// Typed.js effect
var typed = new Typed(".typing-text", {

    strings: [
        "full-stack web development",
        "React development",
        "Node.js development",
        "web applications"
    ],

    loop: true,
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 500,

});


// Vanilla Tilt effect
VanillaTilt.init(
    document.querySelectorAll(".tilt"),
    {
        max: 15,
    }
);


// Scroll Reveal animations
const srtop = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true
});


// HOME
srtop.reveal('.home .content h2', {
    delay: 200
});

srtop.reveal('.home .content p', {
    delay: 200
});

srtop.reveal('.home .content .btn', {
    delay: 200
});

srtop.reveal('.home .image', {
    delay: 400
});

srtop.reveal('.home .linkedin', {
    interval: 600
});

srtop.reveal('.home .github', {
    interval: 800
});


// ABOUT
srtop.reveal('.about .content h3', {
    delay: 200
});

srtop.reveal('.about .content .tag', {
    delay: 200
});

srtop.reveal('.about .content p', {
    delay: 200
});

srtop.reveal('.about .content .box-container', {
    delay: 200
});

srtop.reveal('.about .content .resumebtn', {
    delay: 200
});


// SKILLS
srtop.reveal('.skills .container', {
    interval: 200
});

srtop.reveal('.skills .container .bar', {
    delay: 400
});


// EDUCATION
srtop.reveal('.education .box', {
    interval: 200
});


// PROJECTS
srtop.reveal('.work .box', {
    interval: 200
});


// EXPERIENCE
srtop.reveal('.experience .timeline', {
    delay: 400
});

srtop.reveal('.experience .timeline .container', {
    interval: 400
});


// CONTACT
srtop.reveal('.contact .container', {
    delay: 400
});

srtop.reveal('.contact .container .form-group', {
    delay: 400
});
