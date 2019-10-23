  import React, { Component } from 'react';
  
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
                  <input value={ this.state.inputValue} onChange={this.inputChange.bind(this)} />
                  <button onClick={this.addList.bind(this)}>增加选项</button>
                  <ul>
                      {
                          this.state.list.map((item,index)=>{
                              return <li key={item + index}>{ item}</li>
                          })
                      }
                  </ul>
              </div>
            );
      }

      //单向数据流绑定.
      inputChange(e){
          console.log(e.target.value)
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
  }
   
  export default xjj;