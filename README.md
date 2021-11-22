### Event-notification-backend

`this is application design to store the events, based on the success and failure.`



Evironment variables

| Key | Value | Required | Description |
|------|----| ---- | ------ |
|  DB_NAME | " " | yes | Database |
|  DB_HOST | " " | yes | Database |
|  DB_USERNAME | " " | yes | Database |
|  DB_PASSWORD | " " | yes | Database |
|  PORT | 4000 | no | Application |

How to set environment variables in linux

    export DB_NAME=""
    export DB_HOST=""
    export DB_USERNAME=""
    export DB_PASSWORD=""

In the project directory, you can run

    npm install
    node main.js

Docker build and run the following command

    docker build -t event-notification .
    docker run -d -p 4000:40000 --name event-notification event-notification

Docker compose command

```yml

# vim docker-compose.yml
version: "3"
services:
  database:
    image: mysql:5.7
    networks:
      - events
    volumes:
    - events:/var/lib/mysql
    environment:
      MYSQL_ROOT_PASSWORD: events
      MYSQL_DATABASE: events
      MYSQL_USER: events
      MYSQL_PASSWORD: events
  events:
    image: jjino/event-notification
    depends_on:
    - database
    ports:
    - "4000:80"
    restart: always
    networks:
      - events
    environment:
      DB_HOST: database
      DB_USER: events
      DB_PASSWORD: events
      DB_NAME: events
networks:
  events:
    driver: bridge
volumes:
  events:

```