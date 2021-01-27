FROM node:12
WORKDIR /usr/app
COPY package*.json ./

# necessary to run `npx prisma generate` on postinstall
COPY prisma ./prisma

RUN npm install
COPY . .
RUN npm run build

EXPOSE 5000

# local
CMD ["npm", "run", "start:dev"]
