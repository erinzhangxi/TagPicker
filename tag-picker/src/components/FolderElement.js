import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class FolderElement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            isFolder: false,
            parent: null,
            ancestors: []
        };
    }
    componentDidMount() {
        let tag = this.props.item;
        this.setState({
            id: tag.id,
            name: tag.name,
            isFolder: tag.isFolder,
            parent: tag.parent,
            ancestors: tag.ancestors
        });
    }
    render() {
        return (
            <div className="row">

                <a href="#" className="list-group-item list-group-item-action">
                    <div className="col-11">
                        <i className="fa fa-folder" aria-hidden="true"
                           style={{paddingRight: 10}}></i>
                        <Link to={`/${this.props.item._id}`}>
                            Tag {this.props.item.name}
                        </Link>
                    </div>
                    <div className="col-1">
                        <i className="fa fa-angle-right"
                           aria-hidden="true"></i>
                    </div>
                </a>
            </div>
        )
    }

}
