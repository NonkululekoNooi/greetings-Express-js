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
     if (checkedRadioBtn == null && textInput.value  == "") {
          heading.innerHTML = " Please choose a language and enter your name"
          
     }else if(checkedRadioBtn !== null && textInput.value === ""){
          heading.innerHTML = 'PLEASE ENTER YOUR NAME'
     }else if (checkedRadioBtn == null && textInput.value !== '') {
          heading.innerHTML = "PLEASE CHOOSE A LANGUAGE"  
     } 

     setTimeout(function(){
          heading.innerHTML = " "
     }, 6000)
    

     if (checkedRadioBtn) {
var textBox = textInput.value.toUpperCase()
          var language = checkedRadioBtn.value
           myGreeted.pushingNames(textBox)
          document.getElementById("heading").innerHTML = myGreeted.greetingMessage(textBox, language);
          document.getElementById("counter").innerHTML = myGreeted.getCounter();
          localStorage.setItem('names', JSON.stringify(myGreeted.ourNames()))

     }

      EnterYourName.value = ' ';
}
function myReset() {
     let counter = 0;
     document.getElementById("counter").innerHTML = counter
     localStorage.removeItem('names')
     location.reload()
     document.getElementById("heading").innerHTML = " "

}


