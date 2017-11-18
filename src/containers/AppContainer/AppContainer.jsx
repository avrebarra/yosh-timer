import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import App from 'components/App'

class AppContainer extends Component {
  constructor(props){
    super(props)

    this.state = {appState : 'input', time : null}
  }

  render() {
    return (
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    );
  }
}

export default AppContainer;
