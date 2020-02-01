import React from 'react';
import {connect} from 'react-redux'

const TodoList = (props) =>{
    let {inputValue,inputChange,clickButton,list} = props;
        return (
        <div>
            <div>
                <input value={inputValue} onChange={inputChange}/>
                <button onClick={clickButton}>submit</button>
            </div>
            <ul>
                {
                    list.map((item,index)=>{
                    return(<li key={index}>{item}</li>)
                    })
                }
            </ul>
        </div> 
        );

}
 
const StateToProps = (state) =>{
    return ({
        inputValue:state.inputValue,
        list:state.list
    })
}

const dispatchToProps = (dispatch)=>{
    return {
        inputChange(e){
            console.log()
            let action ={
                type:'INPUT_CHANGE',
                value:e.target.value
            }
            dispatch(action)
        },
        clickButton(){
            let action = {
                type:'ADD_ITEM'
            }
            dispatch(action)
        }
    }
}
export default connect(StateToProps,dispatchToProps)(TodoList);