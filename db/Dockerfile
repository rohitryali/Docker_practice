FROM mysql:8
ENV MYSQL_DATABASE=icecream_db
ENV MYSQL_ROOT_PASSWORD=root
ENV MYSQL_USER=rohit
ENV MYSQL_PASSWORD=admin@123
COPY ./init.sql /docker-entrypoint-initdb.d/init.sql

