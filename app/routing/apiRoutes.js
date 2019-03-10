var path = require("path");
var friends = require("../data/friends.js");

app.get("/api/survey_results", function(req, res) {
    return res.json(friends);
});

app.post("/api/survey_results", function(req, res) {

    var newFriend = req.body;

    console.log(newFriend);

    friends.push(newFriend);

    res.json(newFriend);
});