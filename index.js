const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.send("Thank you for sending response")
})
app.listen(3000,()=>console.log("Listing port 3000"))