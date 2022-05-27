
describe("The name is already greeted", function () {

    it("should return true if the already greeted", function () {

        let createGreets = greet('existingNames');
        createGreets.pushingNames(true);

        assert.equal(true, createGreets.pushingNames())
    })
})

describe("Greeted name", function () {
    it("should greet the person if the name is not greeted", function () {
        let createGreets = greet();
        createGreets.greetingMessage('Nomzamo')

        assert.equal(true, createGreets.pushingNames())

    })
    it("should greet the person if the name is not greeted", function () {
        let createGreets = greet();
        createGreets.greetingMessage('Kamva')

        assert.equal(true, createGreets.pushingNames())

    })
    it("should greet the person if the name is not greeted", function () {
        let createGreets = greet();
        createGreets.greetingMessage('Kamva')

        assert.equal(true, createGreets.pushingNames())

    })

})

describe("Greeting a person with language without typing a name", function () {
    it("should greet return an error message", function () {
        let createGreets = greet('existingNames');
        let message = createGreets.greetingMessage('Sawubona')
       

        assert.equal(' YOU FORGOT TO TYPE YOUR NAME', message)
       

    })
    it("should greet return an error message", function () {
        let createGreets = greet('existingNames');
       
        let message = createGreets.greetingMessage('Xewani/Avuxeni')
       

        assert.equal(' YOU FORGOT TO TYPE YOUR NAME', message)
      

    })
    it("should greet return an error message", function () {
        let createGreets = greet('existingNames');
        let message = createGreets.greetingMessage('Aa/Ndaa')

        assert.equal(' YOU FORGOT TO TYPE YOUR NAME', message)

    })
})


describe("The counter will count how many people has been greeted", function () {

    it('should start at zero if there is no one created', function () {

        let createGreets = greet();
        createGreets.greetingMessage()

        assert.equal(0, createGreets.getCounter())
    })

    it('should greet and  counting when one person is greeted with Siswati',function (){

        let createGreets = greet();
        createGreets.greetingMessage('Zintle','Siswati')

        assert.equal(1 , createGreets.getCounter())
    })

    it('should add up people that have been greeted by Siswati aand Xitsonga', function () {

        let createGreets = greet();
        createGreets.greetingMessage('Zintle','Tshivenda')
        createGreets.greetingMessage('Siya', 'Xitsonga')
        assert.equal(2, createGreets.getCounter());
    })
    it('should add up people that have been greeted by all 3 language', function () {

        let createGreets = greet();
        createGreets.greetingMessage('Zintle', 'Tshivenda')
        createGreets.greetingMessage('Siya', 'Siswati')
        createGreets.greetingMessage('codex', 'Xitsonga')



        assert.equal(3, createGreets.getCounter())
    })
    it('should not add up people that have been already greeted by all 3 language', function () {

        let createGreets = greet();
        createGreets.greetingMessage('Zintle', 'Tshivenda')
        createGreets.greetingMessage('Siya', 'Siswati')
        createGreets.greetingMessage('codex', 'Xitsonga')
        createGreets.greetingMessage('Zee', 'Siswati')



        assert.equal(4, createGreets.getCounter())
    })
})
