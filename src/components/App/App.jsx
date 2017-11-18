import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import ViewCountDown from 'views/ViewCountDown'
import ViewInput from 'views/ViewInput'

import './index.css'

class App extends Component {
  constructor(props){
    super(props)

    this.state = {appState : 'input'}
  }

  render() {
    return (
      <div className='App'>
        {this.state.appState === 'input' && <ViewInput/>}
        {this.state.appState === 'count' && <ViewCountDown/>}
        {/* {this.state.appState === 'timeup' && <SoundPlayer/>} */}
      </div>
      );
  }
}

export default App;
