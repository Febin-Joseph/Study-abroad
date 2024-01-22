import mongoose from "mongoose";

const coursesSchema = new mongoose.Schema({
    company: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        default: 'https://thebeingabroad.com/static/media/grace.a23c8be9bd2e5e7d56ed.png'
    },
    course: {
        type: String,
        required: true,
    },
    duration: {
        type: Number,
        required: true,
    },
    description: {
        type: [String],
        required: true,
    },
})

const Course = mongoose.model('Courses', coursesSchema);

export default Course;