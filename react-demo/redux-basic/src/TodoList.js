import React, { Component } from 'react';
import { Input, Button, List } from 'antd';
import 'antd/dist/antd.css';
import store from './store'
// import { ADD_INPUTVAL_TO_LIST, CHANGE_INPUT_VALUE, DELETE_ITEM_IN_LIST_INDEX} from './store/actionType'
import { changeInputAction, addItemAction, deleteItemAction} from './store/actionCreators'

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
        store.subscribe(this.storeChange)
    }
    render() { 
        return (
        <div>
            <div>
                <Input 
                placeholder= {store.getState().inputVal} 
                style = {{width:'200px'}}
                onChange = {this.changeValue}
                />
                <Button onClick={ this.clickAdd }>add</Button>
            </div>  
            <div style={{margin:'10px',width:'300px'}}>
            <List
                bordered
                dataSource={store.getState().list}
                renderItem={(item,index)=>(
                <List.Item onClick={this.deleteItem.bind(this, index)}>{item}</List.Item>)}
            />    
            </div>
        </div>
        );
    }

    changeValue(e){
        const action = changeInputAction(e.target.value)
        store.dispatch(action)
    }

    clickAdd(){
        const action = addItemAction(this.state.inputVal)
        store.dispatch(action)
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