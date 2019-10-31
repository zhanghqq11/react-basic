import React, { Component } from 'react';

class AppItem extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }

    render() { 
        return (
            <li onClick={this.handleClick}>{this.props.content}</li>
          );
    }

    handleClick() {
       this.props.deleteItem(this.props.index);
    }
}

AppItem.PropTypes={
    content: PropTypes.string,
    deleteItem: PropTypes.func,
    index: PropTypes.number
  }

export default AppItem;