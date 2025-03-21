
const tl = gsap.timeline({ paused: true });

function showInfo() {
    revealDescription();

    const showBtn = document.getElementById("measurements");
    showBtn.onclick = function (e) {
        tl.reversed(!tl.reversed());
    }

    const closeBtn = document.getElementById("close");
    closeBtn.onclick = function (e) {
        tl.reversed(!tl.reversed());
    }
}

showInfo();

function revealDescription() {
    tl.to(".product-description", 1, {
        bottom: 0,
        ease: "power2.inOut"
    });

    tl.to(".overlay", 1, {
        opacity: 1,
        ease: "power2.inOut"
    }, "-=1");

    tl.to(".product-hero", 1, {
        bottom: "55vh",
        ease: "power2.inOut"
    }, "-=0.9").reverse();
}









