function greet(existingNames) {

    var names = existingNames || [];




    function greetingMessage(yourName, yourLanguage) {
let letters = /[aA-zZ]+$/
        if (yourName) {
            console.log(letters.test(yourName))
            if (letters.test(yourName)) {
                
                if (yourLanguage === 'Siswati') {
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

        if (name) {
            if (!names.includes(name)) {
                names.push(name)
            }
        }
    }


    function ourNames() {
        return names
    }


    return {
        getCounter,
        greetingMessage,
        pushingNames,
        ourNames,
       
    }

}