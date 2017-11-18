import React, { Component } from 'react'
import PropTypes from 'prop-types'

// Display Box
const DisplayBox = (props)=>{
  return (
      <input className="TimeDisplayBox" type="text" placeholder="00" value={("0" + props.value).slice(-2)} readOnly='true' />
    );
}

DisplayBox.propTypes = {
  value: PropTypes.number
}

// Main class
class TimeDisplay extends Component {
  // helpers
  getValueAs(modifier, value){
    switch (modifier) {
      case 'HOURS':
        return Math.floor(value / 3600)
      case 'MINUTES':
        return Math.floor((value % 3600) / 60)
      case 'SECONDS':
        return (value % 3600) % 60
      default:
        return 0
    }
  }

  render() {
    return (
      <div className="CountDown">
        <DisplayBox value={this.getValueAs('HOURS', this.props.time)}/>
        :
        <DisplayBox value={this.getValueAs('MINUTES', this.props.time)}/>
        :
        <DisplayBox value={this.getValueAs('SECONDS', this.props.time)}/>
      </div>
    );
  }
}

TimeDisplay.propTypes = {
  time: PropTypes.number
}

export default TimeDisplay;
