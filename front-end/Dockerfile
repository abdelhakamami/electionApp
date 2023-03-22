#stage: 1
FROM node:14.17.6 as builder
WORKDIR /app
COPY package.json /app/
COPY package-lock.json /app/

RUN npm install

COPY ./ /app/
EXPOSE 3000
CMD ["npm", "start"]
#RUN npm run build

#stage: 2
#FROM nginx:stable-alpine
#WORKDIR /usr/share/nginx/html
#RUN rm -rf ./*
#COPY --from=builder /app/build/ .
#ENTRYPOINT [ "nginx" , "-g" , "daemon off;" ]