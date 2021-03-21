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

// || pfзапуск с клавиатуры

function playSoundKey(e) {
  if (notes[event.code] !== undefined) {
    const key = document.querySelector(`.piano-key[data-letter="${event.code.slice(-1)}"]`);
    const audio = new Audio();
    if (!audio) return;
    audio.src = `./assets/audio/${notes[event.code]}.mp3`
    audio.currentTime = 0;
    audio.play();
    key.classList.add('piano-key-active');

    function removeTransition(e) {
      // if (e.propertyName !== 'transform') return; //временно убрал
      this.classList.remove('piano-key-active');
    }
    const keys = document.querySelectorAll('.piano-key');
    keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  }
}
window.addEventListener('keydown', playSoundKey);