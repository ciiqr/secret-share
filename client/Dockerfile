FROM nginx:1.19.8
WORKDIR /var/www

COPY public/* ./
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]
