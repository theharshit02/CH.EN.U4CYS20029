const express = require("express")
const axios = require("axios")
const app = express()
const request = require('request');

const port = process.env.PORT || 3000
const host = process.env.HOST || "localhost"

const header = {
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTI0MjM0NzksImNvbXBhbnlOYW1lIjoiVHJhaW4gRGV0YWlscyIsImNsaWVudElEIjoiY2FjNjYzZjYtOGExMi00NjdmLWFhYzUtMDc4YTFlMDdkOGNiIiwib3duZXJOYW1lIjoiIiwib3duZXJFbWFpbCI6IiIsInJvbGxObyI6IkNILkVOLlU0Q1lTMjAwMjkifQ.e4R38xCGjVxPUR5F2Rc_jq50NbWWBdCBRdUiKvr6zY0'
}

app.get("/getTrain", function(req, res){
    axios.get('http://20.244.56.144/train/trains', { header }).then(response=>{
        console.log(response.data)
    })
    res.send("hello")
})

app.listen(port, function(err){
    if(err){
        console.log(err)
    }
    else{
        console.log(`Listening on ${host}:${port}`)
    }
})