function greet(existingNames) {

    var names = existingNames || [];




    function greetingMessage(yourName, yourLanguage) {
        //alert(regeX(yourName));
        

        if ( notSelected(yourName) == true) {
            return ' YOU FORGOT TO TYPE YOUR NAME'
        }
        if (notLanguage(yourLanguage)== false){
            return 'PLEASE CHOOSE A LANGUAGE'
    }
    

    
        if (regeX(yourName) === true) {

     
            if (yourName) {
                if (yourLanguage === 'Siswati') {
                    return 'Sawubona, ' + yourName;
                } else if (yourLanguage === 'Xitsonga') {
                    return 'Xewani/Avuxeni, ' + yourName
                } else if (yourLanguage === 'Tshivenda') {
                    return 'Aa/Ndaa, ' + yourName
                }
            } 
        }else if (regeX(yourName) === false) {
            return 'PLEASE USE ALPHABETS ONLY'
        }
        
       
    }

     function notSelected(username){
        if (!names.includes(username)) {
            return true
        } 
    
     }

     function notLanguage(ourLanguages){
        if(ourLanguages === null){
            return false
        }
     }


    function getCounter() {
        return names.length;
    }

    function pushingNames(name) {
        if (name) {
            if (!names.includes(name)) {
                names.push(name)
            }
        }
    }

    function ourNames() {
        return names
    }


    function regeX(peopleNames) {
        var letters = /^[aA-zZ]+$/g;

        if (peopleNames.match(letters)) {
            return true;
        }
        else {

            return false;
        }
    }




    return {
        getCounter,
        greetingMessage,
        pushingNames,
        ourNames,
        regeX,
        notSelected, 
        notLanguage,
        


    }

}