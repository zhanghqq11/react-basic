import React, { Component } from 'react';
import 'antd/dist/antd.css';
import TOdolistUI from './TodoListUI';
import store from './store'
// import { ADD_INPUTVAL_TO_LIST, CHANGE_INPUT_VALUE, DELETE_ITEM_IN_LIST_INDEX} from './store/actionType'
import { getTodoListMiddle, changeInputAction, addItemAction, deleteItemAction} from './store/actionCreators'

// const data = ['1hello','second hello','third hello']
class todolist extends Component {
    constructor(props){
        super(props)
        this.state = store.getState()
        console.log(store.getState())
        // 绑定
        this.changeValue = this.changeValue.bind(this)
        this.clickAdd = this.clickAdd.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
        this.storeChange = this.storeChange.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
        store.subscribe(this.storeChange)
        // store.Button(this.changeValue)
    }
    render() { 
        return (
            <TOdolistUI
            inputVal={this.state.inputVal}
            changeValue={this.changeValue}
            clickAdd={this.clickAdd}
            list={this.state.list}
            deleteItem = {this.deleteItem}
            />
        );
    }

    componentDidMount(){
        const action = getTodoListMiddle()
        store.dispatch(action)
    }

    changeValue(e){
        const action = changeInputAction(e.target.value)
        store.dispatch(action)
    }

    clickAdd(){
        const action = addItemAction(this.state.inputVal)
        store.dispatch(action)
        console.log(this.state.inputVal)
        // console.log(store.getState())
    }

    storeChange(){
        this.setState(store.getState())
    }

    deleteItem(index){
        // 自己随便想的错误代码，reducer中发现要写删除，想到了index。
        // const action = {
        //     type: 'DELETE_ITEM_IN_LIST',
        //     value: e.target.innerText
        // }
        // store.dispatch(action)
        const action = deleteItemAction(index)
        store.dispatch(action)
        console.log(index)
    }
}
 
export default todolist;