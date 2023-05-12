FROM node:16-alpine as build
WORKDIR '/app'
COPY package.json .
COPY . .
RUN npm run build

FROM nginx
COPY --from=build /app/dist /usr/share/nginx/html
