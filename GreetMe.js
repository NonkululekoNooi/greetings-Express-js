module.exports = function greet(existingNames) {

    var named = existingNames || {};

    function greetingMessage(yourName, yourLanguage) {
      
        let letters = /^[a-z A-Z]+$/
      
        
            if (letters.test(yourName)) {
                
                if (yourLanguage === 'Siswati') {
                    console.log()
                    return 'Sawubona, ' + yourName;
                } else if (yourLanguage === 'Xitsonga') {
                    return 'Xewani/Avuxeni, ' + yourName
                } else if (yourLanguage === 'Tshivenda') {
                    return 'Aa/Ndaa, ' + yourName
                }
            }
            else {
                
                return " PLEASE USE ALPHABETS ONLY"
            }  
       
    }
   

    function getCounter() {
        var ourList = Object.keys(named);
        return ourList.length;
    }

    function storedNames(usingNames){
        
        if(named[usingNames] == undefined){
            named[usingNames] =1
        }else{
            named[usingNames] ++
        }
    }
    

    function pushingNames(name) {

       if(named.includes(name)){
        return false
       }else{
        return named.push(name)
       }
    }


    function ourNames() {
        return named
    }

    function errorMessages(username,lang){
        if(username == '' && lang== ''){
            return 'ENTER YOUR NAME AND LANGUAGE PLEASE!!!!!'
        } 
        if (lang == '' ){
            return 'PLEASE CHOOSE A LANGUAGE !!!!'
        }
        if(username == ''){
            return 'ENTER YOUR NAME PLEASE!!!!!'
        } 
       
       
    }
   

    return {
        getCounter,
        greetingMessage,
        pushingNames,
        ourNames,
        errorMessages,
        storedNames,
        

      
    
       
    }

}