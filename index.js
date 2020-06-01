// Your code here
const dodger = document.getElementById('dodger');
document.addEventListener('keydown', e => {
  if (e.key === 'ArrowLeft') {
    moveDodgerLeft(e.key);
  } else if (e.key === 'ArrowRight') {
    moveDodgerRight(e.key);
  }
});

function moveDodgerLeft(key) {
  const leftNumbers = dodger.style.left.replace('px', '');
  const left = parseInt(leftNumbers, 10);
  if (left > 0) {
    dodger.style.left = `${left - 10}px`;
  }
}
function moveDodgerRight(key) {
  const leftNumbers = dodger.style.left.replace('px', '');
  const left = parseInt(leftNumbers, 10);
  if (left < 360) {
    dodger.style.left = `${left + 10}px`;
  }
}
