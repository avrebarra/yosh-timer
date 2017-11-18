import React from 'react'
import TimeInputContainer from 'containers/TimeInputContainer'
import PropTypes from 'prop-types';

import Page from 'components/Page'
import ButtonRack from 'components/ButtonRack'
import Button from 'components/Button'

import 'views/common.css'

class ViewInput extends React.Component {
  constructor(props) {
    super(props)

    this.state = {value: 0}
  }

  render(){
    return (
      <div className="ViewInput View">
        <Page>
          <TimeInputContainer onValueChange={this.props.onValueChange}/>
        </Page>
        <ButtonRack>
          <Button label="START" onClick={()=>this.props.onInputSubmit()}/>
        </ButtonRack>
      </div>
    )
  }
}

ViewInput.propTypes = {
  onInputSubmit: PropTypes.func.isRequired,
  onValueChange: PropTypes.func.isRequired
}

export default ViewInput;
