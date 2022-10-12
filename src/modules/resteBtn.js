const list = document.getElementById('scores-list');
let results;
let scores;

const resetBtn = async (gameUrl) => {
  results = await fetch(gameUrl);
  scores = await results.json();
  list.innerHTML = '';
  scores.result.forEach((e) => {
    const li = document.createElement('li');
    li.append(document.createElement('span')
      .textContent = e.user.concat(': '),
    document.createElement('em').textContent = e.score);
    list.appendChild(li);
  });
};

export default resetBtn;