# 🚀 Study Abroad Platform

Welcome to the Study Abroad platform! Embark on a journey of discovery and education as we navigate the intricacies of studying abroad. This project represents a fusion of cutting-edge technologies and thoughtful design to create an immersive and user-friendly experience.

# 🌐 Key Features:

**Innovative Technologies:** Immerse yourself in a tech stack that includes ReactJS for a dynamic frontend, Node.js and Express for a robust backend, and MongoDB to store and retrieve program data efficiently.

**Containerized Deployment:** Experience seamless deployment with Docker, ensuring a consistent and scalable environment across different systems.

**Responsive Design:** Enjoy a visually appealing and responsive user interface crafted with Tailwind CSS and enhanced with DaisyUI for additional UI components.

**Testing Excellence:** Dive into a comprehensive testing suite, covering both frontend and backend functionalities. Utilize tools like Jest and React Testing Library to ensure a reliable and bug-free application.

# 🏗️ Project Structure:

- **client:** Explore the frontend codebase, featuring React components and configurations.
- **server:** Navigate through the backend codebase, powered by Node.js and Express, interacting with a mock MongoDB database.

# ⚙️ Start Project 

## Frontend

- use cd to navigate to Client side and use `cd client` from the root directory
- And after that for starting use `npm start` command and the port will be avilable on `localhost:3000`

## Backend
- use cd to navigate to Backend side and use `cd server` from the root directory
- Then use docker for building and starting port for that follow the steps
   ## Build using :
  ```bash docker build -t studyabroad .```
   ## Run using :
  ```bash docker run -p 8080:8080 studyabroad```


# 🚦 Functional Testing:

## Frontend

- Written and executed functional tests for critical user interactions using React Testing Library.
- Ensure tests cover positive and negative scenarios, ensuring a robust user experience.

To run the functional tests for the frontend, execute the following command:
```bash
npm test
```

## Backend

- Developed and run functional tests for API endpoints using a testing library/framework Jest.
- Cover positive scenarios (successful data retrieval) and negative scenarios (handling invalid requests).

To run the functional tests for the backend, execute the following command:
```bash
cd server
npm test
```

# 🚧 Note:
This project is a living entity, evolving with each enhancement and addition. Your feedback and suggestions are highly encouraged and appreciated.
