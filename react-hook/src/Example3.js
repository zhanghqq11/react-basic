import React, { useState, createContext, useContext } from 'react';

const countContext = createContext();

function Counter(){
    const count = useContext(countContext)
    return(<h3>{count}</h3>)
}

function Example4(){
    const [ count , setCount ] = useState(0);
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={()=>{setCount(count+1)}}>click me</button>
            <countContext.Provider value={count}>
                <Counter/>
            </countContext.Provider>
        </div>
    )
}
export default Example4;