const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const myGreeted = require('./GreetMe')


const app = express();
const greeted = myGreeted()

app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(express.static("public"));


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', function (req, res) {

   res.render('index');

});

app.post('/greetings', function (req, res) {
   let names = req.body.enterName;
   let lingo = req.body.languages1;
   let counter = req.body.counting;

   if (!names && !lingo) {
      var messages = greeted.errorMessages('', '');
   }

   else if (names == '' && lingo) {
      var messages = greeted.errorMessages(names, lingo);
   }
   else if (!lingo  && names) {
      var messages = greeted.errorMessages(names, '');

   }

   else if (names && lingo) {
      var messages = greeted.greetingMessage(names, lingo);
      greeted.storedNames(names);
      var counters = greeted.getCounter();
     
   }
 


   // if (names) {

     
   // }
  


   res.render('index', {
      messages,
      counters,
   
   })



});

app.post('/action', function (req, res) {

});

app.get('/greetings', function (req, res) {
 


});

app.get('/actions/:type', function (req, res) {


})
const PORT = process.env.PORT || 3015;
app.listen(PORT, function () {
   console.log('APP STARTED AT PORT');
});