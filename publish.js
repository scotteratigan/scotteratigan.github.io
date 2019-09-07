const ghpages = require("gh-pages");

ghpages.publish("build", function(err) {
  if (err) return console.error("Error encountered when publishing:", err);
  console.log("Publishing completed.");
});
