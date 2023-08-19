const express = require("express")
const axios = require("axios")
const app = express()
const request = require('request');

const port = process.env.PORT || 3000
const host = process.env.HOST || "localhost"

const config = {
    headers : {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTI0Mjc1MDIsImNvbXBhbnlOYW1lIjoiVHJhaW4gRGV0YWlscyIsImNsaWVudElEIjoiY2FjNjYzZjYtOGExMi00NjdmLWFhYzUtMDc4YTFlMDdkOGNiIiwib3duZXJOYW1lIjoiIiwib3duZXJFbWFpbCI6IiIsInJvbGxObyI6IkNILkVOLlU0Q1lTMjAwMjkifQ.NAsLMcCyevbgPxBEvycRqg89kEimVtBdvfmA5W6JKPI'
    }
  };


app.get("/getTrain", function(req, res){
    axios.get('http://20.244.56.144/train/trains', config ).then(response=>{
        const data = response.data

        sleeper = data.sort((a,b)=>{
            if(a.price.sleeper < b.price.sleeper){
                return -1
            }
        })

        ac = data.sort((a,b)=>{
            if(a.price.AC < b.price.AC){
                return -1
            }
        })

        acTix = data.sort((a,b)=>{
            if(a.seatsAvailable.AC > b.seatsAvailable.AC){
                return -1
            }
        })

        sleeperTix = data.sort((a,b)=>{
            if(a.seatsAvailable.sleeper > b.seatsAvailable.sleeper){
                return -1
            }
        })
    
        res.send(acTix)
    })

    
})

app.listen(port, function(err){
    if(err){
        console.log(err)
    }
    else{
        console.log(`Listening on ${host}:${port}`)
    }
})