const assert = require("assert");
const myGreeted = require("../GreetMe");
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
    const greeted = myGreeted();

    let message = greeted.errorMessages("", "");

    assert.equal("ENTER YOUR NAME AND LANGUAGE PLEASE", message);
  });

  it("should return an error message if language is not selected", function () {
    const greeted = myGreeted();

    let messageOne = greeted.errorMessages("Nkuli", "");

    assert.equal("PLEASE CHOOSE A LANGUAGE", messageOne);
  });

  it("should return an error message if language and name is not entered", function () {
    const greeted = myGreeted();

    let output = greeted.errorMessages("", "Xitsonga");

    assert.equal("ENTER YOUR NAME PLEASE", output);
  });

  it("should return an error message if the name include numbers", function () {
    const greeted = myGreeted();

    let output = greeted.greetingMessage("Nkuli525");

    assert.equal(" PLEASE USE ALPHABETS ONLY", output);
  });
});

describe("Greeted names with different languages", function () {
  it("should return Sawubona if the person is greeted in Siswati", function () {
    const greeted = myGreeted();

    assert.equal(
      "Sawubona, Lesedi",
      greeted.greetingMessage("Lesedi", "Siswati")
    );
  });

  it("should return Xewani/Avuxeni if the person is greeted in Xitsonga", function () {
    const greeted = myGreeted();

    assert.equal(
      "Xewani/Avuxeni, Zee",
      greeted.greetingMessage("Zee", "Xitsonga")
    );
  });

  it("should return Aa/Ndaa if the person is greeted in Tshivenda", function () {
    const greeted = myGreeted();

    assert.equal(
      "Aa/Ndaa, Lukhanyo",
      greeted.greetingMessage("Lukhanyo", "Tshivenda")
    );
  });
});

describe("The counter will count how many people has been greeted", async function () {
    this.beforeEach(async function () {
        await db.none('DELETE FROM greeted_names');
    });
 

  it("should counting when one person is greeted with Siswati", async function () {
    const greeted = myGreeted(db);
    await greeted.storedNames("Nkuli", "Siswati");

    assert.equal(1, await greeted.getCounter());
  });

  it("should add up people that have been greeted", async function () {
    let greeted = myGreeted(db);
    await greeted.storedNames("Zintle");
    await greeted.storedNames("Anga");

    assert.equal(2, await greeted.getCounter());
  });
  it("should add up people that have been greeted", async function () {
    let greeted = myGreeted(db);
    await greeted.storedNames("Zintle");
    await greeted.storedNames("Siya");
    await greeted.storedNames("codex");
    await greeted.storedNames("codex");

    assert.equal(3, await greeted.getCounter());
  });
});


describe("Greeted names stored in an array", function () {
  it("should return names in a array",async function () {
    const greeted = myGreeted(db);
    await greeted.ourNames([{"names": "Zintle"},{"names": "Siya"},{"names": "codex"}]);

    assert.deepEqual( [{"names": "Zintle"},{"names": "Siya"},{"names": "codex"}]
    ,await greeted.ourNames([{"names": "Zintle"},{"names": "Siya"},{"names": "codex"}]))
    
  });
  });
