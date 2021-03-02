import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Login from './Login'
import AdminIndex from './AdminIndex'

function Main(){
    return (
        <Router>
            <Route path='/login/' exact component={Login}></Route>
            <Route path='/admin/' exact component={AdminIndex}></Route>
        </Router>
    )
}
export default Main