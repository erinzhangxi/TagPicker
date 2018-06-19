import React, { Component } from 'react';
import TagList from './TagList.js'

export default class TagPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Folder Name'
        };

        this.onTagSelectionChange = this.onTagSelectionChange.bind(this);
        this.goBack = this.goBack.bind(this);
    }

    onTagSelectionChange() {

    }

    goBack() {
        alert("back button is clicked");
    }

  render() {
    return (
        <div className="container-fluid">
            <table className="table">
                <thead>{this.state.title}</thead>
                <tbody>

                    <button type="button"
                            onClick={() => this.goBack()}
                            className="btn btn-secondary">Back</button>

                   <TagList/>
                </tbody>
            </table>
        </div>
    );
  }
}
