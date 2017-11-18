import React from 'react';
import PropTypes from 'prop-types';

import './input-box.css';

const TimeDisplayBox = (props)=>{
  return (
      <input className="TimeDisplayBox" type="text" placeholder="00" value={("0" + props.value).slice(-2)} readOnly='true' />
    );
}

TimeDisplayBox.propTypes = {
  value: PropTypes.number
}

export default TimeDisplayBox;
