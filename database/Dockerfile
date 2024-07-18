# Use the official MongoDB image from Docker Hub
FROM mongo:latest

# Set environment variables
ENV MONGO_INITDB_ROOT_USERNAME=admin
ENV MONGO_INITDB_ROOT_PASSWORD=admin_password
ENV MONGO_INITDB_DATABASE=ems_database

# Copy initialization script into the container
# COPY init-mongo.js /docker-entrypoint-initdb.d/

# Expose port 27017 to the host
EXPOSE 27017
