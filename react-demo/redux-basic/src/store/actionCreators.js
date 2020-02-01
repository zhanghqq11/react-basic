import { ADD_INPUTVAL_TO_LIST, CHANGE_INPUT_VALUE, DELETE_ITEM_IN_LIST_INDEX, GET_LIST} from '../store/actionType'
import axios from 'axios'

export const changeInputAction = (value)=>({
    type:CHANGE_INPUT_VALUE,
    value 
})

export const addItemAction = (value)=>({
    type:ADD_INPUTVAL_TO_LIST,
    value
})

export const deleteItemAction = (index)=>({
    type:DELETE_ITEM_IN_LIST_INDEX,
    index
})

export const getListAction = (data)=>({
    type: GET_LIST,
    data
})

export const getTodoListMiddle = ()=>{
    return (dispatch)=>{
        axios.get('http://localhost:9001/api/user/info').then((res)=>{
            const data = res.data.data
            const action = getListAction(data)
            dispatch(action)
        })
    }
}