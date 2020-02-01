const defalutState = {
    inputValue : 'hqizhang',
    list :[]
}

export default (state = defalutState,action) =>{
    if(action.type==='INPUT_CHANGE'){
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }

    if(action.type ==='ADD_ITEM'){
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
        return newState
    }
    return state
}