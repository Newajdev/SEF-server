const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const admissionSchema = require('../models/admissionSchema')



router.get('/admited-student', async (req, res) => {
    const All_AdmitedStudents = await admissionSchema.find({})

    if (!All_AdmitedStudents) {
        res.status(200).send({ Message: 'No Student are Admited' })
    } else (
        res.status(200).send({ message: 'All Admited Data is Loaded Succesfully', All_AdmitedStudents })
    )
})

router.get('/admited-student/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const findStudent = req.body;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid Student ID format" });
        }

        const StudentsDetails = await admissionSchema.findById(id)

        if (!StudentsDetails) {
            res.status(404).send({ Message: 'Invalid Student ID' })
        } else {
            res.status(200).send({ Message: 'Students info Loaded Succesfully' })
        }

    } catch (err) {
        res.status(500).json({ error: "Server error", err });
    }
})

router.post('/new-admission', async (req, res) => {
    const { photourl, coursname, fullnameEng, fullnameBan,
        studentMobile, email,
        gender, bloodGroup, nid, guardianName, guardianRelation, guardianPhone, FathersName, MothersName, Address, Payments
    } = req.body

    if (!photourl) {
        res.status(404).send({ Error: "You have to upload your Photo" })
    } else if (!coursname) {
        res.status(404).send({ Error: "You have to upload your Course Name" })
    } else if (!fullnameEng) {
        res.status(404).send({ Error: "You have to upload your Fullname in English" })
    } else if (!fullnameBan) {
        res.status(404).send({ Error: "You have to upload your Fullname in Bangla" })
    } else if (!studentMobile) {
        res.status(404).send({ Error: "You have to upload your Student Mobile" })
    } else if (!email) {
        res.status(404).send({ Error: "You have to upload your Student Email" })
    } else if (!gender) {
        res.status(404).send({ Error: "You have to upload your Gender" })
    } else if (!bloodGroup) {
        res.status(404).send({ Error: "You have to upload your Blood Group" })
    } else if (!nid) {
        res.status(404).send({ Error: "You have to upload your NID Number" })
    } else if (!guardianName) {
        res.status(404).send({ Error: "You have to upload your Guardian Name" })
    } else if (!guardianRelation) {
        res.status(404).send({ Error: "You have to upload your Relation" })
    } else if (!guardianPhone) {
        res.status(404).send({ Error: "You have to upload your Guardian Phone" })
    } else if (!FathersName) {
        res.status(404).send({ Error: "You have to upload your Fathers Name" })
    } else if (!MothersName) {
        res.status(404).send({ Error: "You have to upload your Mothers name" })
    } else if (!Address) {
        res.status(404).send({ Error: "You have to upload your Address" })
    } else if (!Payments) {
        res.status(404).send({ Error: "You have to upload your Payments Details" })
    } else {
        res.status(200).send({Message: `${fullnameEng} your Admission Proccess is Completed. We Will inform you the course Details Soon`})
    }
})

module.exports=router