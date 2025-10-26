const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const ReviewSchema = require("../models/reviewSchema")

router.get('/reviews', async (req, res) => {
    const AllReviews = await ReviewSchema.find({})
    if (!AllReviews) {
        res.send({ NOData: 'no one gives you a Review yet' })
    }
    res.send(AllReviews)
})
router.post('/reviews', async (req, res) => {
    const { PhotoUrl, FullName, CoursName, Review } = req.body;

    if (!PhotoUrl) {
        res.send({ Message: 'Please upload your Profile Image' })
    } else if (!FullName) {
        res.send({ Message: 'Please write your Full Name' })
    } else if (!CoursName) {
        res.send({ Message: 'Please write your Course Name' })
    } else if (!Review) {
        res.send({ Message: 'Please write your Reviews' })
    } else {
        const senderReview = new ReviewSchema({
            photourl: PhotoUrl,
            fullname: FullName,
            coursname: CoursName,
            review: Review
        })
        await senderReview.save();
        res.send({ Message: `${FullName} your review is added succesfully..` })
    }
})

module.exports = router