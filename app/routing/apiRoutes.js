var friends = require("../data/friends.js");

console.log(friends)

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        return res.json(friends);
    });

    app.post("/api/friends", function(req, res) {

        var newFriend = req.body;
        var currentUser = newFriend.scores;
        var matchName;
        var totalDiff = 100;

        for (var i = 0; i < friends.length; i++) {

            var diff = 0;

            for (var j = 0; j < currentUser.length; j++) {

                diff += Math.abs(friends[i].scores[j] - currentUser[j])
            }

            if (diff < totalDiff) {
                totalDiff = diff;
                matchName = friends[i].name;
            }

        }

        friends.push(newFriend);

        res.json({status: 'OK', matchName: matchName});
    });
}