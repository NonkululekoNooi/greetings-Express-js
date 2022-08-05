const assert = require('assert');
const myGreeted = require('../GreetMe')


describe("Error messages", function(){
    it("should return an error message if name is not entered", function(){
    
     const greeted =myGreeted()

    let message = greeted.errorMessages('','')
    
    assert.equal("ENTER YOUR NAME AND LANGUAGE PLEASE",message);
    })

    it("should return an error message if language is not selected",function(){
    
        const greeted =myGreeted()
   
       let messageOne = greeted.errorMessages('Nkuli', '')
       
       assert.equal("PLEASE CHOOSE A LANGUAGE",messageOne);
       })

       it("should return an error message if language and name is not entered",function(){
    
        const greeted =myGreeted()
   
       let output = greeted.errorMessages('', '')
       
       assert.equal("ENTER YOUR NAME AND LANGUAGE PLEASE",output);
       })

       it("should return an error message if the name include numbers",function(){
    
        const greeted =myGreeted()
   
       let output = greeted.greetingMessage('Nkuli525')
       
       assert.equal(" PLEASE USE ALPHABETS ONLY",output);
       })
    
})

describe("Greeted names with different languages",function(){
    it("should return Sawubona if the person is greeted in Siswati", function(){
        const greeted = myGreeted()
    
        assert.equal('Sawubona, Lesedi', greeted.greetingMessage('Lesedi','Siswati'))
    })  
   
    it("should return Xewani/Avuxeni if the person is greeted in Xitsonga", function(){
        const greeted = myGreeted()
    
        assert.equal('Xewani/Avuxeni, Zee', greeted.greetingMessage('Zee','Xitsonga'))
    })  
     
    it("should return Aa/Ndaa if the person is greeted in Tshivenda", function(){
        const greeted = myGreeted()
    
        assert.equal('Aa/Ndaa, Lukhanyo', greeted.greetingMessage('Lukhanyo','Tshivenda'))
    }) 
   
})

        

describe("The counter will count how many people has been greeted", function(){
    
    it('should start at zero if there is no name and language entered', function(){
    
        const greeted = myGreeted()
   
    
        assert.equal(0, greeted.getCounter())
    })
    
    it('should counting when one person is greeted with Siswati', function(){

    const greeted = myGreeted();
    greeted.storedNames('Nkuli')
  
  

    assert.equal(1, greeted.getCounter())
    })

    it('should add up people that have been greeted', function(){

            let greeted = myGreeted();
            greeted.storedNames('Zintle')
            greeted.storedNames('Anga')
          
        
        
            assert.equal(2, greeted.getCounter())
        })
        it('should add up people that have been greeted', function(){
        
            let greeted = myGreeted();
            greeted.storedNames('Zintle','Tshivenda')
            greeted.storedNames('Siya','Tshivenda')
            greeted.storedNames('codex','Tshivenda')
            greeted.storedNames('codex','Siswati')
            
        
        
            assert.equal(3, greeted.getCounter())
        
})
})
