const catApi = 'https://catfact.ninja/fact';
// const giphyApi = 'https://developers.giphy.com/docs/';

// export async function fetchCat(setState) {
//   const catText = await fetch(catApi)
//     .then((res) => res.json())
//     .then((data) => {
//       setState(data.fact);
//     });
//   return catText;
// }

async function fetchCat(setState) {
  await fetch(catApi)
    .then((res) => res.json())
    .then((data) => setState(data.fact));
}

export default fetchCat;
