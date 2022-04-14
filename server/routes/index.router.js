const express = require('express');
const router = express.Router();

const userController = require('../controllers/user.controller');
const examController = require('../controllers/exam.controller');
const emailController = require('../controllers/email.controller');

const jwtHelper = require('../config/jwtHelper');

router.post('/register', userController.register);
router.post('/authenticate', userController.authenticate);
router.get('/userProfile', jwtHelper.verifyJwtToken ,userController.userProfile);
router.post('/createExam', examController.create);
router.get('/exams/:id', examController.retrieve);
router.get('/exam/:id', examController.singleExamInfo);
router.put('/exam/:id', examController.updateInfo);
router.delete('/exams/:id', examController.deleteExam);
router.put('/joinExam/:id', examController.joinExam);
router.get('/student/exams/:id', examController.getStudentExams);
router.put('/student/exams/:id', examController.removeParcipant);
router.post('/invite', emailController.sendMail)

module.exports = router;

// {
//     "examName": "exam1",
//     "startTime": "09.30",
//     "duration": 120,
//     "teacherID": "1234",
//     "examDate": "1 May 2020",
//     "message": ""
// }