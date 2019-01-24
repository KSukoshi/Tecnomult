$(document).ready(function() {

  $(window).scroll(function () {
      console.log($(window).scrollTop())
    if ($(window).scrollTop() > 240) {
      $('#header').addClass('header-fixed animated slideInDown');
    }
    if ($(window).scrollTop() < 200) {
      $('#header').removeClass('header-fixed animated slideInDown');
    }
  });
});
