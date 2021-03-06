import React, {Component} from 'react';

export default class TagElement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            isFolder: false,
            parent: null,
            ancestors: []
        };
        this.handleClick = this.handleClick.bind(this);
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

    handleClick(e) {
        this.props.handleCheck(this.props.item._id);
    }

    render() {
        return (
            <div className="row">
                <a href="#" className="list-group-item list-group-item-action">
                    <div className="checkbox"
                         style={{paddingLeft:15}}>
                        <label><input type="checkbox"
                                      checked={this.props.selected}
                                      onClick={this.handleClick}/>
                            {this.props.item.name}</label>
                    </div>
                </a>
            </div>
        )
    }
}
