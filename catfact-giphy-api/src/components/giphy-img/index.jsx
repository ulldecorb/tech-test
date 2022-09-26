import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getImgUrl } from '../../services';

function GiphyImg({ imgParams }) {
  const [src, setSrc] = useState('');

  useEffect(() => {
    getImgUrl(imgParams, setSrc);
  });

  return (
    <img src={src} alt="gif" />
  );
}

GiphyImg.propTypes = {
  imgParams: PropTypes.string.isRequired
};

export default GiphyImg;
