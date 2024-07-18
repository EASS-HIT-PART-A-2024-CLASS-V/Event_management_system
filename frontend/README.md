# Event Management System (EMS) - Frontend Service

## Contact Information

For any questions or inquiries about this project, please contact:

- **Name**: Rottem Dresler
- **Student ID**: 209207398
- **Email**: rottem1357@gmail.com

## Description

This folder contains the frontend service for the Event Management System (EMS) project. It provides a user interface for managing events, scheduling, and user interactions.

## Project Overview

The frontend service:
- Uses React with Node.js for building the user interface.
- Communicates with the backend API to fetch and display event data.
- Supports interactive features for event creation, viewing, and scheduling.

## Setup Instructions

To run the frontend service locally, follow these steps:

### 1. Clone the Repository

bash
~~~
git clone git@github.com:EASS-HIT-PART-A-2024-CLASS-V/Event_management_system.git
cd Event_management_system/frontend
~~~

### 2. Install Dependencies
Install npm dependencies required for the frontend:

~~~
npm install
~~~

### 3. Run the Development Server
Start the development server for the frontend:

~~~
npm start
~~~

The frontend will be accessible at http://localhost:3000 in your web browser.

### 4. Building the Production Version
To build the production-ready version of the frontend:

~~~
npm run build
~~~

This command bundles the frontend into static files for deployment.

### 5. Docker Usage
You can also run the frontend service using Docker. Build the Docker image (ems_frontend) and run the container:

## Additional Notes
- Make sure Node.js and npm are installed on your machine before installing dependencies and running the development server.
- Adjust configurations in **package.json**, **Dockerfile**, or environment variables as necessary for your specific deployment environment.
- Ensure backend services are running and accessible for full functionality of the frontend application.
