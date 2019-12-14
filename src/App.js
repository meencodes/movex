import React from 'react';
import Router from './routes/router'
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => (
  <div id='app'>
    <Header />
    <Router />
    <Footer />
  </div>
)

export default App;
