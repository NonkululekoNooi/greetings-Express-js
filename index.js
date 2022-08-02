const flash = require('express-flash');
const session = require('express-session');
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
   var messages = greeted.greetingMessage()

   res.render('index',{
      messages
   });

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
   else if(names){
      var resets = greeted.resetBtn()
   }

   res.render('index', {
      messages,
      counters,
      resets
   
   })


});

app.get('/greets', function (req, res) {

 res.render('greets',{
   names:greeted.ourNames()
 })

 
});

app.get('/greeted', function (req, res) {
 
   let listedNames = greeted.ourNames()
  console.log(greeted.ourNames())
   res.render("greets",{
      ourNames:listedNames

   });
   });
   
app.get('/counted/:enterName', function (req, res) {
   let name = req.params.enterName
    let counted = greeted.ourNames()


let personsCounter = counted[name]
console.log(personsCounter)
let sentence = `You have greeted ${name} for ${counted[name]} times`
   res.render ('countedNames',{
      sentence
   })

})

// app.get('/actions/:type', function (req, res) {


// })
const PORT = process.env.PORT || 3036;
app.listen(PORT, function () {
   console.log('APP STARTED AT PORT');
});
