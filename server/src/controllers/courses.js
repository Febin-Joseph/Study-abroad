import Course from "../models/courses.js";

export const courses = async (req, res) => {
    try {
        const courses = await Course.find();
        res.json(courses)

    } catch (err) {
        console.error(err);
        res.status(500).json({ err: err.message });
    }
}

export const uploadCourses = async (req, res) => {
    try {
        const newCourse = new Course(req.body);
        const saveCourse = await newCourse.save();
        res.status(201).json(saveCourse);

    } catch (err) {
        console.error(err);
    res.status(500).json({ err: err.message });
    }
}