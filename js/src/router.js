App.Router.map(function() {
  this.resource("index", {path:"/"}, function() {
    this.route("product", {path:"/product"});
    this.route("traction", {path:"/traction"});
    this.route("seed", {path:"/seed"});
  })
  this.resource("companies");
  this.resource("team", function() {
    this.route("teamMember", {path:":teamMember_id"})
  });
  this.resource("stream");
  this.resource("about");
  this.resource("careers");
  this.resource("contact");
})