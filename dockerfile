FROM node:latest

# Set working directory
WORKDIR /app

# Copy all files to the container
COPY . .

# Clean NPM cache and install dependencies
RUN npm cache clean --force
RUN npm install

# Expose port
EXPOSE 3306

# Command to run the application
CMD [ "node", "index.js" ]
