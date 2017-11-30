import React from 'react';
import 'styles/ButtonRack.css'

const ButtonRack = (props) => {
  return (
    <div className="ButtonRack">
      {props.children}
    </div>
  )
}

export default ButtonRack;
