const catApi = 'https://catfact.ninja/fact';
// const giphyApi = 'https://developers.giphy.com/docs/';

export function fetchCat() {
  fetch(catApi)
    .then((res) => res.json())
    .then((data) => data.fact);
}

export default fetchCat;
