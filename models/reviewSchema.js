const mongoose = require('mongoose')
const { Schema } = mongoose;

const reviewSchema = new Schema({
    photourl: {
        type: String,
        required:true
    },
    fullname: {
        type: String,
        required:true
    },
    coursname: {
        type: String,
        required:true
    },
    
    review:{
        type: String,
        required:true
    },
});

module.exports=mongoose.model('review', reviewSchema);