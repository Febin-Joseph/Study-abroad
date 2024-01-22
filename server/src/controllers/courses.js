import Course from "../models/courses.js";

export const courses = async (req, res) => {
    try {
        const courses = await Course.find();
        res.json(courses);

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
}

export const uploadCourses = async (req, res) => {
    try {
        const newCourse = new Course(req.body);
        const saveCourse = await newCourse.save();
        res.status(201).json(saveCourse);

    } catch (error) {
        console.error(error);
    res.status(500).json({ error: error.message });
    }
}