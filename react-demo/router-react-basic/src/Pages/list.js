import React, { Component } from 'react';
class List extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <h2>page {this.state.id}</h2> );
    }
    componentDidMount(){
        console.log(this.props.match)
        let tempId = this.props.match.params.id
        this.setState({id:tempId})
    }
}
 
export default List;