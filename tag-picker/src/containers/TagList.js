import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import TagService from "../services/TagService";
import Tag from './../components/Tag'

export default class TagList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tags: [],
            selectedTags: []
        };
        this.tagService = TagService.instance;
        this.findAllTags = this.findAllTags.bind(this);
        this.renderTagItems = this.renderTagItems.bind(this);
    }

    componentDidMount() {
        this.findAllTags();
    }

    findAllTags() {
        var tags = this.tagService.findAllTags();
        this.setState({tags: tags});
    }

    renderTagItems() {
        let taglist = null;
        if(this.state) {
            taglist = this.state.tags.map((tag, id) => {
               return <div key={id}> <Tag item={tag}/></div>
             })
        }
        return (
            taglist
        )
    }
    render() {
        return (
            <div className="container-fluid">
                <div className="list-group">
                    {this.renderTagItems()}
                </div>

            </div>
        );
    }
}

