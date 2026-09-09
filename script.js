// Motion is decorative: the full page remains usable without JavaScript.
const motionButton = document.querySelector('#motion-toggle');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
let userPaused = false;
function updateMotion() {
  const paused = userPaused || reducedMotion.matches;
  document.documentElement.classList.toggle('motion-paused', paused);
  motionButton.hidden = reducedMotion.matches;
  motionButton.setAttribute('aria-pressed', String(paused));
  motionButton.innerHTML = paused ? 'Resume motion <span aria-hidden="true">▷</span>' : 'Pause motion <span aria-hidden="true">Ⅱ</span>';
}
motionButton.addEventListener('click', () => { userPaused = !userPaused; updateMotion(); });
reducedMotion.addEventListener('change', updateMotion);
updateMotion();
document.querySelector('#year').textContent = new Date().getFullYear();
