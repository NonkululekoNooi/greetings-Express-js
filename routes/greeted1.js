module.exports = function myGreetedRoutes(greeted){

    async function home (req, res) {
        var counters = await greeted.getCounter();
         
         res.render("index", {
           counters,
         });
       }

       async function  myGreets  (req, res) {
        let names = req.body.enterName.charAt(0).toUpperCase() + req.body.enterName.slice(1).toLowerCase();
        let lingo = req.body.languages1;
      
        if (names && lingo) {
          var message = greeted.greetingMessage(names, lingo);
          await greeted.storedNames(names);
          var counters = await greeted.getCounter(); 
      
        }
        else {
          req.flash("error", greeted.errorMessages(names, lingo));
        }
      
        res.render("index", {
          message,
         counters
        });
      }

      async function lists_of_names (req, res) {
        let ourNames = await greeted.ourNames();
       
        res.render("greeted", {
          ourNames: ourNames,
        });
      }

      async function named (req, res){
        let listsOfNames =req.body.enterName
        res.render("ourNames",{
           ourNames: listsOfNames
        })
     }

     async function enteredNames (req, res) {
      let naming = req.params.enterName;
      let counted = await greeted.counted(naming);
      let sentence = `You have greeted ${naming} for ${counted} time(s)`;
    
      res.render('countedNames', {
        sentence
      });
    }

    async function resetButton (req, res) {
      await greeted.rested();
      
      req.flash("error","YOU RESETED EVERYTHING");
      res.redirect("/");
    }


    return{
        home,
        myGreets,
        lists_of_names,
        named,
        enteredNames,
        resetButton

    }
}
