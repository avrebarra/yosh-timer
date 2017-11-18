import React, {Component} from 'react';
import PropTypes from 'prop-types';

class RangedNumberInputBox extends Component {
  constructor(props) {
    super(props);

    this.state = {value: ''};

    this.validateValue = this.validateValue.bind(this);
    this.handleValueChange = this.handleValueChange.bind(this);
  }

  handleValueChange(event){
    const value =  this.validateValue(event.target.value, this.props.min, this.props.max)
    this.setState({value});

    if(this.props.onValueChange) this.props.onValueChange(value)
  }

  // helpers
  validateValue(valueIn, min, max) {
    let valueOut = valueIn

    valueOut = Number(valueIn)
    if(isNaN(valueOut)) return ''

    valueOut = valueOut > max ? max : valueOut
    valueOut = valueOut < min ? min : valueOut
    valueOut = valueOut === 0 ? '' : valueOut

    return valueOut
  }

  render() {
    return (
        <input className="RangedNumberInputBox" type="text" placeholder={this.props.placeholder} onChange={this.handleValueChange} value={this.state.value}/>
      );
  }
}

RangedNumberInputBox.propTypes = {
  placeholder: PropTypes.number,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  onValueChange: PropTypes.func
}

export default RangedNumberInputBox;
