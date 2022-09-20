import React, { useEffect, useState } from 'react';
import fetchCat from './services';
import { CatText } from './components/cat-text';

function App() {
  const [catFactText, setCatFactText] = useState('');

  useEffect(() => {
    fetchCat(setCatFactText);
  }, []);

  return (
    <div className="App">
      <CatText catFactText={catFactText} />
    </div>
  );
}

export default App;
