import React from 'react';
import PropTypes from 'prop-types';

export function CatText({ catFactText }) {
  return (
    <h2>{catFactText}</h2>
  );
}

CatText.propTypes = {
  catFactText: PropTypes.string.isRequired
};

export default CatText;
