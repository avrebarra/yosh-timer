import React from 'react'
import PropTypes from 'prop-types'

import ViewSwitch from 'containers/ViewSwitch'

import ViewCountDown from 'views/ViewCountDown'
import ViewInput from 'views/ViewInput'
import ViewTimeUp from 'views/ViewTimeUp'

import './index.css'

const App = (props) => (
  <div className='App'>
    <ViewSwitch show={props.view}>
      <ViewInput name="input" submitInputTime={props.onTimerStart}/>
      <ViewCountDown name="count-down" time={props.time} onTimerUp={props.onTimerUp} onStop={props.onTimerStop}/>
      <ViewTimeUp name="time-up" onStop={props.onTimerStop}/>
    </ViewSwitch>
  </div>
);

App.propTypes = {
  onTimerStart: PropTypes.func.isRequired,
  onTimerUp: PropTypes.func.isRequired,
  onTimerStop: PropTypes.func.isRequired
}

export default App;
