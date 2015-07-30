App.IndexController = Ember.Controller.extend({
  actions: {
    scrollToContent: function() {
      var bottom = $("body").innerHeight()
      window.scrollTo(0,bottom);
    }
  }
})