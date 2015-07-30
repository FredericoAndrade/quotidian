App.SubNavComponent = Ember.Component.extend({
  actions: {
    scrollToContent: function() {
      var bottom = $("body").innerHeight()
      window.scrollTo(0,bottom);
      console.log(this)
    }
  }
})
