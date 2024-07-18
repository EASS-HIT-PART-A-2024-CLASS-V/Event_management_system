# Event Management System (EMS) - Database Service

## Contact Information

For any questions or inquiries about this project, please contact:

- **Name**: Rottem Dresler
- **Student ID**: 209207398
- **Email**: rottem1357@gmail.com

## Description

This folder contains the database service for the Event Management System (EMS) project. It utilizes MongoDB for storing event data and user information.

## Project Overview

The database service:
- Uses MongoDB as the backend database.
- Initializes the database with predefined data using `init-mongo.js`.
- Provides persistence for event management and user-related data.

## Setup Instructions

To run the MongoDB database service locally, follow these steps:

### 1. Clone the Repository

bash
~~~
git clone git@github.com:EASS-HIT-PART-A-2024-CLASS-V/Event_management_system.git
cd Event_management_system/database
~~~

### 2. Build and Run the Docker Container
Build the Docker image for the MongoDB service (ems_mongodb):

~~~
docker build -t ems_mongodb .
~~~

Run the Docker container, mapping port 27018 on your local machine to port 27017 inside the container:

~~~
docker run -d -p 27018:27017 --name ems_mongodb_container ems_mongodb
~~~

### 3. Accessing MongoDB
The MongoDB database is now running and accessible on your local machine. If you need to interact with MongoDB, you can use a MongoDB client or connect your backend service to this database instance.

### 4. Additional Notes
- Make sure Docker is installed and running on your machine before building and running the Docker container.
- Customize MongoDB configurations in **init-mongo.js** or **Dockerfile** if necessary, depending on your specific environment requirements.
- Ensure connectivity from your backend service to MongoDB for data persistence and retrieval.

## Troubleshooting
If you encounter any issues or have questions about setting up the database service, please refer to the MongoDB documentation or contact the project owner for assistance.
