// A function that takes a hexidecimal color and returns the red, green, and blue values as an array
function hexToRgb(hexp) {
  let hex = hexp;
  // Remove the hash if it exists
  hex = hex.replace('#', '');
  // remove whitespace if it exists
  hex = hex.replace(' ', '');
  // Check if color is shorthand hex
  if (hex.length === 3) {
    // Double the characters
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }
  // Calculate r, g, and b values
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  return [r, g, b];
}

// A function that converts rgb values to hexidecimal color
function rgbToHex(r, g, b) {
  // Convert r, g, b values to hexidecimal
  // eslint-disable-next-line no-bitwise
  const bin = (r << 16) | (g << 8) | b;
  // Convert hexidecimal to string
  return (function (h) {
    return new Array(7 - h.length).join('0') + h;
  }(bin.toString(16).toUpperCase()));
}

// Wrapper function for the shiftColor function
function shiftColorWrapper() {
  let id = null;
  // increment the r, g, and b values by 1 until they reach the maxShift value
  function shiftColor() {
    // Set the maxium value that r, b or g can shift by 50
    const maxShift = 50;
    // get the value for the css variable --highlight-background-color
    const color = getComputedStyle(document.documentElement).getPropertyValue('--highlight-background-color');
    // Convert the color to rgb
    const rgb = hexToRgb(color);
    // write rgb to the console
    // console.log(rgb);
    // Save the original rgb values
    const original = rgb;
    // Increment the r, g, and b values by 1
    rgb[0] += 1;
    rgb[1] += 1;
    rgb[2] += 1;
    // if r, g, or b is equal to or greater than 255, set it to 255
    if (rgb[0] >= 255) {
      rgb[0] = 255;
      // clear the interval id
      clearInterval(id);
    }
    if (rgb[1] >= 255) {
      rgb[1] = 255;
      // clear the interval id
      clearInterval(id);
    }
    if (rgb[2] >= 255) {
      rgb[2] = 255;
      // clear the interval id
      clearInterval(id);
    }
    // if r, g, or b is equal to or greater than original + maxShift, set it to original + maxShift
    if (rgb[0] >= original[0] + maxShift) {
      rgb[0] = original[0] + maxShift;
      // clear the interval id
      clearInterval(id);
    }
    if (rgb[1] >= original[1] + maxShift) {
      rgb[1] = original[1] + maxShift;
      // clear the interval id
      clearInterval(id);
    }
    if (rgb[2] >= original[2] + maxShift) {
      rgb[2] = original[2] + maxShift;
      // clear the interval id
      clearInterval(id);
    }
    // Convert the rgb values back to hexidecimal
    let newhex = rgbToHex(rgb[0], rgb[1], rgb[2]);
    // add # to the beginning of the hexidecimal newhex
    newhex = `#${newhex}`;
    // Set the css variable --highlight-background-color to the new color
    document.documentElement.style.setProperty('--highlight-background-color', newhex);
  }
  // Call the shiftColor function every 500 milliseconds and set it to the const id
  id = setInterval(shiftColor, 500);
}
shiftColorWrapper();
