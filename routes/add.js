var data = require("../data.json");

exports.addFriend = function (request, response) {
  // Your code goes here
  newFriend = {
    name: request.query.name,
    description: request.query.description,
    imageURL: "https://loremflickr.com/500/500/people",
  };
  data.friends.push(newFriend);
  console.log(request.query.name);
  response.render("index", data);
};
