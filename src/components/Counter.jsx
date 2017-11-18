import React, {Component} from 'react'
import PropTypes from 'prop-types';

const STATE = {
  IDLE : 'idle',
  ACTIVE : 'active',
  PAUSED : 'paused',
  FINISHED : 'finished'
}

class Counter extends Component {
  constructor(props) {
    super(props)

    this.state = {time: props.time, state : STATE.IDLE}

    this._tick = this._tick.bind(this)
  }

  _tick(){
    if (this.state.time > 0) {
      const time = this.state.time - 1
      this.setState({time})
      this.props.onTimeUpdate(this.state.time)
    } else {
      this._timeUp()
    }
  }

  // controls
  activate(){
    console.log('start', this.state.state);
    if (![STATE.IDLE, STATE.PAUSED].includes(this.state.state)) return

    this.counter = setInterval(this._tick, 1000)
    this.setState({state : STATE.ACTIVE})

    if(this.props.onStart) this.props.onStart()
  }

  pause(){
    console.log('pause', this.state.state);
    if (![STATE.ACTIVE].includes(this.state.state)) return

    clearInterval(this.counter)
    this.counter = null
    this.setState({state : STATE.PAUSED})

    if(this.props.onPause) this.props.onPause()
  }

  stop(){
    console.log('stop', this.state.state);
    if (![STATE.ACTIVE, STATE.PAUSED].includes(this.state.state)) return

    if (this.counter) clearInterval(this.counter)
    this.counter = null
    this.setState({time : 0, state : STATE.IDLE})

    if(this.props.onStop) this.props.onStop()
  }

  _timeUp(){
    console.log('invoked', this.state.state);
    if (![STATE.ACTIVE].includes(this.state.state)) return

    clearInterval(this.counter)
    this.counter = null
    this.setState({time : 0, state : STATE.FINISHED})

    if(this.props.onTimeUp) this.props.onTimeUp()
  }

  // lifecycle
  componentDidMount() {
    if(this.props.auto) this.activate()
  }

  componentWillUnmount() {
    if (this.counter) {
      clearInterval(this.counter)
      this.counter = null;
    }
  }

  // renders
  render(){
    return (
      <div className="Counter" time={this.state.time}></div>
    )
  }
}

Counter.propTypes = {
  auto: PropTypes.bool,
  time: PropTypes.number.isRequired,
  onStart: PropTypes.func,
  onPause: PropTypes.func,
  onStop: PropTypes.func,
  onTimeUp: PropTypes.func,
  onTimeUpdate: PropTypes.func
}

export default Counter;
