import './App.css';
import UserForms from './components/UserForms.js';
import React from 'react';
import Range from './components/Range.js';
import { Component } from 'react';

class App extends Component {


  render() {
    return (
      <div className="center_main" >
        <div className="row">
        <Range />
        <Range />
        </div>
        <div className="row">
        <Range />
        <Range />
        </div>
      </div>
    );
  }
}
export default App;
