import { bird } from './data.js';


const audio = document.getElementById('audio');
const template = document.getElementById('template');
const birdList = document.getElementById('bird-list');

// loop the array
for (let character of bird) {
    // for each character:
    // make a copy of the template
  const copy = template.content.cloneNode(true);
  // find the h2, img, and button elements
  const header = copy.querySelector('h2');
  const image = copy.querySelector('img');
  const button = copy.querySelector('button');
  // set the h2.textContent and img.src
  header.textContent = ("your friend, the " + character.name);
  image.src = character.image;

  // subscribe to button click
  button.addEventListener('click', () => {
    audio.src = character.audio;
    audio.play();
  });

// add (append) the copy to the list (ul)
  birdList.appendChild(copy);




// const sparrowHorn = document.getElementById('sparrow-horn');
// sparrowHorn.addEventListener('click', () => {
//   audio.src = 'assets/sounds/sparrow horn.wav';
//   audio.play();
// });
// const cockatooHorn = document.getElementById('cockatoo-horn');
// cockatooHorn.addEventListener('click', () => {
//   audio.src = 'assets/sounds/cockatoo horn.wav';
//   audio.play();
// });
// const ostritchHorn = document.getElementById('ostritch-horn');
// ostritchHorn.addEventListener('click', () => {
//   audio.src = 'assets/sounds/ostritch horn.wav';
//   audio.play();
// });
// const pigeonHorn = document.getElementById('pigeon-horn');
// pigeonHorn.addEventListener('click', () => {
//   audio.src = 'assets/sounds/pigeon horn.mp3';
//   audio.play();
// });
}