const express = require('express')
const app = express()
const cors = require('cors')
const routes = require('./routes.js')

app.use(express.json());
app.use(cors());
app.use('/', routes)

app.listen(8080, () => {
  console.log("App's running on port 8080");
});
module.exports.apiKey = process.env.APIKEY
