import React, {Component} from 'react'
import PropTypes from 'prop-types';
import Counter from 'components/Counter';
import TimeDisplay from 'components/TimeDisplay';

class CountDownContainer extends Component{
  constructor(props){
    super(props)

    this.state = {time : this.props.time}
    
    this.onTimeUpdate = this.onTimeUpdate.bind(this)
    this.onTimeUp = this.onTimeUp.bind(this)
  }

  // handler functions
  onTimeUpdate(time){
    this.setState({time})
    if (this.props.onValueChange) this.props.onValueChange(time)
  }

  onTimeUp(){
    if (this.props.onTimeUp) this.props.onTimeUp()
  }

  // helpers
  pause(){this.counter.pause()}
  resume(){this.counter.activate()}
  stop(){this.counter.stop()}

  // render function
  render(){
    return (
      <div className="CountDown">
        <Counter ref={(counter) => { this.counter = counter }} time={this.props.time} onTimeUpdate={this.onTimeUpdate} onTimeUp={this.onTimeUp} auto/>
        <TimeDisplay time={this.state.time}/>
      </div>
    )
  }
}

CountDownContainer.propTypes = {
  time: PropTypes.number.isRequired,
  onTimeUp: PropTypes.func,
  onValueChange: PropTypes.func
}

export default CountDownContainer;
