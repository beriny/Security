const express = require('express')
const cheerio = require('cheerio')
const request = require('request')


const app = express()


app.get('/', function(req, res) {
    request('http://www.baidu.com', function(error, response, body) {
        if (!error && response.statusCode == '200') {
            console.log(body)
            $ = cheerio.load(body)
            res.json({
                'status': 200,
                'id': $("#btop").length
            })
        }
    })
})


app.listen(3001)
