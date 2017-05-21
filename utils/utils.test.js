 
const expect = require("expect");

const utils = require("./utils.js");


describe("Utils", ()=>{
it("should square the number", ()=>{
    var res = utils.square(4);
    expect(res).toBe(16).toBeA("number");
});

it("should add two numbers", ()=>{
    var res = utils.add(33, 11);
    expect(res).toBe(44).toBeA("number");
});
it("Should add two number after 1 sec", (done)=>{
    utils.asyncAdd(4,3,(sum)=>{
        expect(sum).toBe(7).toBeA("number");
        done();
    });
});

it("Should square the number after 1 sec", (done)=>{
    utils.asyncSquare(4, (square)=>{
        expect(square).toBe(16);
        done();
    });
});

it("should verify first and last names are set", ()=>{
    var user = {
        age: 24,
        location: "UAE"
    };
    var res = utils.setName(user, "Umer Jamil");
    expect(res).toBeA("object").toInclude({
        firstName: "Umer",
        lastName: "Jamil"
    });
});
    
});


// it("should expect some values", ()=>{
//     // expect(12).toNotBe(11);
//     // expect({name: "Andrew"}).toEqual({name: "Andrew"});
//     // expect([1,2,3,4]).toExclude(5);


// });