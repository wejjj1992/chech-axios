const express=require("express");
const axios=require("axios");
const app=express();
const port=3000

const api1='http://api.openweathermap.org/data/2.5/weather?q=canada&appid=a952537d6fc601fc1a7b01dd245e2408'
const api2='http://api.openweathermap.org/data/2.5/weather?q=tunis&appid=a952537d6fc601fc1a7b01dd245e2408'
const api3='http://api.openweathermap.org/data/2.5/weather?q=madrid&appid=a952537d6fc601fc1a7b01dd245e2408'


app.get('/Canada',(req,res)=>{
    axios.get(api1)
    .then(response=>res.send(response.data))
    .catch(err=>console.log(err))
})
app.get('/Tunis',(req,res)=>{
    axios.get(api2)
    .then(response=>res.send(response.data))
    .catch(err=>console.log(err))
})
app.get('/Madrid',(req,res)=>{
    axios.get(api3)
    .then(response=>res.send(response.data))
    .catch(err=>console.log(err))
})



app.listen(port,error=>{
    if(error)console.log(err)
    else console.log(`server is connected on port ${port}`)
});

