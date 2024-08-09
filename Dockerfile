FROM node:20.15.0-slim
WORKDIR /app
COPY . .
RUN npm i && npm run build
CMD ["npm", "start"]