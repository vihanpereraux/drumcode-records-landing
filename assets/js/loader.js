gsap.to(document.getElementsByClassName('left-block')[0], {
    duration: 1.7,
    left: '-50%',
    ease: "power1.inOut",
    delay: 1,
});

gsap.to(document.getElementsByClassName('right-block')[0], {
    duration: 1.7,
    right: '-50%',
    ease: "power1.inOut",
    delay: 1,
});