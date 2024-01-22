import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import coursesRoutes from './src/routes/courses.js'

//MIDDLEWARES
const app = express();
app.use(express.json());
app.use(cors({
    origin: ['http://localhost:3000', 'https://studyabroad.vercel.app'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    exposedHeaders: ['Content-Length', 'Content-Type', 'Access-Control-Allow-Origin'],
}));


dotenv.config();

//ROUTES
app.use('/api', coursesRoutes)


//MONGO DB CONNECTION
mongoose.connect(process.env.MONGO_URL, { 
    useNewUrlParser: true,
     useUnifiedTopology: true,
     
})
.then(async () => {
    console.log('MONGO DB connected')
}).catch((err) => console.log(`cant connect because of this error  ${err}`));

//PORT CONNECTION
const port = process.env.PORT
const server = app.listen(port, () => console.log(`server started on ${port}`))