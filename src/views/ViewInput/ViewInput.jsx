import React, {Component} from 'react'
import { Redirect } from 'react-router-dom'
import TimeInput from 'components/TimeInput'
import PropTypes from 'prop-types';

import Page from 'components/Page'
import ButtonRack from 'components/ButtonRack'
import Button from 'components/Button'

import 'views/common.css'

class ViewInput extends Component {
  constructor(props) {
    super(props)

    this.state = {value: '', ready : false}
  }

  submitTimeValue(value){
    if (value) this.setState({ready : true})
    if (this.props.onTimeSubmit) this.props.onTimeSubmit(value)
  }

  render(){
    return (
      <div className="ViewInput View" value={this.state.value}>
        <Page>
          <TimeInput onValueChanges={(value)=>this.setState({value})}/>
        </Page>
        <ButtonRack>
          <Button color="black" label="START" onClick={()=>this.submitTimeValue(this.state.value)}/>
          {this.state.ready && <Redirect to={"/count/" + this.state.value}/>}
        </ButtonRack>
      </div>
    )
  }
}

ViewInput.propTypes = {
  onTimeSubmit: PropTypes.func
}

export default ViewInput;
