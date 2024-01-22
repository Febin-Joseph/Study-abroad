import request from 'supertest';
import mongoose from 'mongoose';
import app from '../index';  // Assuming your main server file is named 'index.js'

// Use an in-memory MongoDB server for testing
const { MongoMemoryServer } = require('mongodb-memory-server');

let mongoServer;

beforeAll(async () => {
  mongoServer = new MongoMemoryServer();
  const mongoUri = await mongoServer.getUri();
  await mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

describe('Courses API', () => {
  it('should get all courses', async () => {
    const response = await request(app).get('/api/courses');
    expect(response.status).toBe(200);
    // Add more assertions based on your specific response format
  });

  it('should upload a new course', async () => {
    const newCourse = {
      // Add your new course data here
    };

    const response = await request(app).post('/api/uplCourse').send(newCourse);
    expect(response.status).toBe(201);
    // Add more assertions based on your specific response format
  });
});
