FROM nginx:1.19
COPY nginx.conf /etc/nginx/nginx.conf
COPY /docs/.vuepress/dist /usr/share/nginx/dist