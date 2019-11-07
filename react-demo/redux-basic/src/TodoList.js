import React, { Component } from 'react';
import { Input, Button, List } from 'antd';
import 'antd/dist/antd.css';
import store from './store'

// const data = ['1hello','second hello','third hello']
class todolist extends Component {
    constructor(props){
        super(props);
        console.log(store.getState())
    }
    render() { 
        return (
        <div>
            <div>
                <Input placeholder= {store.getState().inputVal} style={{width:'200px'}}/>
                <Button>add</Button>
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
}
 
export default todolist;