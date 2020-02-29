import React from 'react';
import {BrowserRouter as Router, Route ,Link} from 'react-router-dom'
import Index from './Pages/index'
import List from './Pages/list'
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
                <li> <Link to="/list/">List</Link> </li>
            </ul>
            <Route path="/" exact component={Index} />
            <Route path="/list/" component={List} />
        </Router>
    )
}

export default AppRouter