import React, { Component } from 'react';
import TagRoot from './TagRoot.js'
import TagList from "./TagList";
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'


export default class TagPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Folder Name'
        };

        this.onTagSelectionChange = this.onTagSelectionChange.bind(this);
    }

    onTagSelectionChange() {

    }


  render() {
    return (
        <Router>
        <div className="container-fluid">
            <table className="table">
                <thead>{this.state.title}</thead>
                <tbody>
                <Link to="/"></Link>
                 <Route exact path="/"
                       component={TagRoot}>
                 </Route>
                   <Route exact path="/:tagId/"
                          component={TagList}>
                   </Route>
                </tbody>
            </table>
        </div>
        </Router>
    );
  }
}
