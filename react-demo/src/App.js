  import React, { Component } from 'react';
  import './style.css';
  import Appitem from './AppItem';
  
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
                  <input id="test1" className="inputbox-add-service" value={ this.state.inputValue} onChange={this.inputChange.bind(this)} />
                  <button onClick={this.addList.bind(this)}>增加选项</button>
                  <ul>
                      {
                          this.state.list.map((item,index)=>{
                              return (
                                  <div>
                                      <Appitem content={ item}></Appitem>
                                  </div>
                              )
                          })
                      }
                  </ul>
              </div>
            );
      }

      //单向数据流绑定.
      inputChange(e){
        //   console.log(e.target.value)
          this.setState({
              inputValue: e.target.value
          })
      }

      //改list数组
      addList(){
          this.setState({
              //扩展运算符...
              list:[...this.state.list,this.state.inputValue]
          })
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