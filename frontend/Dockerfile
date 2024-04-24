# Use official Node.js image as the base image
FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if present) to /app
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm install --production

# Copy the rest of the application code to /app
COPY . .

# Build the Next.js app
RUN npm run build

# Expose port 3000 (default Next.js port)
EXPOSE 3000

# Command to run the Next.js app
CMD ["npm", "run", "dev"]