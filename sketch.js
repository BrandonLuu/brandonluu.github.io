let rectX = 0;
let fr = 30; //starting FPS
var length = 500;
var div = 10;
var offset = length / div;
var DEBUG = 0;
var img;
function setup() {
    background(200);
    frameRate(fr); // Attempt to refresh at starting FPS
    createCanvas(length, length);
    grid(length, offset);
}

function preload() {
    bee = loadImage('bee.jpg');
    daisy = loadImage('daisy.png');
}

// function draw() {
    
// }

function grid(length, div) {
    strokeWeight(2);

    for (let i = 0; i <= length; i += div) {
        for (let j = 0; j <= length; j += div) {
            line(i, j, i + div, j);
            line(i, j, i, j + div);
            if (DEBUG) {
                str = i.toString() + ", " + j.toString();
                fill(0);
                text(str, i, j);
            }
        }
    }
}

function mousePressed() {
    x = getGridPosition(winMouseX, offset);
    y = getGridPosition(winMouseY, offset);
    getRandImg(x, y);

    if (DEBUG) {
        str = x.toString() + ", " + y.toString();
        str2 = winMouseX.toString() + ", " + winMouseY.toString();
        fill(0);
        text(str, winMouseX + 10, winMouseY);
        text(str2, winMouseX + 10, winMouseY + 10);
    }
}

// return number closest to offset
function getGridPosition(x, offset) {
    var whole = x / offset;
    return (whole.toFixed(0)) * offset;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getRandImg(x, y) {
    // Scale / visual center offset for each image
    beeSize = 50;
    beeOffsetScaleX = beeSize * (100 - 2.8) / 100;
    beeOffsetScaleY = beeSize * (100 - 20) / 100;

    daisySize = 70;
    daisyOffsetScaleX = daisySize;
    daisyOffsetScaleY = daisySize * (100 - 4) / 100;

    if (getRandomInt(2)) {
        image(bee, x - beeSize / 2, y - beeSize / 2, beeOffsetScaleX, beeOffsetScaleY);
    } else {
        image(daisy, x - daisySize / 2, y - daisySize / 2, daisyOffsetScaleX, daisyOffsetScaleY);
    }
}