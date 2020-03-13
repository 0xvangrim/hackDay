const NewsAPI = require('newsapi')
const express = require('express')
const dotenv = require('dotenv')
const router = express.Router()

dotenv.config()

const apiKey = new NewsAPI(process.env.APIKEY)

router.post('/search', async (req, res) => {
  const { query, language, fromDate, toDate } = req.body;
  const data = await fetchHeadLines(query, language, fromDate, toDate)
  res.json(data)

})

router.post('/search-all', async (req, res) => {
  const { query, language, fromDate, toDate } = req.body;
  const data = await fetchEverything(query, language, fromDate, toDate)
  res.json(data)

})

const fetchHeadLines = async (query, language, fromDate, toDate) => {
  const response = await apiKey.v2.topHeadlines(
    {
      q: query,
      language: language.toString(),
      sortBy: 'publishedAt',
      from: fromDate,
      to: toDate,
    }
  )
  return response
}
const fetchEverything = async (query, language, fromDate, toDate) => {
  const response = await apiKey.v2.everything(
    {
      q: query,
      language: language.toString(),
      sortBy: 'publishedAt',
      from: fromDate,
      to: toDate,
    }
  )
  return response
}

module.exports = router;