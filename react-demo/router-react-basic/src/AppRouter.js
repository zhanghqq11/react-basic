import React from 'react';
import {BrowserRouter as Router, Route ,Link} from 'react-router-dom'
import Index from './Pages/index'
import List from './Pages/list'
import Home from './Pages/Home'

// function Index(){
//     return <h2>Main page</h2>
// }

// function List(){
//     return <h2>this is List page</h2>
// }

function AppRouter(){
    return(
        <Router>
            <ul>
                <li> <Link to="/">main</Link> </li>
                <li> <Link to="/list/123">List</Link> </li>
            </ul>
            <Route path="/" exact component={Index} />
            <Route path="/list/:id" component={List} />
            <Route path="/home/" component={Home} />
        </Router>
    )
}

export default AppRouter