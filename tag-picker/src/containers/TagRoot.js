import React, { Component } from 'react';
import TagService from "../services/TagService";
import Tag from './../components/Tag'

export default class TagRoot extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tagId: '',
            tags: [],
            selectedTags: []
        };
        this.tagService = TagService.instance;
        this.findAllTags = this.findAllTags.bind(this);
        this.findAllRootTags = this.findAllRootTags.bind(this);
        this.renderTagItems = this.renderTagItems.bind(this);
    }

    componentDidMount() {
        this.findAllRootTags();
    }

    findAllTags() {
        var tags = this.tagService.findAllTags();
        this.setState({tags: tags});
        return tags;
    }
    findAllRootTags() {
        var tags = this.findAllTags();
        var children = [];

        for (var i = 0; i < tags.length; i++) {
            if (tags[i].parent === null) {
                children.push(tags[i]);
            }
        }

        this.setState({
            tags: children
        });
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
                <h4>Tag Root</h4>
                <div className="list-group">
                    {this.renderTagItems()}
                </div>

            </div>
        );
    }
}

