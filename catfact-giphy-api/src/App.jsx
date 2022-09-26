import React, { useEffect, useState } from 'react';
import { fetchCat } from './services';
import { CatText } from './components/cat-text';
import GiphyImg from './components/giphy-img';

function App() {
  const [catFactText, setCatFactText] = useState('');
  const [imgParams, setImgParams] = useState('');

  useEffect(() => {
    fetchCat(setCatFactText, setImgParams);
  }, []);

  return (
    <div className="App">
      <CatText catFactText={catFactText} />
      {(imgParams !== '')
        ? (<GiphyImg imgParams={imgParams} />)
        : <h2>Loading</h2>}
    </div>
  );
}

export default App;
