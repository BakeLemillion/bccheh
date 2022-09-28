FROM node:14-alpine AS development
ENV NODE_ENV production
# Add a work directory
WORKDIR /app
# Cache and Install dependencies
COPY package.json /app
COPY yarn.lock /app
RUN yarn install
# Copy app files
COPY . .
# Expose port
EXPOSE 8080
# Start the app
CMD [ 'yarn', 'run', 'start' ]
