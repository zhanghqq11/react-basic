  import React, { Component } from 'react';
  import './style.css';
  import Appitem from './AppItem';
  import PropTypes from 'prop-types';
  
  class xjj extends Component {
      constructor(props){
        super()
        this.state = { 
            inputValue:"",
            list:["基础","精油","third"]
        }
      }
      render() { 
          return (
              <div>
                  <label htmlFor="test1">增加</label>
                  <input 
                    id = "test1" 
                    className = "inputbox-add-service" 
                    value = { this.state.inputValue} 
                    onChange = {this.inputChange.bind(this)} 
                    ref = {(inputBoxValue)=>{this.input = inputBoxValue}}/>
                  <button onClick={this.addList.bind(this)}>增加选项</button>
                  <ul ref={(ul)=>{this.ul=ul}}>
                      {
                          this.state.list.map((item,index)=>{
                              return (
                                  <Appitem 
                                  key={item + index}
                                  index = {index} 
                                  content={ item}
                                  deleteItem = {this.deleteItem.bind(this)}
                                  />
                              )
                          })
                      }
                  </ul>
              </div>
            );
      }

      // 数据绑定.
      inputChange(e){
        //   console.log(e.target.value)
          this.setState({
              inputValue: this.input.value
          })
      }

      // 改list数组
      addList(){
          this.setState({
              //扩展运算符...
              list:[...this.state.list,this.state.inputValue]
          })
          console.log(this.ul.querySelectorAll('div').length)
      }

      deleteItem(index){
          let listVar = this.state.list
          console.log(index)
          listVar.splice(index,1)
          this.setState({
              list : listVar
          })
      }
  }
   

  export default xjj;