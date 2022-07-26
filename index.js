const express = require('express');
const exphbs  = require('express-handlebars/dist');
const bodyParser = require('body-parser');
const myGreeted = require('./GreetMe')


 const app = express();
 const greeted = myGreeted()

app.engine('handlebars', exphbs.engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static("public"));


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

 app.get('/',function(req,res){

    res.render('index');

 });

 app.post('/greetings',function(req,res){
  
    greeted.greetingMessage(req.body.enterName,req.body.languages1)

   console.log(greeted.greetingMessage(req.body.enterName,req.body.languages1));
   res.redirect('/');

 });

 app.post('/action',function(req,res){

});

app.get('/actions',function(req,res){

    
});

app.get('/actions/:type',function(req,res){

    
})
const PORT = process.env.PORT || 3015;
app.listen(PORT, function(){
    console.log('APP STARTED AT PORT');
});