import React, { useState,useEffect } from 'react';
import {BrowserRouter as Router, Route, Link}from 'react-router-dom'

function Index(){
    useEffect(() => {
        console.log(`hi you r in Index page`)
    })
    return (
        <div>
        <h3>this is an Index page</h3>
        </div>
    )
}

function List(){
    return (
        <div>
        <h3>this is an List page</h3>
        </div>
    )
}

function Example(){
    const [ age, setAge] = useState(0);
    const [ sex, setSex] = useState('male')
    const [ work, setWork] = useState('front-end developer')
    useEffect(() => {
        console.log(`useeffect call ${age} time`)   
    })

    return(
        <div>
            <p>your age is :{age}</p>
            <p>your sex is :{sex}</p>
            <p>your work is :{work}</p>
            <button onClick={()=>{setAge(age+1)}}>add age</button>
            <Router>
                <ul>
                    <li><Link to="/">main</Link></li>
                    <li><Link to="/List">List</Link></li>
                </ul>
                <Route path="/" exact={true} component={Index}></Route>
                <Route path="/List" component={List}></Route>
            </Router>
        </div>
        
    )
}

export default Example;