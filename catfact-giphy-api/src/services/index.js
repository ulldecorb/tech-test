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

export function convertStringToSearchParam(str) {
  return str.split(' ').map((letter) => letter.toLowerCase()).slice(0, 3).join('&20');
}

export async function fetchCat(setCatTextState, setSearchParam) {
  await fetch(catApi)
    .then((res) => res.json())
    .then((data) => {
      setCatTextState(data.fact);
      const newSearchParam = convertStringToSearchParam(data.fact);
      setSearchParam(newSearchParam);
    });
}
