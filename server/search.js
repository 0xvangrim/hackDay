const NewsAPI = require('newsapi')
const express = require('express')
const router = express.Router();
const apiKey = require('./server.js')

// fetches headlines and can take options 
/*
const fetchHeadLines = async () => {
  const response = await apiKey.v2.topHeadlines()
  console.log(response)
}

fetchHeadLines()
*/
/*
fetchHeadLines()
router.get('/search', ((req,res) => {
  const headline = fetchHeadLines()
  res.json(headline)

}))
*/
//module.exports.fetchHeadLines = fetchHeadLines