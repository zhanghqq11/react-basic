const express = require('express')
const app = express()

app.get('/api/user/info',(req,res)=>{
    res.header('Access-Control-Allow-Origin','*')
    res.header('Access-Control-Allow-Methods','GET,POST,PUT')
    res.header('Content-Type','application/json;charset=utf-8')
    res.json({
        "data": {
          "list": [
            'get up at 4AM',
            'swim one hour at noon',
            'study 2 hours at 8 to 10'
          ]
        }
      })
})

app.listen(9001,()=>{
    console.log('api test ready')
})