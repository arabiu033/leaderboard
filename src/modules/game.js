const baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
const response = await fetch(baseUrl, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    'name': 'unpocoloco'
  }),
});

const endpoint = await response.json();
const gameUrl = baseUrl.concat(endpoint.result.split(' ')[3], '/scores/');

export default gameUrl;