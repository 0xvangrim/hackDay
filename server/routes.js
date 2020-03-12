const NewsAPI = require('newsapi')
const express = require('express')
const dotenv = require('dotenv')
const router = express.Router()

dotenv.config()

const apiKey = new NewsAPI(process.env.APIKEY)

router.post('/search', async (req, res) => {
  const { query, language } = req.body;
  const data = await fetchHeadLines(query, language)
  res.json(data)
})

const fetchHeadLines = async (query, language) => {
  const response = await apiKey.v2.topHeadlines(
    {
      q: query,
      language: language.toString(),
    }
  )
  return response
}
const fetchEverything = async (query, language) => {
  const response = await apiKey.v2.everything(
    {
      q: query,
      language: language.toString()
    }
  )
  return response
}

//fetchEverything()

const fetchSources = async () => {
  const response = await apiKey.v2.sources()
  console.log(response)
}



module.exports = router;