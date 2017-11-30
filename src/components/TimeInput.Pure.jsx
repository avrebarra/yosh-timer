import React from 'react'
import PropTypes from 'prop-types'

import RangedNumberInputBox from 'components/RangedNumberInputBox'

import 'styles/TimeInput.css'

const TimeInput = (props) => (
  <div className="TimeInput">
    <RangedNumberInputBox defaultValue={props.defaultHour} min={0} max={24} placeholder='00' onValueChange={(hour)=>props.onBoxUpdate({hour})}/>
    :
    <RangedNumberInputBox defaultValue={props.defaultMinute} min={0} max={60} placeholder='00' onValueChange={(minute)=>props.onBoxUpdate({minute})}/>
    :
    <RangedNumberInputBox defaultValue={props.defaultSecond} min={0} max={60} placeholder='00' onValueChange={(second)=>props.onBoxUpdate({second})}/>
  </div>
)

TimeInput.propTypes = {
  defaultHour: PropTypes.number,
  defaultMinute: PropTypes.number,
  defaultSecond: PropTypes.number,
  onBoxUpdate: PropTypes.func.isRequired
}

export default TimeInput;
