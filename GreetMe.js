module.exports = function greet(existingNames) {

    var names = existingNames || [];

    function greetingMessage(yourName, yourLanguage) {
      
        let letters = /^[a-z A-Z]+$/
        if (yourName) {
            console.log(yourName)
            console.log(letters.test(yourName))
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
                if(yourName.trim().length < 1) return 'PLEASE ENTER YOUR NAME'
                return " PLEASE USE ALPHABETS ONLY"
            }

        } else {
            return 'Please enter valid name'
        }

    }

    function getCounter() {
        return names.length;
    }

    function pushingNames(name) {

       if(names.includes(name)){
        return false
       }else{
        return names.push(name)
       }
    }


    function ourNames() {
        return names
    }

    function errorMessages(username){
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
       
    }

}