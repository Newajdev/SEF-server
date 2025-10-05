const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()
const ReviewSchema = require("./models/reviewSchema")


const app = express()
const port = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.x1smjlm.mongodb.net/ShahEmdadiaFreelancers?retryWrites=true&w=majority&appName=Cluster0`)
.then(()=>{console.log("Shah Emdadia Freelancers Database is Connected")})

app.get('/reviews', async(req, res)=>{
    const AllReviews = await ReviewSchema.find({})
    if(!AllReviews){
        res.send({NOData: 'no one gives you a Review yet'})
    }
    res.send(AllReviews)
})

app.get('/', (req, res) => {
  res.send("Shah Emdadia Freelancers' Server is Running .............")
})

app.listen(port, () => {
  console.log(`Shah Emdadia Freelancers' Server in Running on port ${port}`)
})
