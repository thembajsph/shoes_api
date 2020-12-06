const express = require("express");

const exphbs = require('express-handlebars');

// //get body parser / instantiate
const bodyParser = require('body-parser');



//require the settings bill factory function
const shoes = require("./shoes");
const api = require('./api');

// create an instance for the app, instantiate it.
const app = express();


// always require your pg
const pg = require("pg");
const Pool = pg.Pool

const connectionString = process.env.DATABASE_URL || 'postgresql://thembajoseph:themba17307@localhost:5432/shoe-database';

const pool = new Pool({
  connectionString
});
//instance
const instance = shoes(pool);
//const instance = waiterer(pool);



// const greetings = greet(pool);
const apiFactory = api(instance)
//after ive instantiate my app ,configure , expressJs as handlebars(middleware)
app.engine('handlebars', exphbs({ defaultLayout: "main" }));
app.set('view engine', 'handlebars');

//make the public folder visible when using express, could be css ,js ,page wanst styled.now can see the middleware
// http://localhost:3011/css/style.css --- to see your css

app.use(express.static('public'));

// // parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// // parse application/json
app.use(bodyParser.json());


app.get("/", async function (req, res) {


  res.render("index", {

  });

});

//settings route that is a post as per instructions
app.get("/api/shoes", apiFactory.allShoes);

app.get("/api/shoes/brand/:brandname", apiFactory.AllByBrands);


// another route, a get route, called Actions
app.get("/api/shoes/size/:sizename", apiFactory.AllbySize);


// another route, a get route, called Actions
app.get("/api/shoes/brand/:brandname/size/:sizename", apiFactory.AllbySizeBrand);


app.get("/updateShoes", async function (req, res) {


  res.render("update", {

  });

});


// another route a post to update id a shoe when its sold
app.post("/api/shoes/sold/:id", apiFactory.updateShoeSoldOut);


app.get("/AddShoes", async function (req, res) {


  res.render("shoes", {

  });

});

app.get("/AddShoes", async function (req, res) {


  res.render("shoes", {

  });

});





app.post("/api/shoes", apiFactory.addNewNew);


const PORT = process.env.PORT || 3001

app.listen(PORT, function () {
  console.log("app started at port:", PORT);

});