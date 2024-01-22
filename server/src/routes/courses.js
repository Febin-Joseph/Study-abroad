import express from 'express'
import { courses, uploadCourses } from '../controllers/courses.js';

const router = express.Router();

router.get('/courses', courses)
router.post('/uplCourse', uploadCourses)

export default router