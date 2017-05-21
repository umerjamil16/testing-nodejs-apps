const expect = require("expect");
const rewire = require("rewire");

var app = rewire("./app.js");
// app.__set__


describe("App", ()=>{
    var db = {
        saveUser: expect.createSpy()
    };

    app.__set__("db", db);

    it("should call the spy correctly", ()=>{
        var spy = expect.createSpy();
        spy("Andrew", 25);
        expect(spy).toHaveBeenCalledWith("Andrew", 25);
    });

    it("should call saveUser with user obj", ()=>{
        var email = "some email";
        var password = "123abc";

        app.handleSignup(email, password);
        expect(db.saveUser).toHaveBeenCalledWith({
            email, password
        });

    });
});