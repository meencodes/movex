import React from 'react';
import Router from './routes/router'
import './assets/scss/now-ui-kit.scss';

import { translate } from 'react-i18next'

const App = ({t}) => (
  <div id='app'>
  
    <Router />
    
  </div>
)

export default translate()(App);
