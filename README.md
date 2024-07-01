# Event Management System (EMS)

## Contact
For any questions or inquiries about this project, please contact:

  Rottem Dresler
  Student ID: 209207398
  Email: rottem1357@gmail.com

## Description

This project, developed for EASS class at HIT,
provides a backend system for managing and scheduling events. It utilizes FastAPI with Python to create APIs for event creation, scheduling, and user interaction.

## Project Overview

The Event Management System (EMS) allows users to:
- Create new events
- Schedule events with other users
- View API documentation using FastAPI

The project is designed to demonstrate backend development skills using FastAPI and Docker for containerization.

## Setup Instructions

To run the project locally, follow these steps:

### 1. Clone the Repository

~~~git clone https://github.com/EASS-HIT-PART-A-2024-CLASS-V/Event_management_system.git

~~~cd Event_management_system/backend

### 2. Build the Docker Image

Navigate to the backend directory and build the Docker image (ems_backend):

~~~docker build -t ems_backend .

### 3. Run the Docker Container

Run the Docker container, mapping port 8000 on your local machine to port 8000 inside the container:

~~~docker run -p 8000:8000 ems_backend

### 4. Access the API Documentation

Open a web browser and navigate to:

http://localhost:8000/docs


