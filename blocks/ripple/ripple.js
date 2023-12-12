function jQueryIsReady() {
  // eslint-disable-next-line no-undef
  $('.hero-wrapper').ripples({
    resolution: 512,
    radius: 20,
    perturbance: 0.09,
  });
}

function checkJquery() {
  if (typeof jQuery === 'undefined') {
    return false;
  }
  // eslint-disable-next-line no-use-before-define
  clearTimeout(interval);
  jQueryIsReady();
  return true;
}
const interval = setInterval(checkJquery, 1000);
