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