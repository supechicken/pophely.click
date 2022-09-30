const normal_img = document.getElementById('normal'),
      dododo_img = document.getElementById('dododo'),
      score_text = document.getElementById('score'),
      dodo_sound = new Audio('media/dododo.wav');

let keydown = false,
    score = 0;

function updateScore () {
  score++;
  score_text.innerText = score;  
}

document.onmousedown = document.onkeydown = () => {
  if ( ! keydown ) { // prevent multiple triggering on single keydown
    dodo_sound.currentTime = 0;
    dodo_sound.play();

    console.log('Key pressed');

    keydown = true;
    updateScore();

    normal_img.style.display = 'none';
    dododo_img.style.display = 'initial';
  }
}

document.onmouseup = document.onkeyup = () => {
  console.log('Key released');
  keydown = false;

  setTimeout(() => {
    normal_img.style.display = 'initial';
    dododo_img.style.display = 'none';
  }, 100)
}