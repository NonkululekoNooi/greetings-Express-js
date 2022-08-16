const flash = require('express-flash');
const session = require('express-session');
const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const myGreeted = require('./GreetMe')

const pg = require("pg");
const Pool = pg.Pool;




const connectionString = 'postgresql://postgres:pg123@localhost:5432/mygreetings'

const pool = new Pool({
   connectionString,
   ssl : { 
		rejectUnauthorized : false
	}
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
   let list = listedNames.map(e => e.names)
   
   
   res.render("greets",{
   
      ourNames:list

   });
   }); 
   
   app.get('/counted/:enterName',async function (req, res) {
      let name = req.params.enterName
       let counted =await greeted.counted(name)
       let listed = counted.map(e => e.counter)
       
   console.log(counted)
   
   let sentence = `You have greeted ${name} for ${listed} time(s)`
      res.render ('countedNames',{
         sentence
      })
   
   })


app.get('/resets', async function (req, res){
   await greeted.rested();

   res.redirect('/')
});

const PORT = process.env.PORT || 3003;
app.listen(PORT, function () {
   console.log('APP STARTED AT PORT',PORT);
});
