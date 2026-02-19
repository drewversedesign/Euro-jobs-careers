document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    // Hero Section Animations
    gsap.from("#hero-title", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    });

    gsap.from("#hero-image", {
        x: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.2
    });

    // Trusted By Animation
    gsap.from("#trusted-by div > div", {
        y: 20,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
            trigger: "#trusted-by",
            start: "top 90%",
        }
    });

    // About Section Animation
    gsap.from("#about-images", {
        x: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: "#about",
            start: "top 70%",
        }
    });

    gsap.from("#about-content", {
        x: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: "#about",
            start: "top 70%",
        }
    });

    // Services Grid Animation
    gsap.from(".service-card", {
        y: 50,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
            trigger: "#services-grid",
            start: "top 80%",
        }
    });

    // How It Works Animation
    gsap.from(".step-card", {
        scale: 0.8,
        opacity: 0,
        stagger: 0.3,
        duration: 1,
        ease: "back.out(1.7)",
        scrollTrigger: {
            trigger: "#how-it-works-grid",
            start: "top 80%",
        }
    });

    // Parallax Effect for Badge
    gsap.to(".parallax", {
        y: -30,
        scrollTrigger: {
            trigger: "#hero-image",
            start: "top bottom",
            end: "bottom top",
            scrub: true
        }
    });
});
