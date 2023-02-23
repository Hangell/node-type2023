# Base image
FROM node:16-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the source code
COPY . .

# Build the TypeScript code
RUN npm run build

# Set the start command
CMD ["node", "dist/shared/http/server.js"]
