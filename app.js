const express = require('express');
var exphds = require('express-handlebars');
const app = express();

app.engine('handlebars', exphds({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');



// Mock array of reviews
let reviews = [
  { title: "Great Review"},
  { title: "Next Review"}
];

// The root route
app.get('/', (req, res) => {
  res.render('reviews-index', { reviews: reviews});
})

app.listen(3000, () => {
  console.log('App listening on Port 3000')
})
