// Your code here
const { expect } = require('chai');
const { JSDOM } = require('jsdom');
const { moveDodgerLeft, moveDodgerRight } = require('./index'); // Import the functions to test

describe('moveDodgerLeft()', () => {
  let document, window;

  beforeEach(() => {
    const { window: jsdomWindow } = new JSDOM(`
      <!DOCTYPE html>
      <html>
        <head></head>
        <body>
          <div id="dodger" style="left: 180px;"></div>
        </body>
      </html>
    `);

    document = jsdomWindow.document;
    window = jsdomWindow;
    global.document = document;
    global.window = window;

    dodger = document.getElementById('dodger');
  });

  it('moves the DODGER to the left', () => {
    const left = dodger.style.left;
    const currentPosition = parseInt(left);

    moveDodgerLeft();

    const newPosition = parseInt(dodger.style.left);

    expect(newPosition).to.be.below(currentPosition);
  });
});

describe('moveDodgerRight()', () => {
  let document, window;

  beforeEach(() => {
    const { window: jsdomWindow } = new JSDOM(`
      <!DOCTYPE html>
      <html>
        <head></head>
        <body>
          <div id="dodger" style="left: 180px;"></div>
        </body>
      </html>
    `);

    document = jsdomWindow.document;
    window = jsdomWindow;
    global.document = document;
    global.window = window;

    dodger = document.getElementById('dodger');
  });

  it('moves the DODGER to the right', () => {
    const left = dodger.style.left;
    const currentPosition = parseInt(left);

    moveDodgerRight();

    const newPosition = parseInt(dodger.style.left);

    expect(newPosition).to.be.above(currentPosition);
  });
});
