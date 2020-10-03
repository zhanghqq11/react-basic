import React, { useReducer } from 'react';

function reducer(state, action){
    switch(action.type) {
        case 'add':
            return {count: state.count + 1}
        case 'decrement':
            return {count: state.count -1}
        default:
            throw new Error();
    }
}
function ReducerDemo(){
    const [] = useReducer()
}