import React from 'react';
import 'styles/TitleBar.css'

const TitleBar = (props) => {
  return (
    <div className="TitleBar">
      {props.children}
    </div>
  )
}

export default TitleBar;
