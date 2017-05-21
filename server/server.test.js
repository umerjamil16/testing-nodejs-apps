const request = require("supertest");

const expect = require("expect");

var app = require("./server.js").app;

describe("Server", ()=>{
    describe("GET /", ()=>{
it("should return hello world res", (done)=>{
    request(app)
    .get("/")
    .expect(200)
    .expect((res)=>{
        expect(res.body).toInclude({
            error: "Page not found!"
        });
    })
    .end(done);
});    });

describe("GET /users", ()=>{
    it("should assert 200 and user object exists ", (done)=>{
    request(app)
    .get("/users ")
    .expect(200)
    .expect((res)=>{
        expect(res.body[0]).toInclude({
            age: "20"
        });
    })
    .end(done);

});        

});

});

