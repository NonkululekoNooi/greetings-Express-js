const assert = require('assert');
const myGreeted = require('./GreeMe')

describe("Name is entered with number", function(){
    it("should return an error message",function(){
    
     const greeted = myGreeted()

    greeted.greetingMessage('Nk4852')
    
    assert.equal('Please enter valid name',greeted.greetingMessage());
    })
    
})

        

describe("The counter will count how many people has been greeted", function(){
    
    it('should start at zero if there is no one created', function(){
    
        const greeted = myGreeted()
        greeted.greetingMessage()
    
        assert.equal(0, greeted.getCounter())
    })
    
//     it('should greet and  counting when one person is greeted with Siswati', function(){

//     let myGreeted = greet();
//     myGreeted.greetingMessage('Sawubona, Nkuli')
  

//     assert.equal(1, myGreeted.getCounter() )
//     })

//     it('should add up people that have been greeted', function(){

//             let createGreets = greet();
//             createGreets.greetingMessage('Zintle')
//             createGreets.greetingMessage('Siya')
          
        
        
//             assert.equal(2, createGreets.getCounter())
//         })
//         it('should add up people that have been greeted', function(){
        
//             let createGreets = greet();
//             createGreets.greetingMessage('Zintle','Tshivenda')
//             createGreets.greetingMessage('Siya','Tshivenda')
//             createGreets.greetingMessage('codex','Tshivenda')
            
        
        
//             assert.equal(3, createGreets.getCounter())
        
// })
})

describe("check the existing names",function(){
    it("should store the names in an empty array", function(){
        const greeted = myGreeted()
        greeted.pushingNames('Nkuli')
        assert.equal('Nkuli',greeted.ourNames('Nkuli'))
    }) 
    it("should store the names in an empty array", function(){
        const greeted = myGreeted()
        greeted.pushingNames('Zee')
        assert.equal('Zee',greeted.ourNames('Zee'))
    }) 
    it("should store the names in an empty array", function(){
        const greeted = myGreeted()
        greeted.pushingNames('Lesedi')
        assert.equal('Lesedi',greeted.ourNames('Lesedi'))
    }) 
})