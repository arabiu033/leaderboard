import './style.css';
import gameUrl from './modules/game.js';
import addScore from './modules/addBtn.js';
import resetBtn from './modules/resteBtn.js';

const submitBtn = document.getElementById('submit-btn');
submitBtn.addEventListener('click', (e) => addScore(e, gameUrl));

const reset = document.getElementById('reset-btn');
reset.addEventListener('click', () => resetBtn(gameUrl));