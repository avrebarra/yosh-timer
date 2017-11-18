import React from 'react'
import PropTypes from 'prop-types'

import RangedNumberInputBox from 'components/RangedNumberInputBox'

const TimeInput = (props) => (
  <div className="TimeInput">
    <RangedNumberInputBox min={0} max={24} onValueChange={(hour)=>props.onBoxUpdate({hour})}/>
    :
    <RangedNumberInputBox min={0} max={60} onValueChange={(minute)=>props.onBoxUpdate({minute})}/>
    :
    <RangedNumberInputBox min={0} max={60} onValueChange={(second)=>props.onBoxUpdate({second})}/>
  </div>
)

TimeInput.propTypes = {
  onBoxUpdate: PropTypes.func.isRequired
}

export default TimeInput;
