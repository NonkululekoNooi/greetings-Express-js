module.exports = function greet(db) {
  let letters = /^[a-z A-Z]+$/;
  var named = {};


   function greetingMessage(yourName, yourLanguage) {
    if (letters.test(yourName) === true) {
      if (yourLanguage === "Siswati") {
        return "Sawubona, " + yourName;
      } else if (yourLanguage === "Xitsonga") {
        return"Xewani/Avuxeni, " + yourName;
      } else if (yourLanguage === "Tshivenda") {
        return  "Aa/Ndaa, " + yourName;
      }
    } else {
      return " PLEASE USE ALPHABETS ONLY";
    }
    
  }

  async function getCounter() {
    let counter = await db.one("select count(*) from greeted_names;");
    console.log(counter)
    return counter.count;
  }

  async function storedNames(name) {
    if (letters.test(name) == false) {
      return;
    }

    let checkedName = await db.oneOrNone(
      "SELECT names FROM greeted_names where names =$1",
      [name]
    );

    if (checkedName == null) {
      await db.none(
        "INSERT INTO greeted_names(names,counter) values($1, $2)",
        [name, 1]
      );
    } else {
      await db.none (
        "UPDATE greeted_names set counter = counter + 1 WHERE names = $1",
        [name]
      );
    }
  }

  async function counted(username) {
    let counter = await db.one(
      'SELECT counter FROM greeted_names WHERE  names=$1',[username]);
    return counter.counter;
  }

  async function ourNames() {
    let named = await db.manyOrNone("SELECT names FROM greeted_names ");
    return named;
  }
  async function rested() {
    return await db.none("DELETE FROM greeted_names");
  }
   function errorMessages(username, lang) {
    if (username == "" && !lang) {
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
    rested,
  };
};
