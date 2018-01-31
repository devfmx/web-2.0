import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar'
import Masthead from './components/video-head/Masthead';


class App extends Component {
  render() {
    return (
        <main>
          <div>News</div>
          <Navbar/>
          <Masthead/>
        </main>
    );
  }
}

export default App;
