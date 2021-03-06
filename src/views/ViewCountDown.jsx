import React, {Component} from 'react'
import PropTypes from 'prop-types';

import Page from 'components/Page'
import ButtonRack from 'components/ButtonRack'
import Button from 'components/Button'
import CountDown from 'components/CountDown'

import 'styles/View.css'
import displayIcon from 'internals/icons/display-icon.png'

class ViewCountDown extends Component {
  constructor(props){
    super(props)

    this.state = {state : 'active'}

    this.stop = this.stop.bind(this)
  }

  resume(){
    this.countDown.resume()
    this.setState({state : "active"})
  }
  pause(){
    this.countDown.pause()
    this.setState({state : "pause"})
  }
  stop(){
    this.countDown.stop()
    this.setState({state : "stop"})

    if (this.props.onStop) this.props.onStop()
  }

  render(){
    return (
      <div className="ViewCountDown View">
        <Page>
          <img className='DisplayIcon' alt='icon' src={displayIcon}/>
          <CountDown ref={(countDown)=>this.countDown = countDown} time={this.props.time} onTimeUp={this.props.onTimerUp}/>
        </Page>
        <ButtonRack>
          {(this.state.state === 'pause') &&
            <Button color="black" label="RESUME" onClick={()=>this.resume()}/>
          }
          {(this.state.state === 'active') &&
            <Button color="black" label="PAUSE" onClick={()=>this.pause()}/>
          }
          <Button color="black" label="STOP" onClick={()=>this.stop()}/>

        </ButtonRack>
      </div>
    )
  }
}

ViewCountDown.propTypes = {
  onTimerUp: PropTypes.func,
  onStop: PropTypes.func
}

export default ViewCountDown;
