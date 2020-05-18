import React, { useState, createContext, useContext} from 'react';

const CountContext = createContext()

function Counter(){
    const count = useContext(CountContext)
    return (
    <h2>{count}</h2>
    )
}

function Example(){
    const [ age, setAge] = useState(0);
    const [ sex, setSex] = useState('male')
    const [ work, setWork] = useState('front-end developer')

    return(
        <div>
            <p>your age is :{age}</p>
            <p>your sex is :{sex}</p>
            <p>your work is :{work}</p>
            <button onClick={()=>{setAge(age+1)}}>add age</button>
            
            <CountContext.Provider value={age}>
                <Counter/>
            </CountContext.Provider>
        </div>
        
    )
}

export default Example;