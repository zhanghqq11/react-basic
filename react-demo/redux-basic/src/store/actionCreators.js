import { ADD_INPUTVAL_TO_LIST, CHANGE_INPUT_VALUE, DELETE_ITEM_IN_LIST_INDEX} from '../store/actionType'

export const changeInputAction = (value)=>({
    type:ADD_INPUTVAL_TO_LIST,
    value 
})

export const addItemAction = (value)=>({
    type:CHANGE_INPUT_VALUE,
    value 
})

export const deleteItemAction = (index)=>({
    type:DELETE_ITEM_IN_LIST_INDEX,
    index
})