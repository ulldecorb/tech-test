const catApi = 'https://catfact.ninja/fact';
const giphyUrl = 'https://api.giphy.com/v1/gifs/search';
const GiphyApiKey = 'hrvVWybnAzoz6NV9L1tM72aMPVgY1P3r';

function convertStringToSearchParam(str) {
  return str.split(' ').map((letter) => letter.toLowerCase()).slice(0, 3).join('&20');
}

function convertUrltoUri(str) {
  const regexp = /media./;
  const cutIndex = str.indexOf('?');
  const newUrl = str.slice(0, cutIndex).replace(regexp, 'i');
  return newUrl;
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

export async function getImgUrl(searchParams, setState) {
  const newUrl = `${giphyUrl}?&api_key=${GiphyApiKey}&q=${searchParams}`;
  await fetch(newUrl)
    .then((res) => res.json())
    .then((data) => {
      const defaultUrl = data.data[0].images.original.webp;
      const newSrc = convertUrltoUri(defaultUrl);
      setState(newSrc);
    });
}
