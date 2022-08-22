const flash = require("express-flash");
const session = require("express-session");
const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const myGreetedRoutes = require('./routes/greeted1');
const myGreeted = require("./GreetMe");

const pgp = require("pg-promise")();
const app = express();

let useSSL = false;
let local = process.env.LOCAL || false;
if (process.env.DATABASE_URL && !local) {
  useSSL = true;
}

const DATABASE_URL =process.env.DATABASE_URL || "postgresql://postgres:pg123@localhost:5432/mygreetings";

const config = {
  connectionString: DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
};

const db = pgp(config);

const greeted = myGreeted(db);
const greetedRoutes =myGreetedRoutes(greeted);

app.engine("handlebars", exphbs.engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(
  session({
    secret: "using session http",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(flash());

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/",greetedRoutes.home);

app.post("/greetings",greetedRoutes.myGreets);

app.get("/greeted", greetedRoutes.lists_of_names);

app.get("/greeted",greetedRoutes.named)

app.get('/counted/:enterName',greetedRoutes.enteredNames);

app.get("/resets", greetedRoutes.resetButton);

const PORT = process.env.PORT || 3003;
app.listen(PORT, function () {
  console.log("APP STARTED AT PORT", PORT);
});
