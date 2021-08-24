# DockerCheckPoint

<!-- npm init to get package.json -->

<!-- to get a front end with react! -->
<!-- npx create-react-app (name of app or microserver) -->

<!-- to get a server! -->
<!-- npm install --save express (THIS GETS US AN EXPRESS SERVER) -->

<!-- to not have to restart server to update it, NODEMON -->
<!-- npm install nodemon -->

<!-- to get knex into server directory
npm install --save knex
npm install nodemon
npm install cors (if using cors)

need to add into package.json run script, "start": "nodemon (NAME).js"
 -->

<!-- to check if server is up
url http:/localhost:3002/ -->

<!-- in the server dir, not in DB dir, npx knex init ... 
npx knex init  -->

<!-- docker exec -it 5525 bash
5525 from container id (first 4) get it from docker container ls

to create a db
createdb -U postgres docker right after docker exec
named docker
\l to see postgres list

\c to move into the docker db created

@ server level, npx knex migrate:make create_girl_names to create the migration file (created migrations file in migrations dir)

npx knex migrate:latest to create table (After exports.up and down filled)
\d baby_names (name of the table) to get details of that table

to seed the data, under server level: npx knex seed:make baby_names

npx knex seed:run
npx knex migrate:rollback to undo migration
 -->


 DO NOT REUSE OR COPY ANY OLD CODE FOR THIS CHALLENGE.

MAKE SURE NOT TO COMMIT OR INCLUDE node_modules IN YOUR DOCKER IMAGES.

[x] Create the directory that will hold your entire app. From the root directory of your app, create server and front-end directories. cd into the server directory.

[x]Create your server and verify that it works.

[x]Create a database directory in your server directory.

[x]Create your database and verify that it works. Make sure to link your database container's volume and your newly created database directory so that data can persist even after container removal.

[x]Connect your database with your server and verify that you are getting back data from a query (notice that you always verify that each step is working before moving on. Keep doing this!). Make sure that your database is dropped (or tables truncated) and seeded with new data every time you start your containers. For example, your database shouldn't contain duplicate seeded entries after starting up your container several times.
HINT: Think about how you will automate starting your database and your server and seeding it with data. This will require multiple commands. How can you invoke multiple commands when you start your server?

[]Create a Dockerfile for your server. You should be able to run your server with a docker run ... command after you have built the image.
[]Navigate to the front-end directory and create your React app. Are you still verifying that things are working after every step?
[]Display the result of an AJAX request to your server in a <div>.
[]Create a Dockerfile for your React app.
[]In the root level of your app directory, one level up from your server and front-end directories, create a docker-compose.yml file to create and launch all of your services with a docker-compose up command.
