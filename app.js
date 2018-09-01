const express = require('express');
var exphds = require('express-handlebars');
const app = express();

app.engine('handlebars', exphds({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


app.get('/', (req, res) => {
  res.render('home', { msg: 'Hello World!'});
})
app.listen(3000, () => {
  console.log('App listening on Port 3000')
})
