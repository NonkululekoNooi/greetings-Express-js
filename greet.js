const radioBtn = document.querySelector(".language");
const textInput = document.getElementById("EnterYourName");


var storedNames = [];




if (localStorage['names']) {

     storedNames = JSON.parse(localStorage.getItem(['names']));

}



let myGreeted = greet(storedNames);


document.getElementById("counter").innerHTML = myGreeted.getCounter()





function myGreetings() {

     var checkedRadioBtn = document.querySelector("input[name='languages1']:checked");

     if (checkedRadioBtn == null && storedNames == ""){

     heading.innerHTML = " Please choose a language and enter your name"
     return
     }
     
     if (checkedRadioBtn) {
          var language = checkedRadioBtn.value
          myGreeted.pushingNames(textInput.value)

          document.getElementById("heading").innerHTML = myGreeted.greetingMessage(textInput.value, language);
          document.getElementById("counter").innerHTML = myGreeted.getCounter();
          localStorage.setItem('names', JSON.stringify(myGreeted.ourNames()))
          EnterYourName.value = ' ';
          
     }else if(checkedRadioBtn != null){
          return true
     }else {
          heading.innerHTML = " PLEASE CHOOSE A LANGUAGE"
          
     }



}
function myReset() {
     let counter = 0;
     document.getElementById("reset").innerHTML = localStorage.clear()
     document.getElementById("counter").innerHTML = counter
     location.reload()
     document.getElementById("heading").innerHTML = " "

}


