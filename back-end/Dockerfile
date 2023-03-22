FROM node:16.13.2

WORKDIR /usr/src/app
COPY package.json ./
COPY prisma ./prisma/ 
#ENV DATABASE_URL=postgresql://user:pass@postgres:5432/db?connect_timeout=600
RUN npm install
COPY . .
#COPY prisma.sh  /prisma.sh
#RUN chmod +x /prisma.sh
#ENTRYPOINT [ "/prisma.sh" ]
EXPOSE 3001
CMD [  "npm", "run", "start:migrate:prod" ]


