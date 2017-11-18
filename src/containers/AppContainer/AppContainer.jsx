import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import App from 'components/App'

const AppContainer = () => (
  <BrowserRouter>
    <App/>
  </BrowserRouter>
);

export default AppContainer;
