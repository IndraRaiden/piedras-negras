# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source files
COPY . .

# Build the application
RUN npm run build

# Production stage
FROM node:20-alpine

WORKDIR /app

# Copy built application from builder
COPY --from=builder /app/.output /app/.output

# Expose port
ENV PORT=3000
EXPOSE 3000

# Start the application
CMD ["node", ".output/server/index.mjs"]
