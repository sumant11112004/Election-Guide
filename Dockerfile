# ----------- FRONTEND BUILD -----------
FROM node:20-alpine AS frontend-build

WORKDIR /app/frontend

# Install dependencies
COPY frontend/package*.json ./
RUN npm install

# Copy source and build
COPY frontend/ ./
RUN npm run build


# ----------- BACKEND BUILD -----------
FROM node:20-alpine

WORKDIR /app

# Install backend dependencies
COPY server/package*.json ./server/
RUN cd server && npm install --omit=dev

# Copy backend source
COPY server/ ./server/

# Copy frontend build into backend public folder
COPY --from=frontend-build /app/frontend/dist ./server/public

# Set working directory to server
WORKDIR /app/server

# Environment
ENV PORT=8080

# Expose port
EXPOSE 8080

# Start server
CMD ["node", "index.js"]
