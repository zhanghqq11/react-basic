import React from 'react';
import {BrowserRouter as Router, Route ,Link} from 'react-router-dom'
import ReactVideo from './Video/ReactVideoPages'
import VueVideo from './Video/VueVideoPages'
import FlutterVideo from './Video/FlutterVideoPages'

function Video(){
    return (
        <Router>
            <div className='top'>
                <ul>
                    <li><Link to="/video/reactVideo">React tutorial</Link></li>
                    <li><Link to="/video/VueVideo">Vue tutorial</Link></li>
                    <li><Link to="/video/flutterVideo">Flutter tutorial</Link></li>
                </ul>
            </div>
            <div className="videoContent">
                <div><h3>video tutorial</h3></div>
                <Route path="/video/reactVideo" component={ ReactVideo }></Route>
                <Route path="/video/VueVideo" component={ VueVideo }></Route>
                <Route path="/video/flutterVideo" component={ FlutterVideo }></Route>
            </div>
        </Router>
    )
}

export default Video