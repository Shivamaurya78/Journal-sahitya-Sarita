  const hamburger = document.getElementById('hamburger');
        const nav = document.getElementById('nav');
        const overlay = document.getElementById('overlay');

        hamburger.addEventListener('click', () => {
            nav.classList.toggle('active');
            overlay.classList.toggle('active');
        });

        overlay.addEventListener('click', () => {
            nav.classList.remove('active');
            overlay.classList.remove('active');
        });

        // IntersectionObserver for section animations
        const sections = document.querySelectorAll('.section');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0 });

        sections.forEach(section => observer.observe(section));

        // Click micro-interactions on navbar links
        const navLinks = document.querySelectorAll('nav ul li a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                link.classList.add('clicked');
                setTimeout(() => {
                    link.classList.remove('clicked');
                }, 200);
            });
        });
