import React from 'react';
import Router from './routes/router'
import Header from './components/Header';
import Footer from './components/Footer';
import './assets/scss/now-ui-kit.scss';

const App = () => (
  <div id='app'>
    <Header />
    <Router />
    <Footer />
  </div>
)

export default App;
