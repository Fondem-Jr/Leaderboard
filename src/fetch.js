// const baseURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games';

export default async function leaderBoard() {
  await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json;',
    },
    body: JSON.stringify({ name: 'my first game' }),
  })
    .then((response) => response.json())
    .then((json) => json)
    .catch((error) => new Error('Error:', error));
}