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
      async function storedNames(name) {
        if (letters.test(name) == false) {
          return;
        }
    }
   


    return{
        greetingMessage,
        errorMessages,
        storedNames
      }
    }