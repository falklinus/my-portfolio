const navSlide = () => {
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  hamburger.addEventListener('click', e => {
    nav.classList.toggle('nav-active');

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 20 +
          0.4}s`;
      }
    });

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

let sidenavItems = document.querySelectorAll('.sidenav li');

sidenavItems.forEach(li => {
  li.addEventListener('click', () => {
    clearIcons();
    let icon = li.querySelector('i');
    icon.classList.add('fas');
    let scrollTarget = li.getAttribute('name');
    if (scrollTarget === 'start') {
      window.scrollTo({ top: 0 });
    } else {
      let scrollElmnt = document.querySelector(`#${scrollTarget}`);
      scrollElmnt.scrollIntoView();
    }
  });
});

function clearIcons() {
  sidenavItems.forEach(li => {
    let icon = li.querySelector('i');
    icon.classList.remove('fas');
    icon.classList.add('far');
  });
}

/* let cursor = document.querySelector('#cursor');

window.addEventListener('mousemove', moveCursor);

function moveCursor(e) {
  console.log(cursor);
  cursor.style.top = `${e.pageY}px`;
  cursor.style.left = `${e.pageX}px`;
  console.log(e);
} */
