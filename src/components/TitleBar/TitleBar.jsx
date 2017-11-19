import React from 'react';
import './index.css'

const TitleBar = (props) => {
  return (
    <div className="TitleBar">
      {props.children}
    </div>
  )
}

export default TitleBar;
