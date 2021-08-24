const express = require('express');
const app = express();
//allows for app.get, delete, etc.
const port = 3002;
// default port is 3000, react uses 3000, backend will be 3002
const knex = require('knex')(require('./knexfile.js')['development']);
const cors = require('cors');
app.use(cors());
// app.get, etc. uses cors, cors facilitates connecting servers
app.use(express.json())
//whenever a request comes into the server, parse it out, req and res (used to be body.parser)


app.get('/', (req, res) => {
  knex
    .select("*")
    .from("baby_names")
    .orderBy('ranking','asc')
    //to sort the data by field ranking, in descending/ascending (asc or desc) order
    .then((data) => {
      res.status(200).json(data)
    })
    .catch((err)=> {
      res.status(404).json({
        message: "The data you are looking for could not be found at this time. Please try again",
    });
      })
      
});


// app.get("/movies/:id", function (req, res) {
//   knex
//     .select("*")
//     .from("movies")
//     .where({
//       id: req.params.id,
//     })
//     .then((data) => {
//        
//       return data;
//     })
//     .then((data) => res.status(200).json(data))
//     .catch((err) => {
//       if (res.status(400)) {
//         res.status(400).json({
//           message: "Invalid ID supplied",
//         });
//       }
//     });
// });


app.listen(port, () => {
  console.log(`Now listening on port ${port}.`)
});

//port is 3002 because of line 4ish above