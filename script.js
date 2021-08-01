const textDisplay = document.getElementById("text");

const phrases = [
  "hello, my name is Jasmine",
  " I love to code",
  " I love to learn",
];

let i = 0;
let j = 0;
let currentPhrase = [];
let isDeleting = false;
let isEnd = false;

function loop() {
  textDisplay.innerHTML = currentPhrase.join("");
  if (i < phrases.length) {
    if (!isDeleting && j <= phrases[i].length) {
      currentPhrase.push(phrases[i][j]);
      j++;
    }
    if (isDeleting && j <= phrases[i].length) {
      currentPhrase.pop(phrases[i][j]);
      j--;
    }
    if (j == phrases[i].length) {
      isDeleting = true;
    }
    if (isDeleting & (j === 0)) {
      currentPhrase = [];
      isDeleting = false;
      i++;
      if (i == phrases.length) {
        i = 0;
      }
    }
  }
  const numberRandom = Math.random() * (80 - 50) + 50;
  const otherNumber = Math.random() * (100 - 80) + 80;
  const time = isEnd ? 2000 : isDeleting ? numberRandom : otherNumber;
  setTimeout(loop, 500);
}

loop();
