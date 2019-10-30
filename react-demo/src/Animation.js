import React, { Component } from 'react';
class Animation extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isShow: true
         }
    }
    render() { 
        return ( 
            <div className={this.state.isShow ? 'show':'hide'}>
                <div>boss级</div>
                <div><button>召唤</button></div>
            </div>
         );
    }
}
 
export default Animation;