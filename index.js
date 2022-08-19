const flash = require("express-flash");
const session = require("express-session");
const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
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

app.get("/", async function (req, res) {
  var counters = await greeted.getCounter();
  
  res.render("index", {
    counters,
  });
});

app.post("/greetings", async function (req, res) {
  let names = req.body.enterName;
  let lingo = req.body.languages1;

  if (names && lingo) {
    var message = greeted.greetingMessage(names, lingo);
    await greeted.storedNames(names)
    var counters = await greeted.getCounter() 
    

  } else {
    req.flash("error", greeted.errorMessages(names, lingo));
  }

  res.render("index", {
    message,
   counters
  });
});

app.get("/greeted", async function (req, res) {
  let ourNames = await greeted.ourNames();
  console.log(ourNames);
  res.render("greeted", {
    ourNames: ourNames,
  });
});

app.get("/greeted", async function (req, res){
   let listsOfNames =req.body.enterName
   res.render("ourNames",{
      ourNames: listsOfNames
   })
})

app.get('/counted/:enterName', async function (req, res) {
  let naming = req.params.enterName;
  let counted = await greeted.counted(naming);
  
  let sentence = `You have greeted ${naming} for ${counted} time(s)`;
  console.log(counted);
  res.render('countedNames', {
    sentence
  });
});

app.get("/resets", async function (req, res) {
  await greeted.rested();
  req.flash("error","YOU RESETED EVERYTHING");
  res.redirect("/");
});

const PORT = process.env.PORT || 3003;
app.listen(PORT, function () {
  console.log("APP STARTED AT PORT", PORT);
});
