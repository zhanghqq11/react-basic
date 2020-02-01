import React, { Component } from 'react';
import 'antd/dist/antd.css'
import { Input,Button,List } from 'antd';

class TodoListUI extends Component {
    render() { 
        return ( 
         <div>
            <div>
                <Input 
                placeholder= {this.props.inputVal} 
                style = {{width:'200px'}}
                onChange = {this.props.changeValue}
                />
                <Button onClick={ this.props.clickAdd }>add</Button>
            </div>  
            <div style={{margin:'10px',width:'300px'}}>
            <List
                bordered
                dataSource={this.props.list}
                renderItem={(item,index)=>(
                <List.Item onClick={(index)=>{this.props.deleteItem(index)}}>{item}</List.Item>)}
            />    
            </div>
        </div>
        );
    }
}
 
export default TodoListUI;