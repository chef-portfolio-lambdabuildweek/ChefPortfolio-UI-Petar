const nav = document.querySelector('.primary-nav');
const wrapper = document.querySelector('.wrapper');
const callToAction = document.querySelector('.call-me');

function stickyNav() {
  if (window.scrollY >= 200) {
    wrapper.style.paddingTop = nav.offsetHeight;
    nav.classList.add('sticky');
    callToAction.style.display = 'block';
  } else {
    wrapper.style.paddingTop = 0;
    nav.classList.remove('sticky');
    callToAction.style.display = 'none';
  }
}

window.addEventListener('scroll', stickyNav);
// const topToNav = nav.offsetTop;


function smoothScroll(param1, duration) {
  const target = document.querySelector(param1);
  const targetPosition = target.getBoundingClientRect().top;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  let startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }


  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t * t + b;
    t -= 2;
    return c / 2 * (t * t * t + 2) + b;
  }


  requestAnimationFrame(animation);
}


const sectionLink = document.querySelector('.section-link');

sectionLink.addEventListener('click', () => {
  smoothScroll('.testimonials', 1000);
});
