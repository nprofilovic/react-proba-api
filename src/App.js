import React, { Component } from 'react';

import './App.css';
import './main.css';
import './font-awesome.min.css';
import Youtube from './components/Youtube';
import Wordpress from './components/Wordpress';
import Header from './components/Header';



class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <Youtube />
        <Wordpress />
      </div>
    );
  }
}

export default App;
