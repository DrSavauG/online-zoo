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
const piano = document.querySelector('.piano');

//#region Кнопка FullSCreen
const fullScreen = document.querySelector('.fullScreen')|| document.querySelector('.openfullscreen');
fullScreen.addEventListener('click', (e) => {
  document.fullscreenElement? document.exitFullscreen():  document.documentElement.requestFullscreen() ;
})
//#endregion

function playAudio(src) {
  const audio = new Audio();
  audio.src = src;
  audio.currentTime = 0;
  audio.play();
}

piano.addEventListener('mousedown', (event) => {
  if (event.target.classList.contains('piano-key')) {
    const note = event.target.dataset.note;
    const src = `assets/audio/${note}.mp3`;
    playAudio(src);
  }
});

  // ! c мышки пригажатии не происходи изменение цвета букв и нажатия клавиши

  const keys = document.querySelectorAll('.piano-key');
//#region запуск с клавиатуры

function playSoundKey(e) {
  if (notes[event.code] !== undefined) {
    const key = document.querySelector(`.piano-key[data-letter="${event.code.slice(-1)}"]`);
    // const audio = new Audio();
    // if (!audio) return;
    const src = `./assets/audio/${notes[event.code]}.mp3`;
    playAudio(src);

    // audio.currentTime = 0;
    // audio.play();
    key.classList.add('piano-key-active');

    function removeTransition(e) {
      // if (e.propertyName !== 'transform') return; //временно убрал
      this.classList.remove('piano-key-active');
    }
    keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  }
}
window.addEventListener('keydown', playSoundKey);
//#endregion

//#region kнопки NOtes и Letters
const notesButton = document.querySelector('.btn-notes');
const lettersButton = document.querySelector('.btn-letters');

notesButton.addEventListener('click',(e) =>{
  lettersButton.classList.remove('btn-active');
  notesButton.classList.add('btn-active');
  keys.forEach(key => key.classList.remove('piano-key-letter'))
});


lettersButton.addEventListener('click',(e) =>{
  lettersButton.classList.add('btn-active');
  notesButton.classList.remove('btn-active');
  keys.forEach(key => key.classList.add('piano-key-letter'))
});
//#endregion