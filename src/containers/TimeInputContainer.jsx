import React, {Component} from 'react'
import PropTypes from 'prop-types';
import TimeInput from 'components/TimeInput';

class TimeInputContainer extends Component{
  constructor(props){
    super(props)

    this.state = {
      value : 0,
      time : null
    }

    this.onBoxUpdate = this.onBoxUpdate.bind(this)
  }

  // handler functions
  onBoxUpdate(boxValueObject){
    const newTime  = {...this.state.time, ...boxValueObject}
    const value = this.convertToSeconds(newTime.hour ,newTime.minute ,newTime.second )
    this.setState({time : newTime, value})

    // inform changes
    this.props.onValueChange(value)
  }

  // helpers
  convertToSeconds(hour, minute, second){
    let value = 0;

    value += hour ? hour * 3600 : 0
    value += minute ? minute * 60 : 0
    value += second ? second * 1 : 0

    return value
  }

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

  // render function
  render(){
    return (
      <TimeInput
        defaultHour={this.getValueAs('HOURS', this.props.defaultValue)}
        defaultMinute={this.getValueAs('MINUTES', this.props.defaultValue)}
        defaultSecond={this.getValueAs('SECONDS', this.props.defaultValue)}
        onBoxUpdate={this.onBoxUpdate}
      />
    )
  }
}

TimeInputContainer.propTypes = {
  defaultValue: PropTypes.number,
  onValueChange: PropTypes.func.isRequired
}

export default TimeInputContainer;
