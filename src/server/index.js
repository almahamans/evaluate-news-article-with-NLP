const path = require("path")
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const dotenv = require('dotenv').config()
const mockIPA = require('./mockIPA')

let apikey = process.env.API_KEY
let baseURL = `https://api.meaningcloud.com/sentiment-2.1?key=${apikey}`


app.use(express.static('dist'))
app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

// console.log(__dirname)
//app.set('port',3010)
app.listen(process.env.PORT || 3010, () => {
    console.log('Server app listening!')
})

app.get(`/`, (req, res) => {
    res.sendFile('dist/index.html')
})

// app.get(`/test`, (req,res)=>{
//     res.send(mockIPA)
// })

let projectData = {}
app.post(`/analyze`, async (req, res) => {
  const getSentiment = await fetch(`${baseURL}`)
  try{
    const data = await getSentiment.json()
    projectData = {
      score_tag : data.score_tag,
      subjectivity: data.subjectivity,
      confidence: data.confidence,
      agreement: data.agreement,
      irony: data.irony,
      text: data.sentence_list[0].text
  }
    console.log(projectData)
    res.send(projectData);
  }catch(err){
    console.log("error", err);
}
})

module.exports = {app}
