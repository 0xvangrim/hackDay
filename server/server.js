const NewsAPI = require('newsapi')
const express = require('express')
const bodyParser = require("body-parser");
const app = express()
const dotenv = require('dotenv')
const cors = require('cors')
dotenv.config()

const apiKey = new NewsAPI(process.env.APIKEY)

//app.use('/search', searchRoute)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


app.get('/:search', async (req, res) => {
  const query = req.params.search
  const data = await fetchHeadLines(query)
  res.json(data)
})

const fetchHeadLines = async (query) => {
  const response = await apiKey.v2.topHeadlines(
    {
      q:query,
      language:'en'
    }
  )
  return response
}

const fetchEverything = async () => {
  const response = await apiKey.v2.everything()
  console.log(response)
}

//fetchEverything()

const fetchSources = async () => {
  const response = await apiKey.v2.sources()
  console.log(response)
}

//fetchSources()
app.listen(8080, () => {
  console.log("App's running on port 8080");
});
module.exports.apiKey = process.env.APIKEY
