#stage: 1
FROM node:14.17.6-alpine as builder
WORKDIR /app
COPY . /app


RUN npm install

COPY . . 

CMD ["npm", "start"]
RUN npm run build

#stage: 2
FROM nginx:alpine
COPY ./nginx.conf /etc/nginx/nginx.conf
RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /app/build /usr/share/nginx/html
ENTRYPOINT [ "nginx" , "-g" , "daemon off;" ]
EXPOSE 3000
