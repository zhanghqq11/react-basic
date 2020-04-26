import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list:[
                {sid:1,title:'this is blog no.1'},
                {sid:2,title:'this is blog no.2'},
                {sid:3,title:'this is blog no.3'}
            ]
          }
        this.props.history.push("/home/")
    }
    render() { 
        return (
            <div>
                <h2>hqizhang</h2>
                <ul>
                    {
                        this.state.list.map((item, index) =>{
                            return (
                            <li key={Index}>
                                <Link to={'/list/'+item.sid}>
                                    {item.title}
                                </Link>
                            </li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}
 
export default Index;