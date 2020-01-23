const express = require ('express');
const app = express();
app.get('/', (req, res) => {
  res.send('ok');
});
app.get('/test', (req, res) => {
    res.json('status:200, message:"ok"');
  });

app.listen(8080);
app.get('/time', (req, res) => {
  res.json({status:200, message:  new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds()})
});

