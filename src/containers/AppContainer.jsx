import React, {Component} from 'react'

import App from 'components/App'

let chromeWindowInstance = null

try {chromeWindowInstance = window.chrome.app.window.current()}catch (e){}

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

    console.log('chromeWindowInstance', chromeWindowInstance);
  }

  // handler functions
  onTimerStart(time){
    const view = 'count-down'
    this.setState({view, time})
  }

  onTimerUp(){
    const view = 'time-up'
    if (chromeWindowInstance) chromeWindowInstance.focus()
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
        window={chromeWindowInstance}
      />
    )
  }
}

export default AppContainer;
