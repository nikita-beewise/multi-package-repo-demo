FROM nginx:alpine
COPY ./storybook-dist /usr/share/nginx/html
COPY ./configs/nginx /etc/nginx/conf.d
