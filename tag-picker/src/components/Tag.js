import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import FolderElement from './../components/FolderElement'
import TagElement from './../components/TagElement'

export default class Tag extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tagId: this.props.item._id,
            selected: false
        };
        this.handleCheck = this.handleCheck.bind(this);
        this.selectCheckBox = this.selectCheckBox.bind(this);
        this.setSelected = this.setSelected.bind(this);
    }

    componentDidMount(){
        this.selectCheckBox(this.props.selectedTags);

    }
    componentWillReceiveProps(newProps){
        this.selectCheckBox(newProps.selectedTags);
    }

    selectCheckBox(selectedTags) {
        if(selectedTags) {
            for (var i = 0; i < selectedTags.length; i++) {
                if (selectedTags[i] === this.state.tagId) {
                    this.setSelected();
                }
            }
        }
    }
    setSelected() {
        this.setState({
            selected: true
        });
    }

    handleCheck(tagId) {
        this.props.handleCheck(tagId);
    }

    render() {
        return (
            <div className="container-fluid">
                {this.props.item.isFolder ?
                    <FolderElement parentId={this.props.parentId}
                                   item={this.props.item}
                                   selectedTags={this.props.selectedTags}/>
                    :
                    <TagElement item={this.props.item}
                                handleCheck={this.handleCheck}
                                selected={this.state.selected}/>}
            </div>
        );
    }
}
