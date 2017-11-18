import React, {Component} from 'react'
import App from 'components/App'

class AppContainer extends Component{
  constructor(props){
    super(props)

    this.state = {
      view : 'input'
    }
  }

  render(){
    return (
      <App view={this.state.view}/>
    )
  }
}

export default AppContainer;
