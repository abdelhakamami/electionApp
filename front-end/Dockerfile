#stage: 1
FROM node:14.17.6 as builder
WORKDIR /app
COPY package.json /app/
COPY package-lock.json /app/

RUN npm install

COPY . . 

CMD ["npm", "start"]
RUN npm run build

#stage: 2
FROM nginx:stable-alpine
COPY ./nginx.conf /etc/nginx/nginx.conf
RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /app/dist /usr/share/nginx/html
ENTRYPOINT [ "nginx" , "-g" , "daemon off;" ]
EXPOSE 3000
