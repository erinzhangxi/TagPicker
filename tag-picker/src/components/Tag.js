import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import FolderElement from './../components/FolderElement'
import TagElement from './../components/TagElement'

export default class Tag extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container-fluid">
                {this.props.item.isFolder ?
                    <FolderElement item={this.props.item}/>
                    :
                    <TagElement item={this.props.item}/>}
            </div>
        );
    }
}
