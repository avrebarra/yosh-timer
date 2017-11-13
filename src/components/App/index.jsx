import React, { Component } from 'react';
import './index.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="background">
          <div className="left" />
          <div className="right" />
        </div>
        <div className="foreground">
          <div className="left">
            <span className="input-box"><input className="hour" type="text"/></span>
            <span className="input-box"><input className="minute" type="text"/></span>
            <span className="input-box"><input className="second" type="text"/></span>
          </div>
          <div className="right">
            <div className="button start"></div>
            <div className="button pause"></div>
            <div className="button stop"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
