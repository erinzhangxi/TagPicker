import React, { Component } from 'react';
import TagRoot from './TagRoot.js'
import TagList from "./TagList";
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

export default class TagPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Folder Name',
            tags: [],
            selectedTags: []
        };
        this.onTagSelectionChange = this.onTagSelectionChange.bind(this);
        this.unCheck = this.unCheck.bind(this);
    }

    unCheck(tagId) {
        this.setState(prevState =>
            ({ selectedTags: prevState.selectedTags.filter(tag => tag !== tagId) }));
    }
    onTagSelectionChange(tagId) {
        if (!this.state.selectedTags.includes(tagId)) {
            this.setState({selectedTags: [...this.state.selectedTags, tagId]},
               () =>  console.log(this.state.selectedTags));
        } else if (this.state.selectedTags.includes(tagId)) {
            this.unCheck(tagId);
        }
    }

  render() {
      const TagRootProps = (props) => {
          return (<TagRoot handleCheck={this.onTagSelectionChange.bind(this)}
                           selectedTags = {this.state.selectedTags}/>);
      }

      const TagListProps = (props) => {
          var path = props.location.pathname;
          var tagid = path.substring(1, path.length)
          return (<TagList handleCheck={this.onTagSelectionChange.bind(this)}
                           selectedtags={this.state.selectedTags}
                            tagId={tagid}/>);
      }

    return (
        <Router>
        <div className="container-fluid">
            <table className="table">
                <thead>{this.state.title}</thead>
                <tbody>
                <Link to="/"></Link>

                <Route exact path="/"
                       component={TagRootProps}/>

                <Route exact path="/:tagId/"
                       component={TagListProps}/>

                </tbody>
            </table>
        </div>
        </Router>
    );
  }
}

