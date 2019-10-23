import React, { Component } from 'react';

class AppItem extends Component {
    render() { 
        return (
            <li>{this.props.content}</li>
          );
    }
}
 
export default AppItem;