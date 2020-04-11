$(window).load(function() {
  $("#preloader")
    .delay(2500)
    .fadeOut("slow");
  $("body").css({ overflow: "visible" });
});

//main-nav mobile
const nav_toggle_button = "#nav-toggle";
const nav_toggle = document.querySelector(nav_toggle_button);

document.addEventListener("click", function(eventmobilenav) {
  if (!nav_toggle) return;
  const main_nav_collapse = "#main-nav";
  const main_nav = document.querySelector(main_nav_collapse);
  main_nav.classList.toggle("collapse");
});
