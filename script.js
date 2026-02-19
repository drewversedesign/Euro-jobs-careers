document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    // Custom Cursor
    const cursor = document.getElementById('cursor');
    window.addEventListener('mousemove', (e) => {
        gsap.to(cursor, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.3,
            ease: 'power2.out'
        });
    });

    // Kinetic Typography
    const lines = document.querySelectorAll('.kinetic-line');
    lines.forEach(line => {
        const text = line.textContent;
        line.innerHTML = '';
        text.split('').forEach(char => {
            const span = document.createElement('span');
            span.textContent = char === ' ' ? '\u00A0' : char;
            span.className = 'char';
            line.appendChild(span);
        });

        const chars = line.querySelectorAll('.char');
        gsap.from(chars, {
            y: 100,
            opacity: 0,
            rotateX: -90,
            stagger: 0.05,
            duration: 1,
            ease: 'power4.out',
            scrollTrigger: {
                trigger: line,
                start: 'top 80%',
            }
        });

        gsap.to(chars, {
            scrollTrigger: {
                trigger: line,
                start: 'top top',
                end: 'bottom top',
                scrub: 1,
            },
            y: -50,
            opacity: 0.3,
            stagger: 0.02,
        });
    });

    // Path SVG Animation
    const paths = document.querySelectorAll('#path-svg path');
    paths.forEach(path => {
        const length = path.getTotalLength();
        gsap.set(path, {
            strokeDasharray: length,
            strokeDashoffset: length
        });
        gsap.to(path, {
            strokeDashoffset: 0,
            scrollTrigger: {
                trigger: path,
                start: 'top 80%',
                end: 'bottom 20%',
                scrub: 1,
            }
        });
    });

    // Horizontal Scroll for Jobs
    const scrollContainer = document.getElementById('scroll-container');
    const jobCards = document.querySelectorAll('.job-card');

    gsap.to(jobCards, {
        x: () => -(scrollContainer.scrollWidth - window.innerWidth + 48), // 48 is for padding
        ease: 'none',
        scrollTrigger: {
            trigger: "#jobs",
            start: "top top",
            end: () => "+=" + (scrollContainer.scrollWidth),
            scrub: 1,
            pin: true,
            anticipatePin: 1,
        }
    });

    // Stats Counter
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        gsap.to(counter, {
            innerText: target,
            duration: 2,
            snap: { innerText: 1 },
            scrollTrigger: {
                trigger: counter,
                start: 'top 90%',
            }
        });
    });

    // Parallax
    gsap.utils.toArray('.parallax').forEach(element => {
        gsap.to(element, {
            y: -100,
            scrollTrigger: {
                trigger: element,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true
            }
        });
    });
});
