// myMove is for the heart animation.
function myMove() {
  let id = null;
  const elem = document.getElementById('animate');
  const elemmirror = document.getElementById('animatemirror');
  let pos = 0;
  let vpos = 0;
  let hpos = 0;
  // let vposmirror = 0;
  let hposmirror = 0;
  let fade = 1;
  clearInterval(id);
  // const w = window.innerWidth;
  const h = window.innerHeight;
  function frame() {
    if (vpos >= h) {
      clearInterval(id);
    } else {
      pos += 1;
      const radians = pos * (Math.PI / 180);
      vpos = pos + 100 * Math.sin(radians);
      hpos = pos + 75 * Math.cos(radians);
      elem.style.top = `-${pos}px`;
      elem.style.left = `${hpos}px`;
      // vposmirror = pos + 100 * Math.cos(radians);
      hposmirror = pos + 75 * Math.sin(radians);
      elemmirror.style.top = `-${pos}px`;
      elemmirror.style.left = `${hposmirror}px`;
      if (vpos >= h * 0.6) {
        elem.style.opacity = fade;
        elemmirror.style.opacity = fade;
        fade -= 0.004;
        if (fade <= 0) {
          fade = 0;
          // hide the element called elem
          elem.style.display = 'none';
          // hide the element called elemmirror
          elemmirror.style.display = 'none';
        }
      }
    }
  }
  id = setInterval(frame, 5);
}

// myMove2 is for the Rocket animation
function myMove2() {
  let id = null;
  const elem = document.getElementById('animate2');
  const elemmirror = document.getElementById('animatemirror2');
  let pos = 0;
  let hpos = 0;
  let vpos = 0;
  let vposmirror = 0;
  let hposmirror = 0;
  clearInterval(id);
  let fade = 1;
  // const w = window.innerWidth;
  const h = window.innerHeight;
  function frame() {
    if (vpos >= h) {
      clearInterval(id);
    } else {
      pos += 1;
      const radians = pos * (Math.PI / 180);
      vpos = pos + 100 * Math.sin(radians);
      hpos = pos + 100 * Math.cos(radians);
      elem.style.top = `-${vpos}px`;
      elem.style.left = `${hpos}px`;
      // vposmirror = pos + 100 * Math.cos(radians);
      vposmirror = (pos ** 1.15) / 2;
      hposmirror = pos + 50 * Math.sin(radians);
      elemmirror.style.top = `-${vposmirror}px`;
      elemmirror.style.left = `${hposmirror}px`;
      if (vpos >= h * 0.6) {
        elem.style.opacity = fade;
        elemmirror.style.opacity = fade;
        fade -= 0.004;
        if (fade <= 0) {
          fade = 0;
          // hide the element called elem
          elem.style.display = 'none';
          // hide the element called elemmirror
          elemmirror.style.display = 'none';
        }
      }
    }
  }
  id = setInterval(frame, 5);
}

// eslint-disable-next-line no-unused-vars
export default function decorate(block) {
  // Create a div to be used with a text
  const floatemojiTextDiv = document.createElement('div');
  floatemojiTextDiv.id = 'floatemojitext';

  // Create some text and nest it in floatemojiTextDiv
  const floatemojitext = document.createTextNode('Click an emoji to react to the page.');
  floatemojiTextDiv.appendChild(floatemojitext);

  // Nest floatemojiTextDiv in the page
  document.body.appendChild(floatemojiTextDiv);

  // This creates a div and gives it an id of "container", this id is referenced in the css file.
  const newDiv = document.createElement('div');
  newDiv.id = 'container';

  // This creates a div and gives it an id of "animate", this id is referenced in the css file.
  const newDiv2 = document.createElement('div');
  newDiv2.id = 'animate';

  // The next commented out lines would have created a button that calls the myMove function.
  // let x = document.createElement('BUTTON');
  // let t = document.createTextNode('Click me');
  //   x.appendChild(t);
  //   document.body.appendChild(x);
  //   x.addEventListener('click', myMove);

  // Assemble the divs.
  // nest new_div2 inside new_div.
  newDiv.appendChild(newDiv2);

  // nest new_div inside the whole page.
  document.body.appendChild(newDiv);

  // Create the large heart emoji and nest it in new_div2.
  // Make it clickable, and on click it calls the myMove function.
  const emoji = document.createTextNode('❤️');
  newDiv2.appendChild(emoji);
  newDiv2.addEventListener('click', myMove);

  // Create new_div3 with an id of animatemirror.  Nest new_div3 inside of new_div.
  // Create the small heart emoji and nest it in new_div3.
  const newDiv3 = document.createElement('div');
  newDiv3.id = 'animatemirror';
  newDiv.appendChild(newDiv3);
  const emojimirror = document.createTextNode('❤️');
  newDiv3.appendChild(emojimirror);

  // Create a div that contains the rocket emojis.
  // This is hard coded in the css to be left 50px of the hearts.
  // There is probably a better way of doing this.
  // It uses "container2" and "animate2" in the css.
  const secondEmojiDiv = document.createElement('div');
  secondEmojiDiv.id = 'container2';
  const secondEmojiDivAnimate = document.createElement('div');
  secondEmojiDivAnimate.id = 'animate2';

  // nest second_emoji_div_animate inside of second_emoji_div.
  secondEmojiDiv.appendChild(secondEmojiDivAnimate);

  // Nest second_emoji_div inside of the page.
  document.body.appendChild(secondEmojiDiv);

  // Create the large rocket emoji.
  // Nest it inside second_emoji_div_animate, and on click it calls the myMove2 function.
  const emoji2 = document.createTextNode('🚀');
  secondEmojiDivAnimate.appendChild(emoji2);
  secondEmojiDivAnimate.addEventListener('click', myMove2);

  // Create a second_emoji_div_animate_mirror div.
  const secondEmojiDivAnimateMirror = document.createElement('div');
  secondEmojiDivAnimateMirror.id = 'animatemirror2';

  // Nest second_emoji_div_animate_mirror inside of second_emoji_div.
  secondEmojiDiv.appendChild(secondEmojiDivAnimateMirror);

  // Create the small rocket emoji and nest it inside of second_emoji_div_animate_mirror.
  const secondemojimirror = document.createTextNode('🚀');
  secondEmojiDivAnimateMirror.appendChild(secondemojimirror);
}
