const express = require('express');
const app = express();
var exphds = require('express-handlebars');

app.engine('handlebars', exphds({defaultlayout: 'main'}));
app.set('view engine', 'handlebars');


app.get('/', (request, response {
  response.render('home', { msg: 'Hello World!'});
}))
app.listen(3000, () => {
  console.log('App listening on Port 3000')
})
