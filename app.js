import { bird } from './data.js';

console.log(bird)
const audio = document.getElementById('audio');

const sparrowHorn = document.getElementById('sparrow-horn');
sparrowHorn.addEventListener('click', () => {
  audio.src = 'assets/sounds/sparrow horn.wav';
  audio.play();
});
const cockatooHorn = document.getElementById('cockatoo-horn');
cockatooHorn.addEventListener('click', () => {
  audio.src = 'assets/sounds/cockatoo horn.wav';
  audio.play();
});
const ostritchHorn = document.getElementById('ostritch-horn');
ostritchHorn.addEventListener('click', () => {
  audio.src = 'assets/sounds/ostritch horn.wav';
  audio.play();
});
const pigeonHorn = document.getElementById('pigeon-horn');
pigeonHorn.addEventListener('click', () => {
  audio.src = 'assets/sounds/pigeon horn.mp3';
  audio.play();
});


