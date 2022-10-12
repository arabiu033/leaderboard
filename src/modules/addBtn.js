const name = document.getElementById('name');
const score = document.getElementById('score');
let add;

const addScore = async (e, gameUrl) => {
  e.preventDefault();

  if (name.value === '' || score.value === '') {
    return;
  } else if (!score.value.match(/^[0-9]+$/)) {
    score.value = '';
    score.classList.add('red');
    score.setAttribute('placeholder', 'Please enter a valid score');
    return
  }

  add = await fetch(gameUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      'user': name.value,
      'score': +score.value,
    })
  });

  score.classList.remove('red');
  score.setAttribute('placeholder', 'Your score');
  score.value = '';
  name.value = '';
};

export default addScore;