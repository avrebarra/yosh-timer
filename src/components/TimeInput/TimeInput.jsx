import React, { Component } from 'react'
import PropTypes from 'prop-types'

import TimeInputBox from './TimeInputBox'

import './index.css'

class TimeInput extends Component {
  constructor(props) {
    super(props)

    this.state = {value: '', time:null}
  }

  getTimeValue(hour, minute, second){
    let value = 0;

    value += hour ? hour * 3600 : 0
    value += minute ? minute * 60 : 0
    value += second ? second * 1 : 0

    return value
  }

  updateTime(timeObject){
    const newTime  = {...this.state.time, ...timeObject}
    const value = this.getTimeValue(newTime.hour ,newTime.minute ,newTime.second )
    this.setState({time : newTime, value})

    // inform changes
    this.props.onValueChanges(value)
  }

  render() {
    return (
      <div className="TimeInputController" value={this.state.value}>
        <TimeInputBox title="hour" min={0} max={24} onValueChanges={(hour)=>this.updateTime({hour})}/>
        :
        <TimeInputBox title="minute" min={0} max={60} onValueChanges={(minute)=>this.updateTime({minute})}/>
        :
        <TimeInputBox title="second" min={0} max={60} onValueChanges={(second)=>this.updateTime({second})}/>
      </div>
    );
  }
}

TimeInput.propTypes = {
  onValueChanges: PropTypes.func.isRequired
}

export default TimeInput;
