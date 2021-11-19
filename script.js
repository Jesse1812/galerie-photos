const images = document.querySelectorAll('#galery img');
let imgActive = 0;
for (let i = 1; i < images.length; i++) {
  images[i].classList.add('hidden');
}
document.querySelector('#next').addEventListener('click', function () {
  next();
});
document.querySelector('#prev').addEventListener('click', function () {
  prev();
});

const next = function () {
  images[imgActive].classList.add('hidden');
  imgActive++;
  if (imgActive >= images.length) {
    imgActive = 0;
  }
  images[imgActive].classList.remove('hidden');
};
const prev = function () {
  images[imgActive].classList.add('hidden');
  imgActive--;
  if (imgActive < 0) {
    imgActive = images.length - 1;
  }
  images[imgActive].classList.remove('hidden');
};
let timer;
// play
document.querySelector('#play').addEventListener('click', function () {
  timer = setInterval(next, 2000);
});
// Pause
document.querySelector('#pause').addEventListener('click', function () {
  clearInterval(timer);
});
//Clavier
window.addEventListener('keydown', function (e) {
  if (e.key == 'ArrowRight') {
    next();
  }
  if (e.key == 'ArrowLeft') {
    prev();
  }
});
