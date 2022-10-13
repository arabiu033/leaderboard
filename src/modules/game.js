const baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
// const response = await fetch(baseUrl, {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({
//     name: 'unpocoloco',
//   }),
// });

// const endpoint = await response.json();
// alert(endpoint.result);
const gameUrl = baseUrl.concat('NXVaV2jg5gShsu30JPu3', '/scores/');

export default gameUrl;