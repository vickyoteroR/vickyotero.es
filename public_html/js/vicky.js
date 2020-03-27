$(window).load(function() {
  $("#preloader").addClass("on");
  $("#preloader")
    .delay(2500)
    .fadeOut("slow");
  $("body").css({ overflow: "visible" });
});
