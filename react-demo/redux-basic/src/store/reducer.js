const defaultState = {
    inputVal :'this is input value',
    list: ['get up at 4','swim 1 hour']
}  //默认数据
export default (state = defaultState,action)=>{  //就是一个方法函数
    if(action.type === 'CHANGE_INPUT_VALUE'){
        console.log(111)
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputVal = action.value
        return newState
    }
    return state
}