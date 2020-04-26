const expree = require('express')
const app = expree()

app.get('/api/list/info',(req,res)=>{
    //支持跨域调用
    res.header('Access-Control-Allow-Origin','*')
    res.header('Access-Control-Allow-Methods','GET,POST,PUT')
    res.header('Content-Type','application/json;charset=utf-8')
    res.json({
        code:0,
        routeConfig:[
            {path:'/',title:'Main',exact:true,component:'Index'},
            {path:'/video/',title:'Video',exact:false,component:'Video'},
            {path:'/blog/',title:'Blog',exact:false,component:'Blog'}
        ]
    })
})

app.listen(9090,()=>{
    console.log("test api ready")
})