module.exports = function greet() {
  var named = {};
  let letters = /^[a-z A-Z]+$/
  function greetingMessage(yourName, yourLanguage) {

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

  function getCounter() {
   let ourList = Object.keys(named);
    return ourList.length;
  }

  function storedNames(usingNames) {
    if (named[usingNames] == undefined) {
      named[usingNames] = 1;
    } 
    else {
      named[usingNames]++;
    }

    
    

  }
  function resetBtn() {
    return getCounter()
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
      return "ENTER YOUR NAME AND LANGUAGE PLEASE!!!!!";
    }
    if (!lang) {
      return "PLEASE CHOOSE A LANGUAGE !!!!";
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
    resetBtn,
 
  };
};
