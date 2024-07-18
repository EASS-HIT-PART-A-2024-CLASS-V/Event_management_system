# Event Management System (EMS) - Backend Service

## Contact Information

For any questions or inquiries about this project, please contact:

- **Name**: Rottem Dresler
- **Student ID**: 209207398
- **Email**: rottem1357@gmail.com

## Description

This backend service is part of the Event Management System (EMS) project developed for the EASS class at HIT. It provides APIs for managing events, scheduling, and user interactions using FastAPI with Python.

## Project Overview

The backend service allows users to:
- Create new events
- Schedule events with other users
- Access API documentation through FastAPI's interactive UI

The project demonstrates backend development skills with a focus on FastAPI for creating robust APIs and Docker for containerization.

## Setup Instructions

To run the backend service locally, follow these steps:

### 1. Clone the Repository

bash:
~~~
git clone git@github.com:EASS-HIT-PART-A-2024-CLASS-V/Event_management_system.git
cd Event_management_system/backend
~~~


### 2. Build and Run the Docker Container
Build the Docker image for the backend service (ems_backend):

~~~
docker build -t ems_backend .
~~~

Run the Docker container, mapping port 8000 on your local machine to port 8000 inside the container:

~~~
docker run -p 8000:8000 ems_backend
~~~

### 3. Access API Documentation
Once the backend service is running, you can access the API documentation using FastAPI's interactive Swagger UI. Open a web browser and go to:

~~~
http://localhost:8000/docs
~~~

This page provides detailed documentation of the available API endpoints, request/response formats, and allows you to test the APIs interactively.

### 4. Running Tests
To run tests for the backend service using pytest, follow these steps:

#### 1. Navigate to the backend directory:

~~~
cd Event_management_system/backend
~~~

#### 2. Run pytest to execute the tests:

~~~
pytest
~~~

This will run all the test cases defined in the backend service and provide feedback on test results.

## Additional Notes
- Make sure Docker is installed and running on your machine before building and running the Docker container.
- Adjust configurations in **main.py** or **Dockerfile** if necessary, depending on your specific environment requirements.
- Ensure connectivity to other services like MongoDB (if required) for full functionality of the backend service.


### Explanation:

- **Contact Information**: Provides contact details for inquiries related to the project.
- **Description**: Brief overview of the project and its purpose.
- **Project Overview**: Lists functionalities supported by the backend service.
- **Setup Instructions**: Step-by-step guide to clone, build, and run the backend service locally using Docker.
- **Access API Documentation**: Instructions to access and utilize the interactive API documentation provided by FastAPI.
- **Running Tests**: Instructions on running tests for the backend service using pytest.
- **Additional Notes**: Additional tips or considerations for running and configuring the backend service.

Ensure to customize placeholders like `<repository-url>`, `ems_backend`, and adjust paths or commands as per your project's actual structure and requirements. This README file serves as a helpful guide for developers who are setting up, using, or contributing to the backend service of your Event Management System project.
