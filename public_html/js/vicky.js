$(window).load(function() {
  $("#preloader")
    .delay(2500)
    .fadeOut("slow");
  $("body").css({ overflow: "visible" });
});

//main-nav mobile

const nav_toggle_button = "#nav-toggle";
const nav_toggle = document.querySelector(nav_toggle_button);
console.log(nav_toggle);
document.addEventListener("click", function(eventmobilenav) {
  if (!eventmobilenav.target.matches("#nav-toggle")) return;
  //if (!nav_toggle) return;
  console.log(eventmobilenav);
  const main_nav_collapse = "#main-nav";
  const main_nav = document.querySelector(main_nav_collapse);
  main_nav.classList.toggle("collapse");
});

//acordeón accesibilidad

const barrier_label = document.querySelectorAll(".barrier").length;
//console.log(barrier_label);
[].forEach.call(document.querySelectorAll(".barrier"), function(eventaccordion) {
  eventaccordion.addEventListener("click", function() {
    console.log(eventaccordion);
    if (!barrier_label) return;
    console.log(eventaccordion);

    //eventaccordion.classList.add("on");
  });
});
