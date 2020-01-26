import { ADD_INPUTVAL_TO_LIST, CHANGE_INPUT_VALUE, DELETE_ITEM_IN_LIST_INDEX} from '../store/actionType'

const defaultState = {
    inputVal :'this is input value',
    list: ['get up at 4','swim 1 hour']
}  //默认数据
// reducer必须是一个纯函数，它的返回结果，是完全由传入的参数state和action决定的。比如里面不能接接口收数据。
export default (state = defaultState,action)=>{  //就是一个方法函数
    if(action.type === CHANGE_INPUT_VALUE){
        let newState = JSON.parse(JSON.stringify(state)) // 深拷贝
        newState.inputVal = action.value
        return newState
    }
    if(action.type === ADD_INPUTVAL_TO_LIST){
        console.log("add")
        let addedState = JSON.parse(JSON.stringify(state))
        addedState.list.push(action.value)
        return addedState
    }
    if(action.type === DELETE_ITEM_IN_LIST_INDEX){
        console.log("delete")
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index,1)
        return newState
    }
    return state
}