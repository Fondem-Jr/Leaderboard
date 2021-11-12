import './style.css';
import leaderBoard from './fetch.js';

const displayGame = document.querySelector('.list');
const form = document.querySelector('.form');
const userName = document.querySelector('.input-name');
const userScore = document.querySelector('.input-score');
const refreshBtn = document.querySelector('.refresh-button');

const postData = async (playerName, gamerScore) => {
  const id = JSON.parse(localStorage.getItem('gameId'));
  const response = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
      user: playerName,
      score: gamerScore,
    }),
  })
    .then((res) => res.json());
  return response;
};

form.addEventListener('submit', (e) => {
  const userNameValue = userName.value;
  const userScoreValue = userScore.value;
  e.preventDefault();
  postData(userNameValue, userScoreValue);
  form.reset();
});

const getData = async () => {
  const id = JSON.parse(localStorage.getItem('gameId'));
  const refreshData = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores/`);
  const refreshJsonData = await refreshData.json();
  return refreshJsonData;
};

const refreshScores = () => {
  
  getData().then((data) => {
    displayGame.innerHTML = '';
    data.result.forEach((data) => {
      const gameList = document.createElement('li');
      gameList.classList.add('flex', 'border');
      const gamerData = document.createElement('p');
      gamerData.innerHTML = `${data.user}: ${data.score}`;
      gameList.appendChild(gamerData);
      displayGame.appendChild(gameList);
    });
  });
};

refreshBtn.addEventListener('click', refreshScores);

if (localStorage.getItem('gameId')) {
  console.log( localStorage.getItem('gameId') )
}
else { leaderBoard(); }

window.onload = refreshScores;