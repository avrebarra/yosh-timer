import React, {Component} from 'react'
import ViewInput from './ViewInput.Pure.jsx'
import PropTypes from 'prop-types';

class ViewInputContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {value: this.props.preloadedTime}

    this.onInputSubmit = this.onInputSubmit.bind(this)
    this.onValueChange = this.onValueChange.bind(this)
    this.onKeyUp = this.onKeyUp.bind(this)
  }

  // handler functions
  onInputSubmit(){
    if(this.state.value) this.props.submitInputTime(this.state.value)
  }

  onValueChange(value){
    this.setState({value})
  }

  onKeyUp(event){
    if(this.state.value && event.keyCode === 13) this.props.submitInputTime(this.state.value)
  }

  render(){
    return (
      <ViewInput
        preloadedTime={this.props.preloadedTime}
        onInputSubmit={this.onInputSubmit}
        onValueChange={this.onValueChange}
        onKeyUp={this.onKeyUp}
      />
    )
  }
}

ViewInputContainer.propTypes = {
  preloadedTime: PropTypes.number,
  submitInputTime: PropTypes.func.isRequired
}

export default ViewInputContainer;
