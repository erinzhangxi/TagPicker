import React, { Component } from 'react';
import { createBrowserHistory } from 'history'
import TagService from "../services/TagService";
import Tag from './../components/Tag';
import sortByName from './../Utils.js'

const history = createBrowserHistory();

export default class TagList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tagId: '',
            tags: [],
            selectedTags: this.props.selectedtags
        };

        this.tagService = TagService.instance;
        this.renderTagItems = this.renderTagItems.bind(this);
        this.findChildrenTags = this.findChildrenTags.bind(this);
        this.handleCheck = this.handleCheck.bind(this);
        this.setSelectedTags = this.setSelectedTags.bind(this);
    }

    componentDidMount() {
        this.findChildrenTags(this.props.tagId);
        this.setSelectedTags(this.props);
    }

    componentWillReceiveProps(newProps) {
        this.findChildrenTags(newProps.tagId);
        this.setSelectedTags(newProps);
    }

    setSelectedTags(props) {
        this.setState({
            selectedTags: props.selectedtags
        });
    }

    findChildrenTags(tagId) {
        var tags = this.tagService.findAllTags();
        var children = [];

        for (var i = 0; i < tags.length; i++) {
            if (tags[i].parent === tagId) {
                children.push(tags[i]);
            }
        }

        this.setState({
            tags: children
        });
    }

    handleCheck(tagId) {
        this.props.handleCheck(tagId);
    }

    renderTagItems() {
        let taglist = null;
        if(this.state) {
            taglist = this.state.tags
                .sort((a, b) => sortByName(a,b))
                .map((tag, id) => {
                    return <div key={id}> <Tag selectedTags={this.state.selectedTags}
                                               parentId={this.state.tagId}
                                               item={tag}
                                               handleCheck={this.handleCheck}/></div>
                })
        }
        return (
            taglist
        )
    }
    render() {
        return (
            <div className="container-fluid">
                <button type="button"
                        onClick={() => history.goBack()}
                        className="btn btn-secondary">Back</button>
                <div className="list-group">
                    {this.renderTagItems()}
                </div>

            </div>
        );
    }
}

