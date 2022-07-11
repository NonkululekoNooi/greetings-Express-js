function greet(existingNames) {

    var names = existingNames || [];




    function greetingMessage(yourName, yourLanguage) {

        if (yourName) {
            if (/[aA-zZ]+$/.test(yourName)) {

                if (yourLanguage === 'Siswati') {
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