# Use the official Node.js image as the base image
FROM node:latest

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./
COPY README.md ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY public ./public
COPY src ./src

# this is the command to build the docker.
RUN npm run build

# Expose port 3000 to the outside world
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]
