import React, {Component} from 'react'

import AppPure from 'components/App.Pure'

let chromeWindowInstance = null

try {chromeWindowInstance = window.chrome.app.window.current()}catch (e){}

class App extends Component{
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
      <AppPure view={this.state.view}
        onTimerStart={this.onTimerStart}
        onTimerUp={this.onTimerUp}
        onTimerStop={this.onTimerStop}
        time={this.state.time}
        window={chromeWindowInstance}
      />
    )
  }
}

export default App;
