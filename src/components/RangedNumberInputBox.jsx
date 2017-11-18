import React, {Component} from 'react';
import PropTypes from 'prop-types';

class RangedNumberInputBox extends Component {
  constructor(props) {
    super(props);

    this.state = {value: props.defaultValue ? props.defaultValue : 0};

    this.validateValue = this.validateValue.bind(this);
    this.handleValueChange = this.handleValueChange.bind(this);
  }

  handleValueChange(event){
    const value =  this.validateValue(event.target.value)
    this.setState({value});

    if(this.props.onValueChange) this.props.onValueChange(value)
  }

  // helpers
  validateValue(valueIn) {
    let valueOut = valueIn

    valueOut = Number(valueIn)
    if(isNaN(valueOut)) return ''

    valueOut = valueOut > this.props.max ? this.props.max : valueOut
    valueOut = valueOut < this.props.min ? this.props.min : valueOut
    valueOut = valueOut === 0 ? '' : valueOut

    return valueOut
  }

  render() {
    return (
        <input className="RangedNumberInputBox" type="text" placeholder={this.props.placeholder} onChange={this.handleValueChange} value={this.validateValue(this.state.value)}/>
      );
  }
}

RangedNumberInputBox.propTypes = {
  defaultValue: PropTypes.number,
  placeholder: PropTypes.string,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  onValueChange: PropTypes.func
}

export default RangedNumberInputBox;
