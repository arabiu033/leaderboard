const list = document.getElementById('scores-list');
let results;
let scores;

const resetBtn = async (gameUrl) => {
  results = await fetch(gameUrl);
  scores = await results.json();
  list.innerHTML = '<li><span>Names</span><em>Scores</em></li>';
  scores.result.forEach((e) => {
    list.innerHTML += `<li><span>${e.user}
      </span><em>${e.score}</em></li>`;
  });
};

export default resetBtn;