import React from 'react';
import PropTypes from 'prop-types';

function GiphyImg({ imgParams }) {
  return (
    <div>{imgParams}</div>
  );
}

GiphyImg.propTypes = {
  imgParams: PropTypes.func.isRequired
};

export default GiphyImg;
