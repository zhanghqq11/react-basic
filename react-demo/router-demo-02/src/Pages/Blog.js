import React from 'react';
import {BrowserRouter as Router, Route ,Link} from 'react-router-dom'
import Money from './Workplace/Money'
import Getup from './Workplace/Getup'

function Blog(){
    return(
        <Router>
            <div className="top">
                <ul>
                    <li><Link to="/blog/money">How to make money</Link></li>
                    <li><Link to="/blog/getup">How to get up</Link></li>
                </ul>
            </div>
            <div className="videoContent">
                <div><h3>This is some blog</h3></div>
                <Route path="/blog/money" component={Money}></Route>
                <Route path="/blog/getup" component={Getup}></Route>
            </div>
        </Router>
    )
}

export default Blog