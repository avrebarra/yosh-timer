import React, {Component} from 'react'
import CountDown from 'components/CountDown'
import PropTypes from 'prop-types';

import Page from 'components/Page'
import ButtonRack from 'components/ButtonRack'
import Button from 'components/Button'

import 'views/common.css'

class ViewCountDown extends Component {
  constructor(props) {
    super(props)
    const initialValue = props.time;
    this.state = {value: initialValue, countDownState : 'count'}
  }

  onStop(){
    this.setState({countDownState : 'stop'})
    this.props.onStop()
  }

  render(){
    return (
      <div className="ViewCountDown View" value={this.state.value}>
        <Page>
          <CountDown value={this.state.value} onValueChanges={(value)=>this.setState({value})} state={this.state.countDownState} onTimeUp={()=>this.props.onTimeUp()}/>
        </Page>
        <ButtonRack>
          {(this.state.countDownState === 'pause') &&
            <Button color="black" label="RESUME" onClick={()=>this.setState({countDownState : 'count'})}/>
          }
          {(this.state.countDownState === 'count') &&
            <Button color="black" label="PAUSE" onClick={()=>this.setState({countDownState : 'pause'})}/>
          }
          <Button color="black" label="STOP" onClick={()=>this.onStop()}/>

        </ButtonRack>
      </div>
    )
  }
}

ViewCountDown.propTypes = {
  onTimeUp: PropTypes.func.isRequired,
  onStop: PropTypes.func.isRequired
}

export default ViewCountDown;
