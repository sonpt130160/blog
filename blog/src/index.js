
const express = require('express')
const morgan = require('morgan')
const handlebars  = require('express-handlebars');
const methodOverride = require('method-override')
const path = require('path');
const app = express();
const port = 3000

const route = require('./routes')
const db = require('./config/db')

//method override
app.use(methodOverride('_method'))
app.use(express.json());
app.use(express.urlencoded());
//connect to DB
db.connect()
app.use(express.static(path.join(__dirname, 'public')))

// HTTP loger
app.use(morgan('combined'))
// Template engine
app.engine('hbs', handlebars({
  extname: 'hbs',
  helpers: {
    sum: (a,b) => a+b
  }
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources','views'));

route(app)



app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})