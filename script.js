// Header
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
    if (window.scrollY >= header.offsetTop) {
        header.classList.add("fixed");
    } else {
        header.classList.remove("fixed");
    }
    if (window.scrollY === 0) {
        header.classList.remove("fixed");
    }
});

// Slick slider
$(".autoplay").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
});

$(".autoplay-1").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
});

// / Coundown timer

const countdown = document.querySelector("[data-countdown]");
const targetDate = new Date(countdown.dataset.countdown).getTime();
setInterval(() => {
    const now = new Date().getTime();
    const distance = targetDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    countdown.querySelectorAll(".count")[0].textContent = days
        .toString()
        .padStart(2, "0");
    countdown.querySelectorAll(".count")[1].textContent = hours
        .toString()
        .padStart(2, "0");
    countdown.querySelectorAll(".count")[2].textContent = minutes
        .toString()
        .padStart(2, "0");
    countdown.querySelectorAll(".count")[3].textContent = seconds
        .toString()
        .padStart(2, "0");
}, 1000);
