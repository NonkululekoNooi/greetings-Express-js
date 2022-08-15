const flash = require('express-flash');
const session = require('express-session');
const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const myGreeted = require('./GreetMe')

const pg = require("pg");
const Pool = pg.Pool;

let useSSL = false;
let local = process.env.LOCAL || false;
if (process.env.DATABASE_URL && !local){
    useSSL = true;
}

const connectionString = 'postgresql://postgres:pg123@localhost:5432/mygreetings'

const pool = new Pool({
   connectionString,
   ssl : useSSL
 });

const app = express();
const greeted = myGreeted(pool)

app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');


 app.use(session({
   secret : "using session http",
   resave: false,
   saveUninitialized: true
 }));

 app.use(flash());

app.use(express.static("public"));


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', function (req, res) {


   res.render('index',{
      
   });

});

app.post('/greetings', async function (req, res) {
 var message = await greeted.greetingMessage()
   let names = req.body.enterName;
   let lingo = req.body.languages1; 

   if (names && lingo) {
     
      var message = await greeted.greetingMessage(names, lingo);
      await greeted.storedNames(names);
      
      var counters = await greeted.getCounter();
     
   }else{
      req.flash('error', await greeted.errorMessages(names,lingo))
   }

   res.render('index',{
      message,
      counters
   });

});

app.get('/greets', async function (req, res) {

 res.render('greets',{
   names:await greeted.ourNames(),
 })

 
});

app.get('/greeted', async function (req, res) {
 
   let listedNames = await greeted.ourNames()
   
   res.render("greets",{
      ourNames:listedNames.map(e => e.names)

   });
   }); 
   
app.get('/counted/:enterName',async function (req, res) {
   let name = req.params.enterName
    let counted =await greeted.ourNames()

let personsCounter = counted[name]
let sentence = `You have greeted ${name} for ${counted[name]} time(s)`
   res.render ('countedNames',{
      sentence
   })

})

const PORT = process.env.PORT || 3011;
app.listen(PORT, function () {
   console.log('APP STARTED AT PORT',PORT);
});
