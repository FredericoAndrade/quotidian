App.SubNavComponent = Ember.Component.extend({
  actions: {
    product: function() {
      $(".subNav li").removeClass("active")
      $(".subNav li.product").addClass("active")
      $(".subContent").hide()
      $(".subContent.product").css("display","block")
    },
    traction: function() {
      $(".subNav li").removeClass("active")
      $(".subNav li.traction").addClass("active")
      $(".subContent").hide()
      $(".subContent.traction").css("display","block")
    },
    seed: function() {
      $(".subNav li").removeClass("active")
      $(".subNav li.seed").addClass("active")
      $(".subContent").hide()
      $(".subContent.seed").css("display","block")
    }
  }
})
