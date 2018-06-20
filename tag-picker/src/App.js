import React, { Component } from 'react';
import './App.css';
import TagPicker from './containers/TagPicker.js'

class App extends Component {
  render() {
    return (
        <div className="container-fluid">
          <TagPicker />
        </div>
    );
  }
}

export default App;
