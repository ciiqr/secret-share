FROM nginx:1.19.8
WORKDIR /var/www

COPY favicon.png ./
COPY index.html ./
COPY secret-share.css ./
COPY secret-share.js ./
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]
