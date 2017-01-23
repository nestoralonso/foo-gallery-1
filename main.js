window.addEventListener('DOMContentLoaded', (e) => {
  let galleryEl = document.querySelector('#gallery');
  let imageList = galleryEl.querySelector('ul');
  let nextButton = galleryEl.querySelector('.next-button');
  let isAnimating = false;
  let cImage = 0;

  function animateMargin(el, targetMargin) {
    isAnimating = true;
    let cMargin = parseInt(el.style.marginLeft) || 0;
    el.style.marginLeft = `${cMargin - 1}px`;
    if (cMargin - 1 <= targetMargin) {
      isAnimating = false;
      cImage++;
      return;
    }
    setTimeout((e) => animateMargin(el, targetMargin), 16);
  }

  nextButton.addEventListener('click', (e) => {
    let targetImg = cImage + 1;
    let targetMargin = targetImg * -320;
    if (!isAnimating) {
      animateMargin(imageList, targetMargin);
    }
  });
});