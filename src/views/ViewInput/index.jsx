import React, {Component} from 'react'
import ViewInput from './ViewInput.jsx'
import PropTypes from 'prop-types';

class ViewInputContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {value: 0}

    this.onInputSubmit = this.onInputSubmit.bind(this)
    this.onValueChange = this.onValueChange.bind(this)
  }

  // handler functions
  onInputSubmit(){
    if(this.state.value) this.props.submitInputTime(this.state.value)
  }

  onValueChange(value){
    this.setState({value})
  }

  render(){
    return (
      <ViewInput
        onInputSubmit={this.onInputSubmit}
        onValueChange={this.onValueChange}
      />
    )
  }
}

ViewInputContainer.propTypes = {
  submitInputTime: PropTypes.func.isRequired
}

export default ViewInputContainer;
