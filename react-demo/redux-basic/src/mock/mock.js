const express = require('express')
const app = express()

app.get('/api/user/info',(req,res)=>{
    res.header('Access-Control-Allow-Origin','*')
    res.header('Access-Control-Allow-Methods','GET,POST,PUT')
    res.header('Content-Type','application/json;charset=utf-8')
    res.json({
        code:0,
        data:[
            {name:"web",best:'best_etc'}
        ]
    })
})

app.listen(9001,()=>{
    console.log('api test ready')
})