import React from 'react';
import PropTypes from 'prop-types';
import 'styles/TitleBarButton.css'

const TitleBarButton = (props) => {
  return (
    <span className="TitleBarButton" onClick={props.onClick}>
      <img src={props.icon} height="10" alt=""/>
    </span>
  )
}

TitleBarButton.propTypes = {
  icon: PropTypes.string.isRequired,
  onClick: PropTypes.func
}

export default TitleBarButton;
