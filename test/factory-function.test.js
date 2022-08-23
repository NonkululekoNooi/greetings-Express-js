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

