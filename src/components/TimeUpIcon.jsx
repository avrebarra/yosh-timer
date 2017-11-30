import React from 'react';

import icon from 'internals/icons/display-icon.png'
import 'styles/TimeUpIcon.css'

const TimeUpIcon = (props) => {
  return (
    <div className="TimeUpIcon">
      <img class="animated infinite rubberBand" alt="" src={icon}/>
    </div>
  )
}

export default TimeUpIcon
