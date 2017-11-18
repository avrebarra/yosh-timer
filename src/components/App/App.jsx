import React, { Component } from 'react'
import ViewCountDown from 'views/ViewCountDown'
import ViewInput from 'views/ViewInput'
import ViewTimeUp from 'views/ViewTimeUp'

import './index.css'
import closeGlyph from './close-glyph.png'

class App extends Component {
  constructor(props){
    super(props)

    this.state = {appState : 'input', time : null}
  }

  render() {
    return (
      <div className='App'>
        <img id="close-button" src={closeGlyph} height="15" alt=""/>
        {this.state.appState === 'input' && <ViewInput onTimeSubmit={(time)=>{if (time) this.setState({time, appState:'count'})}}/>}
        {(this.state.appState === 'count') && <ViewCountDown time={this.state.time} onStop={()=>this.setState({appState:'input'})} onTimeUp={()=>this.setState({appState:'time-up'})}/>}
        {this.state.appState === 'time-up' && <ViewTimeUp onStop={()=>this.setState({appState:'input'})}/>}
      </div>
      );
  }
}

export default App;
