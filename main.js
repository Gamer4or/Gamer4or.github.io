// function openNav() {
//   document.getElementById("nav_items").style.width = "20%";
// }

// function closeNav() {
//   document.getElementById("nav_items").style.width = "0";
// }

$(document).ready(function() {
  $(".menu").click(function() {
    $(".nav_bar").addClass("show");
  });
  $(".close_btn").click(function() {
    $(".nav_bar").removeClass("show");
  });
});
