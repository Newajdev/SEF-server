const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()
const Review = require('./routes/reviewRouter')
const Admission = require('./routes/admissionRoute')


const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.x1smjlm.mongodb.net/ShahEmdadiaFreelancers?retryWrites=true&w=majority&appName=Cluster0`)
.then(()=>{console.log("Shah Emdadia Freelancers Database is Connected")})

app.use('/api/admission', Admission)
app.use('/api/reviews', Review)



app.get('/', (req, res) => {
  res.send("Shah Emdadia Freelancers' Server is Running .............")
})

app.listen(port, () => {
  console.log(`Shah Emdadia Freelancers' Server in Running on port ${port}`)
})
