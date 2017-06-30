const keyOne = document.getElementById('keyCapOne');
const keyTwo = document.getElementById('keyCapTwo');


const KEYCODES = {
  j: 74,
  k: 75,
};

const isGameKey = (e) => {
  return e.keyCode === KEYCODES.j || e.keyCode === KEYCODES.k;
};

const isKeyOne = (e) => {
  return e.keyCode === KEYCODES.j;
};

const handleKeyDown = (e) => {
  if (!isGameKey(e)) return;
  const key = isKeyOne(e) ? keyOne : keyTwo;
  key.classList.add('is-pressed');
};

const handleKeyUp = (e) => {
  if (!isGameKey(e)) return;
  const key = isKeyOne(e) ? keyOne : keyTwo;
  key.classList.remove('is-pressed');
};

document.addEventListener('keydown', handleKeyDown, false);
document.addEventListener('keyup', handleKeyUp, false);
