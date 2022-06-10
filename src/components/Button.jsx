import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

/**
 * Primary UI component for user interaction
 */
export const Button = ({  label, onClick }) => {
  return (
    <button onClick={onClick}>
      {label}
    </button>
  );
};
