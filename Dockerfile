FROM node:latest

COPY . .

WORKDIR .

COPY package.json package-lock.json /app/

RUN npm install

RUN npm run build

CMD ["npm", "run", "start"]



