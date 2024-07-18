# Use an official Python runtime as a parent image
FROM python:3.10.12

ENV MONGO_INITDB_ROOT_USERNAME=admin
ENV MONGO_INITDB_ROOT_PASSWORD=admin_password
ENV MONGO_INITDB_DATABASE=ems_database
ENV MONGO_INITDB_HOST=localhost
ENV MONGO_INITDB_PORT=27018

# Set the working directory in the container
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY *.py ./
COPY requirements.txt ./
COPY README.md ./

# Install any needed packages specified in requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Make port 8000 available to the world outside this container
EXPOSE 8000

# Define environment variable
ENV NAME World

# Run app.py when the container launches
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]