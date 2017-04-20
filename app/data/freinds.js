// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================
var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


var friendArray = [
  {
    friendName: "Ahmed",
    scores: [
    5,
    4,
    2,
    5,
    4,
    4,
    2,
    1,
    5,
    3
    ]
  }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendArray;