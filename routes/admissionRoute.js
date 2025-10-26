const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const admissionSchema = require('../models/admissionSchema')



router.get('/admited-student', async (req, res) => {
    const All_AdmitedStudents = await admissionSchema.find({})

    if (!All_AdmitedStudents) {
        res.status(200).send({ Message: 'No Student are Admited' })
    } else if (All_AdmitedStudents.length == 0) {
        res.status(200).send({ Message: 'No Data' })
    } else {
        res.status(200).send({ message: 'All Admited Data is Loaded Succesfully', All_AdmitedStudents })
    }
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
    const {
            PhotoUrl,
            CoursName,
            CourseType,
            EnglishName,
            BanglaName,
            StudPhone,
            Email,
            Gender,
            BloodGroup,
            NID,
            GurdName,
            GurdRelation,
            GurdPhone,
            FatherName,
            MotherName,
            FullAddress,
            PaymentDetails
        } = req.body

    if (!PhotoUrl) {
        res.status(404).send({ Error: "You have to upload your Photo" })
    } else if (!CoursName) {
        res.status(404).send({ Error: "You have to upload your Course Name" })
    } else if (!CourseType) {
        res.status(404).send({ Error: "You have to upload your Course Type" })
    } else if (!EnglishName) {
        res.status(404).send({ Error: "You have to upload your Fullname in English" })
    } else if (!BanglaName) {
        res.status(404).send({ Error: "You have to upload your Fullname in Bangla" })
    } else if (!StudPhone) {
        res.status(404).send({ Error: "You have to upload your Student Mobile" })
    } else if (!Email) {
        res.status(404).send({ Error: "You have to upload your Student Email" })
    } else if (!Gender) {
        res.status(404).send({ Error: "You have to upload your Gender" })
    } else if (!BloodGroup) {
        res.status(404).send({ Error: "You have to upload your Blood Group" })
    } else if (!NID) {
        res.status(404).send({ Error: "You have to upload your NID Number" })
    } else if (!GurdName) {
        res.status(404).send({ Error: "You have to upload your Guardian Name" })
    } else if (!GurdRelation) {
        res.status(404).send({ Error: "You have to upload your Relation" })
    } else if (!GurdPhone) {
        res.status(404).send({ Error: "You have to upload your Guardian Phone" })
    } else if (!FatherName) {
        res.status(404).send({ Error: "You have to upload your Fathers Name" })
    } else if (!MotherName) {
        res.status(404).send({ Error: "You have to upload your Mothers name" })
    } else if (!FullAddress) {
        res.status(404).send({ Error: "You have to upload your Address" })
    } else if (!PaymentDetails) {
        res.status(404).send({ Error: "You have to upload your Payments Details" })
    } else {

        const StudentData = new admissionSchema({
            photourl:PhotoUrl,
            coursname:CoursName,
            courstype:CourseType,
            fullnameEng: EnglishName,
            fullnameBan:BanglaName,
            studentMobile:StudPhone,
            email:Email,
            gender:Gender,
            bloodGroup:BloodGroup,
            nid:NID,
            guardianName:GurdName,
            guardianRelation:GurdRelation,
            guardianPhone:GurdPhone,
            FathersName:FatherName,
            MothersName:MotherName,
            Address:FullAddress,
            Payments:PaymentDetails
        })
        await StudentData.save();
        res.status(200).send({ Message: `${fullnameEng} your Admission Proccess is Completed. We Will inform you the course Details Soon` })
    }
})

module.exports = router