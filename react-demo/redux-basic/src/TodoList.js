import React, { Component } from 'react';
import { Input, Button, List } from 'antd';
import 'antd/dist/antd.css';
import store from './store'

// const data = ['1hello','second hello','third hello']
class todolist extends Component {
    constructor(props){
        super(props)
        this.state = store.getState()
        console.log(store.getState())
        this.changeValue = this.changeValue.bind(this)
        this.clickAdd = this.clickAdd.bind(this)
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
                <Button onClick={ this.clickAdd() }>add</Button>
            </div>  
            <div style={{margin:'10px',width:'300px'}}>
            <List
                bordered
                dataSource={store.getState().list}
                renderItem={item=>(<List.Item>{item}</List.Item>)}
            />    
            </div>
        </div>
        );
    }

    changeValue(e){
        const action = {
            type: 'CHANGE_INPUT_VALUE',
            value: e.target.value
        }
        store.dispatch(action)
    }

    clickAdd(){
        console.log(111)
        // console.log(store.getState())
    }

    storeChange(){
        this.setState(store.getState())
    }
}
 
export default todolist;