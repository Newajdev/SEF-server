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
app.post('/reviews', async (req, res)=>{
    const {PhotoUrl, FullName, CoursName, Review} = req.body;

    if(!PhotoUrl){
        res.send({Message: 'Please upload your Profile Image'})
    } else if(!FullName){
        res.send({Message: 'Please write your Full Name'})
    }else if(!CoursName){
        res.send({Message: 'Please write your Course Name'})
    }else if(!Review){
        res.send({Message: 'Please write your Reviews'})
    }else{
        const senderReview = new ReviewSchema({
            photourl:PhotoUrl,
            fullname:FullName,
            coursname:CoursName,
            review:Review
        })
        await senderReview.save();
        res.send({Message: `${FullName} your review is added succesfully..`})
    }
})

app.get('/', (req, res) => {
  res.send("Shah Emdadia Freelancers' Server is Running .............")
})

app.listen(port, () => {
  console.log(`Shah Emdadia Freelancers' Server in Running on port ${port}`)
})
