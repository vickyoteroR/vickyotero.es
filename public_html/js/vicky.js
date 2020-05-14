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
  if (!eventmobilenav.target.matches("#nav-toggle")) return;
  //if (!nav_toggle) return;
  //console.log(eventmobilenav);
  const main_nav_collapse = "#main-nav";
  const main_nav = document.querySelector(main_nav_collapse);
  main_nav.classList.toggle("collapse");
});

//navbar PORTFOLIO

const portfolio_tab_tag = ".porfolio .tab";
console.log(portfolio_tab_tag);

const portfolio_tab = document.querySelector(portfolio_tab_tag);
console.log(portfolio_tab);
document.addEventListener("click", function(eventportfolionav) {
  if (!eventportfolionav.target.matches(portfolio_tab)) return;
  // console.log(eventportfolionav);
});

//acordeón accesibilidad

const barrier_label = document.querySelectorAll(".barrier").length;
//console.log(barrier_label);
[].forEach.call(document.querySelectorAll(".barrier"), function(eventaccordion) {
  eventaccordion.addEventListener("click", function() {
    //console.log(eventaccordion);
    if (!barrier_label) return;
    //console.log(eventaccordion);

    //eventaccordion.classList.add("on");
  });
});
