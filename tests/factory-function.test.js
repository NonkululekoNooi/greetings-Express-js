
describe("Greeted name", function(){
    it("should return a persons name",function(){
    let createGreets = greet('existingNames');
    let message =createGreets.greetingMessage(names.push('Kamva'))
    
    assert.equal(names.push('kamva'), message )
    
    })
    
    })
describe("Greeting a person with language without typing a name", function(){
it("should greet return an error message",function(){
let createGreets = greet('existingNames');
let message =createGreets.greetingMessage('Sawubona')
let messageOne =createGreets.greetingMessage('Xewani/Avuxeni')
let messageTwo =createGreets.greetingMessage('Aa/Ndaa')

assert.equal(' YOU FORGOT TO TYPE YOUR NAME', message )
assert.equal(' YOU FORGOT TO TYPE YOUR NAME', messageOne )
assert.equal(' YOU FORGOT TO TYPE YOUR NAME', messageTwo )

})

})

        

describe("The counter will count how many people has been greeted", function(){
    
    it('should start at zero if there is no one created', function(){
    
        let createGreets = greet();
        createGreets.greetingMessage()
    
        assert.equal(0, createGreets.getCounter())
    })
    it('should start at zero if there is no one created', function(){
    
        let createGreets = greet();
        createGreets.greetingMessage()
    
        assert.equal(0, createGreets.getCounter())
    })
    it('should greet and  counting when one person is greeted with Siswati', function(){

    let createGreets = greet();
     let message = createGreets.getCounter()

    assert.equal(1, message )
    })

    it('should add up people that have been greeted', function(){

            let createGreets = greet();
            createGreets.greetingMessage('Zintle','Tshivenda')
            createGreets.greetingMessage('Siya','Tshivenda')
          
        
        
            assert.equal(2, createGreets.getCounter())
        })
        it('should add up people that have been greeted', function(){
        
            let createGreets = greet();
            createGreets.greetingMessage('Zintle','Tshivenda')
            createGreets.greetingMessage('Siya','Tshivenda')
            createGreets.greetingMessage('codex','Tshivenda')
            
        
        
            assert.equal(3, createGreets.getCounter())
        
})
})