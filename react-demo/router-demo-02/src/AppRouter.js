import React, { Component } from 'react';
import {BrowserRouter as Router, Route ,Link} from 'react-router-dom'
import axios from 'axios'
import Index from './Pages/Index';
import Video from './Pages/Video';
import Blog from './Pages/Blog';
import './style.css'

class AppRouter extends Component {
    constructor(props){
        super(props);
        this.state = {
            list:[
                {path:'/',title:'fetcherror',exact:true,component:Index},
                {path:'/video/',title:'fetcherror',exact:false,component:Video},
                {path:'/blog/',title:'fetcherror',exact:false,component:Blog}
              ]
        }
    }

    componentDidMount(){
        // first run 'src/mock.js'
        axios.get('http://localhost:9090/api/list/info').then((res)=>{
            console.log(res.data.routeConfig)
            this.setState({list:res.data.routeConfig})
        }).catch((err)=>{
            console.error('can not get list')
        })
    }

    switchComponent(comp){
        let resComp;
        switch(comp){
            case 'Index':
                resComp = Index;
                break;
            case 'Video':
                resComp = Video;
                break;
            case 'Blog':
                resComp = Blog;
                break;
            default:
                return
        }
        return resComp
    }
    render(){
        return(
            <Router>
                <div className='main'>
                    <div className="left">
                        <h3>First Nav</h3>
                        <ul>
                            {
                                this.state.list.map((item,index) => {
                                return (<li key={index}><Link to={item.path}>{item.title}</Link></li>)
                                })
                            }
                        </ul>
                    </div>
                    <div className="right">
                        {
                            this.state.list.map((item,index) => {
                                return (<Route key={index} exact={item.exact} path={item.path} component={this.switchComponent(item.component)}></Route>)
                            })
                        }
                    </div>
                </div>
            </Router>
        )
    }
}

export default AppRouter;