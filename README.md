## Event Management System (EMS) - README

## Contact Information

For any questions or inquiries about this project, please contact:

- **Name**: Rottem Dresler
- **Student ID**: 209207398
- **Email**: rottem1357@gmail.com

## Description

The Event Management System (EMS) is a full-stack web application developed for the EASS class at HIT. It provides a platform for managing events, scheduling, and user interactions. The system consists of three main components: frontend, backend, and database, each running in Docker containers for easy deployment and management.

## Project Components

- **Frontend**: User interface for event management and scheduling.
- **Backend**: API server built with FastAPI (Python) for backend operations.
- **Database**: MongoDB database for storing event data and user information.

## Setup Instructions
To run the entire Event Management System project locally using Docker Compose, follow these steps:

### 1. Clone the Repository

~~~
git clone git@github.com:EASS-HIT-PART-A-2024-CLASS-V/Event_management_system.git
cd Event_management_system
~~~

### 2. Build and Start Docker Containers
Use Docker Compose to build and start all project services:

~~~
docker-compose up --build
~~~

This command builds the Docker images and starts the containers for frontend, backend, and database services.

### 3. Accessing the Application

- **Frontend**: Access the EMS frontend application at http://localhost:3000 in your web browser.
- **Backend API**: Explore and interact with the backend APIs at http://localhost:8000/docs using FastAPI's Swagger UI.
- **Database**: MongoDB database is accessible internally through Docker networking.

### 4. Additional Notes

- Make sure Docker and Docker Compose are installed and running on your machine before running the above commands.
- Adjust configurations in docker-compose.yml or individual service Dockerfiles if necessary, depending on your environment requirements.
- Ensure connectivity between frontend, backend, and database services for full functionality of the EMS application.


## Troubleshooting
If you encounter any issues or have questions about setting up or running the Event Management System project, please refer to the respective README files in **frontend/**, **backend/**, and **database/** directories for detailed instructions. You can also contact the project owner for assistance.
