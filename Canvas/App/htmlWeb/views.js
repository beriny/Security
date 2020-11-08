const express = require('express');
const cheerio = require('cheerio');
const request = require('request');
const superagent = require('superagent');

const app = express();


app.get('/', function(req, res) {
    request('http://www.baidu.com', function(error, response, body) {
        if (!error && response.statusCode == '200') {
            console.log(body)
            $ = cheerio.load(body)
            res.json({
                'status': 200,
                'id': $("#btop").length
            });
        };
    });
});

// callback
superagent
  .post('/api/pet')
  .send({ name: 'Manny', species: 'cat' }) // sends a JSON post body
  .set('X-API-Key', 'foobar')
  .set('accept', 'json')
  .end((err, res) => {
    // Calling the end function will send the request
  });

// promise with then/catch
superagent.post('/api/pet').then(console.log).catch(console.error);

// promise with async/await
(async () => {
  try {
    const res = await superagent.post('/api/pet');
    console.log(res);
  } catch (err) {
    console.error(err);
  }
})();

app.listen(3001)
