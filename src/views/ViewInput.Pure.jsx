import React from 'react'
import TimeInput from 'components/TimeInput'
import PropTypes from 'prop-types';

import Page from 'components/Page'
import ButtonRack from 'components/ButtonRack'
import Button from 'components/Button'

import 'styles/View.css'
import displayIcon from 'internals/icons/display-icon.png'

class ViewInput extends React.Component {
  constructor(props) {
    super(props)

    this.state = {value: 0}
  }

  render(){
    return (
      <div className="ViewInput View" onKeyUp={this.props.onKeyUp}>
        <Page>
          <img className='DisplayIcon' alt='icon' src={displayIcon}/>
          <TimeInput defaultValue={this.props.preloadedTime} onValueChange={this.props.onValueChange}/>
        </Page>
        <ButtonRack>
          <Button label="START" onClick={()=>this.props.onInputSubmit()}/>
        </ButtonRack>
      </div>
    )
  }
}

ViewInput.propTypes = {
  preloadedTime: PropTypes.number,
  onInputSubmit: PropTypes.func.isRequired,
  onValueChange: PropTypes.func.isRequired,
  onKeyUp: PropTypes.func.isRequired
}

export default ViewInput;
