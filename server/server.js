const PORT = 3000;

var app = (require("express"))();

app.get("/", (req, res)=>{
    res
    .status(200)
    .send({
        error: "Page not found!",
        name: "Todo App v1.0"
    });
});

app.get("/users", (req, res)=>{
    res.send([
        {
            name: "user1",
            age: "20"
        },
        {
            name: "user2",
            age: "21"
        },
        {
            name: "user2",
            age: "22"
        }
    ]);
});

app.listen(PORT, ()=>{
    console.log(`Listening to ${PORT}`);
});

module.exports.app = app;