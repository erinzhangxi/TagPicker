import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
import TagPicker from './containers/TagPicker.js'
import Tag from './components/Tag.js'

class App extends Component {
  render() {

    return (
      <Router>
        <div className="container-fluid">
          <TagPicker />
            <Route exact path="/:tagId"
                   component={Tag}>
            </Route>
        </div>
      </Router>
    );
  }
}

export default App;
