import React, { Component } from 'react';
import TagService from "../services/TagService";
import Tag from './../components/Tag';


export default class TagList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tagId: '',
            tags: [],
            selectedTags: []
        };
        this.tagService = TagService.instance;
        this.renderTagItems = this.renderTagItems.bind(this);
        this.setTagId = this.setTagId.bind(this);
        this.goBack = this.goBack.bind(this);
        this.findChildrenTags = this.findChildrenTags.bind(this);
    }

    goBack() {
        this.props.history.goBack();
    }

    componentDidMount() {
        this.setTagId(this.props.match.params.tagId);
        this.findChildrenTags(this.props.match.params.tagId);
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
        console.log("children length " + children.length);
    }

    componentWillReceiveProps(newProps) {
        this.setTagId(newProps.match.params.tagId);
        this.findChildrenTags(newProps.match.params.tagId);
    }

    setTagId(tagId) {
        this.setState({tagId: tagId});
    }


    renderTagItems() {
        let taglist = null;
        if(this.state) {
            taglist = this.state.tags.map((tag, id) => {
               return <div key={id}> <Tag parentId={this.state.tagId}
                                          item={tag}/></div>
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
                        onClick={() => this.goBack()}
                        className="btn btn-secondary">Back</button>
                <h4>Tag ID : {this.state.tagId}</h4>
                <div className="list-group">
                    {this.renderTagItems()}
                </div>

            </div>
        );
    }
}

