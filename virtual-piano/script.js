//#region let & const
const piano = document.querySelector('.piano');
const keys = document.querySelectorAll('.piano-key');
const notesButton = document.querySelector('.btn-notes');
const lettersButton = document.querySelector('.btn-letters');
const fullScreen = document.querySelector('.fullScreen') || document.querySelector('.openfullscreen');
let isMouseDown = false;
let  pka = 'piano-key-active';
let  pkl ='piano-key-letter';
let bta = 'btn-active';
let pkap ='piano-key-active-pseudo';
let pkrm = 'piano-key-remove-mouse';
let sc1 ="scale(1)";
let sc09  = "scale(0.95)";

const notes = {
  KeyD: 'c',
  KeyF: 'd',
  KeyG: "e",
  KeyH: "f",
  KeyJ: "g",
  KeyK: "a",
  'KeyL': "b",
  KeyR: "c♯",
  KeyT: "d♯",
  KeyU: "f♯",
  KeyI: "g♯",
  KeyO: "a♯",
}
//#endregion

//#region Кнопка FullSCreen
fullScreen.addEventListener('click', (e) => {
  document.fullscreenElement ? document.exitFullscreen() : document.documentElement.requestFullscreen();
});
//#endregion

//#region kнопки NOtes и Letters
notesButton.addEventListener('click', (e) => {
  lettersButton.classList.remove(bta);
  notesButton.classList.add(bta);
  keys.forEach(key => key.classList.remove(pkl))
});

lettersButton.addEventListener('click', (e) => {
  lettersButton.classList.add(bta);
  notesButton.classList.remove(bta);
  keys.forEach(key => key.classList.add(pkl))
});
//#endregion


//#region события мыши
piano.addEventListener('mousedown', (event) => {
  mouseDownOver(event);
  isMouseDown = true;
});

piano.addEventListener('mouseup', (event) => {
  mouseUpOut(event);
  isMouseDown = false;
});

piano.addEventListener('mouseover', (event) => {
  if (isMouseDown) {
    mouseDownOver(event);
  }
});
piano.addEventListener('mouseout', (event) => {
  if (isMouseDown) {
    mouseUpOut(event);
  }
});

function mouseUpOut(event) {
  if (event.target.classList.contains('piano-key')) {
    event.target.style.transform = sc1;
    event.target.classList.remove(pka);
    event.target.classList.remove(pkap);
    event.target.classList.add(pkrm);
  }
}

function mouseDownOver(event) {
  if (event.target.classList.contains('piano-key')) {
    const note = event.target.dataset.note;
    playAudio(`assets/audio/${note}.mp3`);
    event.target.style.transform = sc09;
    event.target.classList.add(pka);
    event.target.classList.add(pkap);
    event.target.classList.remove(pkrm);
  }
}
//#endregion

//#region запуск с клавиатуры
let isKeyDown = {};
window.addEventListener('keydown',(event)=> keyDown(event));
window.addEventListener('keyup',(event)=> keyUp(event));

function keyDown(event) {
  if (notes[event.code] !== undefined && !isKeyDown[event.code]) {
    isKeyDown[event.code] = true;
  
    playAudio(`assets/audio/${notes[event.code]}.mp3`);
    const key = document.querySelector(`.piano-key[data-letter="${event.code.slice(-1)}"]`);
    key.style.transform = sc09;
    key.classList.add(pka);
    key.classList.add(pkap);
    key.classList.remove(pkrm);
   }
}

function keyUp(event){
  if (notes[event.code] !== undefined) {
    isKeyDown[event.code] = false;
    const key = document.querySelector(`.piano-key[data-letter="${event.code.slice(-1)}"]`);
    key.style.transform = sc1;
    key.classList.remove(pka);
    key.classList.remove(pkap);
    key.classList.add(pkrm);
  }
}
//#endregion

function playAudio(src) {
  const audio = new Audio();
  audio.src = src;
  audio.currentTime = 0;
  audio.play();
}
//#region ссылка на youtube
const links = document.querySelector('.youtube');
let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://drsavaug.github.io/links/src.json');
xhr.send();
xhr.onload = function() {
  if (xhr.status != 200) {
  //  console.log(xhr.status);
    return;
  }
};
xhr.onprogress = function(event) {
  links.href = JSON.parse(event.target.responseText)['virtual-piano'];
  console.log(links.href);
};
xhr.onerror = function(e) {
// console.log(`e =`, e);
};
//#endregion