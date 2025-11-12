app.post("/",function(req, res) {
    res.send(" a post request ? nice");
});

app.put("/",function(req, res) {
    res.send(" I Dont see a lot of put requests anymore");
});

app.delete("/",function(req, res) {
    res.send(" oh my, a delete");
});

app.listen(3000, function() {
    console.log("CRUD application is listening on port 3000");
});