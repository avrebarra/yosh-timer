import React from 'react';

import icon from 'internals/display-icon.png'
import './index.css'

const TimeUpIcon = (props) => {
  return (
    <div className="TimeUpIcon">
      <img class="animated infinite rubberBand" alt="" src={icon}/>
    </div>
  )
}

export default TimeUpIcon
