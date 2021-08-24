FROM postgres:13.4-alpine

WORKDIR /src/server/database

RUN docker run --rm --name docker_repo -e POSTGRES_PASSWORD=postgres -d -p 5432:5432 \
-v $(pwd):/var/lib/postgresql/data postgres

RUN docker exec -it docker_repo bash

RUN createdb -U postgres docker

