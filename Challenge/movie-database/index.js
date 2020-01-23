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
  const movies = [
    { title: 'Jaws', year: 1975, rating: 8 },
    { title: 'Avatar', year: 2009, rating: 7.8 },
    { title: 'Brazil', year: 1985, rating: 8 },
    { title: 'الإرهاب والكباب‎', year: 1992, rating: 6.2 }
];

  app.get('/movies/create', (req, res) => {
    res.json({status:200,message:"created" });
  });
  app.get('/movies/read', (req, res) => {
    res.json({status:200, message: "read"});
  });
  app.get('/movies/update', (req, res) => {
    res.json({status:200, message: "updated"});
  });
  app.get('/movies/delete', (req, res) => {
    res.json({status:200,message: "deleted" });
  });
