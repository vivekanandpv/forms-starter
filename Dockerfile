# command: docker run --name ng-docker -d -p 8085:80 ng-docker
# localhost:8085 will serve Angular app

FROM nginx
COPY dist/forms-starter /usr/share/nginx/html