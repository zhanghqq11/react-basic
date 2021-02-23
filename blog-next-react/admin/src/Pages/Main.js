import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Login from './Login'
import AdminIndex from './AdminIndex'
import AddArticle from './AddArticle'

function Main(){
    return (
        <Router>
            <Route path='/login/' exact component={Login}></Route>
            <Route path='/admin/' exact component={AdminIndex}></Route>
            <Route path='/index/' exact component={AddArticle}></Route>
        </Router>
    )
}
export default Main