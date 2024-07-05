let stack1 = [],
  stack2 = [],
  stack3 = [];
let stacks = [stack1, stack2, stack3];
let i1, i2, i3, i4;
let high = false,
  w = 0;
let counter = 0;
let s, t, f;

function preload() {
  s = loadSound("assets/jump.mp3");
  t = loadSound("assets/die.mp3");
  f = loadFont("assets/Alien-Encounters-Solid-Bold-Italic.ttf");
}

function setup() {
  createCanvas(800,400);
  i1 = new Item(1, 0, 7);
  i2 = new Item(1, 1, 6);
  i3 = new Item(1, 2, 5);
  i4 = new Item(1, 3, 4);
  i5 = new Item(1, 4, 3);
  i6 = new Item(1, 5, 2);
  i7 = new Item(1, 6, 1);
  print(stack1, stack2, stack3);
  rectMode(CENTER);
  textFont(f);
}

function draw() {
  // print(stacks);
  background('#7E846B');
  textSize(20);
  fill(255);
  textAlign(CENTER, CENTER);
  text('Jumlah gerakan: ' + counter, width - 130, 30);
  if (high && w == 1) {
    fill(140);
  } else {
    fill(255);
  }
  rect(width / 3 - width / 6, height * 2 / 3, 20, height * 2 / 3);
  text('A', width / 3 - width / 6, height * 1 / 4);
  if (high && w == 2) {
    fill(140);
  } else {
    fill(255);
  }
  rect(width * 2 / 3 - width / 6, height * 2 / 3, 20, height * 2 / 3);
  text('B', width * 2 / 3 - width / 6, height * 1 / 4);
  if (high && w == 3) {
    fill(140);
  } else {
    fill(255);
  }
  rect(width - width / 6, height * 2 / 3, 20, height * 2 / 3);
  text('C', width - width / 6, height * 1 / 4);
  for (let every of stacks) {
    for (let all of every) {
      all.display();
      all.update();
    }
  }
  if (stack2.length == 7 || stack3.length == 7) {
    background(0);
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(30);
    text('KAMU BERHASIL!', 250, 200);
    text('Jumlah gerakan: ' + counter, width - 200, 30);

    noLoop();

  }
  if (!high) {
    w = 0;
  }
}

function check(a, b) {
  return stacks[b - 1][stacks[b - 1].length - 1].size > stacks[a - 1][stacks[a - 1].length - 1].size
}

function swap(a, b) {
  if (stacks[a - 1].length !== 0) { // 1 --> 3
    if (stacks[b - 1].length !== 0 && check(a, b)) {
      stacks[b - 1].push(stacks[a - 1].pop());
      return 1;
    } else if (stacks[b - 1].length == 0) {
      stacks[b - 1].push(stacks[a - 1].pop());
      return 1;
    } else {
      return 0;
    }
  }
}

function mousePressed() {
  if (!high) {
    if (mouseX < width / 3) {
      high = true;
      w = 1;
    } else if (mouseX < width * 2 / 3) {
      high = true;
      w = 2;
    } else if (mouseX < width) {
      high = true;
      w = 3;
    }
  } else if (high) {
    let val;
    if (mouseX < width / 3 && w !== 1) {
      high = false;
      val = swap(w, 1);
    } else if (mouseX > width / 3 && mouseX < width * 2 / 3 && w !== 2) {
      high = false;
      val = swap(w, 2);
    } else if (mouseX > width * 2 / 3 && mouseX < width && w !== 3) {
      high = false;
      val = swap(w, 3);
    } else {
      high = false;
    }
    if (val) {
      s.play();
      counter++;
    } else {
      t.play();
    }
  }
}