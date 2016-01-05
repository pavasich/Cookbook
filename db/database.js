/*

Make sure you execute this command first
  mongoimport --db cookbook_db --collection cookbooks --file db/dummyData.json --jsonArray
*/
var mongoose = require('mongoose');

var url = "mongodb://localhost/cookbook_db";

mongoose.connect(url);

// Andrew's favorite mongoose messages
mongoose.connection.on("connected", function() {
  console.log("SPINNING UP. MONGOOSE ONLINE.")
});
mongoose.connection.on("error",function() {
  console.log("HOLD ME, MONGOOSE. THE DB DIED.")
});
mongoose.connection.on("disconnected",function() {
  console.log("APPLYING BRAKES. MONGOOSE SHUTTING DOWN.")
});
