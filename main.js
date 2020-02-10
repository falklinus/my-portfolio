const navSlide = () => {
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  hamburger.addEventListener('click', e => {
    nav.classList.toggle('nav-active');

    /*navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = "";
        } else {
          link.style.animation = `navLinkFade 0.3s ease forwards ${index / 10 +
            0.3}s`;
        }
      }); */

    hamburger.classList.toggle('toggle');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (nav.classList.contains('nav-active')) {
        nav.classList.toggle('nav-active');
        navLinks.forEach((link, index) => {
          link.style.animation = '';
        });
        hamburger.classList.toggle('toggle');
      }
    });
  });
};

navSlide();
