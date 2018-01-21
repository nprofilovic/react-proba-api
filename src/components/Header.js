import React from 'react';
import logo from '../logo.svg';
import img from '../banner-youtube.jpg';


class Header extends React.Component {
  render(){
    return(
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="banner-youtube">
          <img className="align-center" src={img} alt="" width='100%' />
        </div>
      </div>
    );
  }
}

export default Header;
