import React, {Component} from 'react'

import App from 'components/App'

class AppContainer extends Component{
  constructor(props){
    super(props)

    this.state = {
      view : 'input',
      time : 0
    }

    this.onTimerStart = this.onTimerStart.bind(this)
    this.onTimerUp = this.onTimerUp.bind(this)
    this.onTimerStop = this.onTimerStop.bind(this)
  }

  // handler functions
  onTimerStart(time){
    const view = 'count-down'
    this.setState({view, time})
  }

  onTimerUp(){
    const view = 'time-up'
    this.setState({view})
  }

  onTimerStop(){
    const view = 'input'
    this.setState({view})
  }

  // render function
  render(){
    return (
      <App view={this.state.view}
        onTimerStart={this.onTimerStart}
        onTimerUp={this.onTimerUp}
        onTimerStop={this.onTimerStop}
        time={this.state.time}
      />
    )
  }
}

export default AppContainer;
