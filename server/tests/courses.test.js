import request from 'supertest';
import app from '../index';

//Fetches data from API GET request
describe('Courses API', () => {
    describe('GET /api/courses', () => {
        it('should retrieve courses successfully', async () => {
            const response = await request(app).get('/api/courses');
            expect(response.status).toBe(200);//It needed to be 200
            expect(response.body).toBeInstanceOf(Object);//getting that will be in and Object format
        });
    });

    //POSITIVE SCENARIO
    //Posting data to API using POST method
    describe('POST /api/uplCourse', () => {
        it('should upload a new course successfully', async () => {
            const newCourse = {
                company: 'Test Company',
                location: 'Test Location',
                image: 'https://test-image.com',
                course: 'Test Course',
                duration: 10,
                description: ['Test Description'],
            };

            const response = await request(app)
                .post('/api/uplCourse')//setting url
                .send(newCourse);//uploading data to that url

            expect(response.status).toBe(201);//this request needed to be 201 means (created)
            expect(response.body).toHaveProperty('_id');//if created checking for _id property
        });


        //NEGATIVE SCENARIO
        //Passing invalid data
        it('should handle validation errors when uploading a new course', async () => {
            const invalidCourse = {
                company: 'beingabroad',//now here the test passes because all other required fields are unavailable so 500 error
            };

            const response = await request(app)
                .post('/api/uplCourse')
                .send(invalidCourse);//Uploading data without required fields

            expect(response.status).toBe(500);//that data should be 500
            expect(response.body).toHaveProperty("err");//And sure will have err property with the message
        }, 10000);
    });
});