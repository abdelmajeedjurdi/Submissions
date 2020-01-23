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

app.get('/hello/:ID', (req, res) => {
  res.json({status:200, message:"Hello " + req.params.ID});
});

app.get('/search', (req, res) => 
  {
    if(req.query.b) res.json({ status:200, data: req.query.b});
      else
        {
          res.json(
            {
              status: 500,
              error: true,
              message: "you have to provide a search"
            });
        }
  });