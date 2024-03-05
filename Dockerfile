FROM node:16-alpine

WORKDIR /axieteam

COPY package*.json .

RUN npm install

COPY . .

RUN npx prisma generate

EXPOSE 3000

CMD ["npm", "run", "dev"]
