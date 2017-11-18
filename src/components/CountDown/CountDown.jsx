import React, { Component } from 'react'
import PropTypes from 'prop-types'

import TimeDisplayBox from './TimeDisplayBox'

import './index.css'

class CountDown extends Component {
  constructor(props) {
    super(props)

    this.state = {countDownValue : props.value}
    this.tickDownFunction = this.tickDownFunction.bind(this)
  }

  componentDidMount(){
    this.count();
  }

  getValueAs(modifier, value){
    switch (modifier) {
      case 'HOURS':
        return Math.floor(value / 3600)
      case 'MINUTES':
        return Math.floor((value % 3600) / 60)
      case 'SECONDS':
        return (value % 3600) % 60
      default:
        return 0
    }
  }

  tickDownFunction(){
    const countDownValue = this.state.countDownValue - 1
    if(countDownValue === 0) this.stop()
    this.setState({countDownValue})
  }

  count(){
    this.counter = setInterval(this.tickDownFunction, 1000)
  }

  pause(){
    clearInterval(this.counter)
    this.counter = null
  }

  stop(){
    this.pause()
    this.setState({countDownValue : 0})
  }

  componentWillReceiveProps(nextProps){
    switch (nextProps.state) {
      case 'count':
      console.log('count');
        this.count();
        break;
      case 'pause':
      console.log('pause');
        this.pause();
        break;
      case 'stop':
      console.log('stop');
        this.stop();
        break;
      default:
    }
  }

  render() {
    return (
      <div className="CountDown">
        <TimeDisplayBox value={this.getValueAs('HOURS', this.state.countDownValue)}/>
        :
        <TimeDisplayBox value={this.getValueAs('MINUTES', this.state.countDownValue)}/>
        :
        <TimeDisplayBox value={this.getValueAs('SECONDS', this.state.countDownValue)}/>
      </div>
    );
  }
}

CountDown.propTypes = {
  state: PropTypes.string,
  onValueChanges: PropTypes.func
}

export default CountDown;
