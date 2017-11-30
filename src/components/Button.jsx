import React from 'react';

import PropTypes from 'prop-types';
import 'styles/Button.css'

const Button = (props) => {
  return (
    <div className='Button' onClick={props.onClick}>
      {props.label}
    </div>
  )
}

Button.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func
}

export default Button;
