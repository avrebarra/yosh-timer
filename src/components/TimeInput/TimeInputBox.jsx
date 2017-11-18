import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './input-box.css';

class TimeInputBox extends Component {
  constructor(props) {
    super(props);

    this.state = {value: ''};

    this.validate = this.validate.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  validate (valueIn, min, max) {
    let valueOut = valueIn

    valueOut = Number(valueIn)
    if(isNaN(valueOut)) return ''

    valueOut = valueOut > max ? max : valueOut
    valueOut = valueOut < min ? min : valueOut
    valueOut = valueOut === 0 ? '' : valueOut

    return valueOut
  }

  handleChange(event){
    const value =  this.validate(event.target.value, this.props.min, this.props.max)

    this.setState({value});

    this.props.onValueChanges(value)
  }

  render() {
    return (
        <input className="TimeInputBox" type="text" placeholder="00" onChange={this.handleChange} value={this.state.value}/>
      );
  }
}

TimeInputBox.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  onValueChanges: PropTypes.func.isRequired
}

export default TimeInputBox;
