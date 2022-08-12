module.exports = function greet(pool) {
  var named = {};
  let letters = /^[a-z A-Z]+$/

 async function greetingMessage(yourName, yourLanguage) {
  // let naam = await pool.query('select * from greeted_Names')
  // console.log(naam)

    if (letters.test(yourName) === true) {
      if (yourLanguage === "Siswati") {
        console.log();
        return "Sawubona, " + yourName;
      } else if (yourLanguage === "Xitsonga") {
        return "Xewani/Avuxeni, " + yourName;
      } else if (yourLanguage === "Tshivenda") {
        return "Aa/Ndaa, " + yourName;
      }
    } else {
      return " PLEASE USE ALPHABETS ONLY";
    }
  }

  async function getCounter() {
    let counter = await pool.query('select count(*) from greeted_names;');
    console.log(counter)
    return counter.rows[0].count
  //  let ourList = Object.keys(named);
  //   return ourList.length;
  }

  async function storedNames(name) {
    // if(letters.test(name) == false){
    //   return;
    //    }

    let checkedName =   await pool.query('SELECT names FROM greeted_names where names =$1',[name])
     //await pool.query('INSERT INTO greeted_names(names,counter) values($1, 1);', [usingNames])
    //  console.log(checkedName)
    if(checkedName.rowCount == 0){
      await pool.query('INSERT INTO greeted_names(names,counter) values($1, $2)', [name,1])
    }else{
      await pool.query('UPDATE greeted_names set counter = counter + 1 WHERE names = $1',[name])
    }
  }



function counted(){
let myList = Object.keys(named);
return myList
}

  function ourNames() {
    return named;
  }

  function errorMessages(username, lang) {
    if (username == "" && !lang ) {
      return "ENTER YOUR NAME AND LANGUAGE PLEASE";
    }
    if (!lang) {
      return "PLEASE CHOOSE A LANGUAGE";
    }
    if (username == "") {
      return "ENTER YOUR NAME PLEASE";
    }
    
  }

  return {
    getCounter,
    greetingMessage,
  counted,
    ourNames,
    errorMessages,
    storedNames,
  
 
  };
};
