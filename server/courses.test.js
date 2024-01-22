

describe('Courses API', () => {
  it('should retrieve courses for positive scenario', async () => {
    const response = await Request(app).get('/api/courses');
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);j
  });

  it('should handle invalid requests for negative scenario', async () => {
    const response = await Request(app).post('/api/uplCourse').send({});
    expect(response.status).toBe(500);
    expect(response.body).toHaveProperty('error');
  });
});
