const assert = require("assert");
const tests = require("../factFunction");
const pgp = require("pg-promise")();

const DATABASE_URL =
  process.env.DATABASE_URL ||
  "postgresql://postgres:pg123@localhost:5432/mygreetings_test";

const config = {
  connectionString: DATABASE_URL,
};

const db = pgp(config);

describe("Error messages", function () {
    it("should return an error message if name is not entered", function () {
      const tested = tests()
  
      let message = tested.errorMessages("", "");
  
      assert.equal("ENTER YOUR NAME AND LANGUAGE PLEASE", message);
    });
  
    it("should return an error message if language is not selected", function () {
        const tested = tests()
  
      let messageOne = tested.errorMessages("Nkuli", "");
  
      assert.equal("PLEASE CHOOSE A LANGUAGE", messageOne);
    });
  
    it("should return an error message if language and name is not entered", function () {
        const tested = tests()
  
      let output = tested.errorMessages("", "Xitsonga");
  
      assert.equal("ENTER YOUR NAME PLEASE", output);
    });
  
    it("should return an error message if the name include numbers", function () {
        const tested = tests()
  
      let output = tested.greetingMessage("Nkuli525");
  
      assert.equal(" PLEASE USE ALPHABETS ONLY", output);
    });
  });

  describe("Greeted names with different languages", function () {
    it("should return Sawubona if the person is greeted in Siswati", function () {
        const tested = tests()
  
      assert.equal(
        "Sawubona, Lesedi",
        tested.greetingMessage("Lesedi", "Siswati")
      );
    });
  
    it("should return Xewani/Avuxeni if the person is greeted in Xitsonga", function () {
        const tested = tests()
  
      assert.equal(
        "Xewani/Avuxeni, Zee",
        tested.greetingMessage("Zee", "Xitsonga")
      );
    });
  
    it("should return Aa/Ndaa if the person is greeted in Tshivenda", function () {
        const tested = tests()
  
      assert.equal(
        "Aa/Ndaa, Lukhanyo",
        tested.greetingMessage("Lukhanyo", "Tshivenda")
      );
    });
  });

//   describe("Greeted names stored in an array", function () {
//     it("should return names in a array",async function () {
//         const tested = tests()
//       await tested.ourNames([{"names": "Zintle"},{"names": "Siya"},{"names": "codex"}]);
  
//       assert.deeEqual([{"names": "Zintle"},{"names": "Siya"},{"names": "codex"}]
//       ,await tested.ourNames([{"names": "Zintle"},{"names": "Siya"},{"names": "codex"}]))
      
//     });
//     });