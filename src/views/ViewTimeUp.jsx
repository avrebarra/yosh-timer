import React, {Component} from 'react'
import PropTypes from 'prop-types';

import Page from 'components/Page'
import ButtonRack from 'components/ButtonRack'
import Button from 'components/Button'

import TimeUpIcon from 'components/TimeUpIcon'
import SoundPlayer from 'components/SoundPlayer'

import 'views/common.css'

class ViewTimeUp extends Component {
  render(){
    return (
      <div className="ViewTimeUp View">
        <SoundPlayer/>
        <Page>
          <TimeUpIcon/>
        </Page>
        <ButtonRack>
          <Button color="black" label="STOP" onClick={()=>this.props.onStop()}/>
        </ButtonRack>
      </div>
    )
  }
}

ViewTimeUp.propTypes = {
  onStop: PropTypes.func.isRequired
}

export default ViewTimeUp;
