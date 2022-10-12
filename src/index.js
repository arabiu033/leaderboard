import './style.css';
import gameUrl from './modules/game';
import addScore from './modules/addBtn';
import resetBtn from './modules/resteBtn';

const submitBtn = document.getElementById('submit-btn');
submitBtn.addEventListener('click', (e) => addScore(e, gameUrl));


const reset = document.getElementById('reset-btn');
reset.addEventListener('click', () => resetBtn(gameUrl));