App.Router.map(function() {
  this.resource("index", {path: "/"}, function() {
    this.route("product");
    this.route("traction");
    this.route("seed");
  });
  this.resource("companies");
  this.resource("team", function() {
    this.route("teamMember", {path:":teamMember_id"})
  });
  this.resource("stream");
  this.resource("careers");
  this.resource("contact");
})