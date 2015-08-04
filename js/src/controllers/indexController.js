App.IndexController = Ember.Controller.extend({
  actions: {
    indexProduct: function() {
      $(".subNav").css("display","table")
      $(".subNav li").removeClass("active")
      $(".subNav li.product").addClass("active")
      $(".subContent").hide()
      $(".subContent.product").css("display","block")
      $("html, body").animate({
        scrollTop: $("#indexContent").offset().top
        }, 200)
    },
    indexTraction: function() {
      $(".subNav").css("display","table")
      $(".subNav li").removeClass("active")
      $(".subNav li.traction").addClass("active")
      $(".subContent").hide()
      $(".subContent.traction").css("display","block")
      $("html, body").animate({
        scrollTop: $("#indexContent").offset().top
        }, 200)
    },
    indexSeed: function() {
      $(".subNav").css("display","table")
      $(".subNav li").removeClass("active")
      $(".subNav li.seed").addClass("active")
      $(".subContent").hide()
      $(".subContent.seed").css("display","block")
      $("html, body").animate({
        scrollTop: $("#indexContent").offset().top
        }, 200)
    },
  }
})