import React from 'react'
import PropTypes from 'prop-types'

import ViewSwitch from 'containers/ViewSwitch'

import ViewCountDown from 'views/ViewCountDown'
import ViewInput from 'views/ViewInput'
import ViewTimeUp from 'views/ViewTimeUp'

import TitleBar from 'components/TitleBar'
import TitleBarButton from 'components/TitleBarButton'

import './index.css'
import iconClose from 'internals/close-glyph.png'
import iconMinimize from 'internals/minimize-glyph.png'
import iconSetting from 'internals/setting-glyph.png'

const App = (props) => (
  <div className='App'>
    <div className="background"></div>
    {props.window &&
      <TitleBar>
        <TitleBarButton icon={iconClose} onClick={()=>props.window.close()}/>
        <TitleBarButton icon={iconMinimize} onClick={()=>props.window.minimize()}/>
        {/* <TitleBarButton icon={iconSetting} onClick={()=>window.close()}/> */}
      </TitleBar>}
    <ViewSwitch show={props.view}>
      <ViewInput name="input" preloadedTime={props.time} submitInputTime={props.onTimerStart}/>
      <ViewCountDown name="count-down" time={props.time} onTimerUp={props.onTimerUp} onStop={props.onTimerStop}/>
      <ViewTimeUp name="time-up" onStop={props.onTimerStop}/>
    </ViewSwitch>
  </div>
);

App.propTypes = {
  window: PropTypes.object,
  preloadedTime: PropTypes.number,
  onTimerStart: PropTypes.func.isRequired,
  onTimerUp: PropTypes.func.isRequired,
  onTimerStop: PropTypes.func.isRequired
}

export default App;
