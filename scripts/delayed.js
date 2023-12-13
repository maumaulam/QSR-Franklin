// eslint-disable-next-line import/no-cycle
import { sampleRUM } from './lib-franklin.js';

// Core Web Vitals RUM collection
sampleRUM('cwv');

// add more delayed functionality here

function jQueryIsReady() {
  // eslint-disable-next-line no-undef
  $('body').ripples({
    resolution: 1024,
    dropRadius: 20,
    perturbance: 0.1,
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
