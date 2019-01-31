$(document).ready(function() {

  $(window).scroll(function () {
      console.log($(window).scrollTop())
    if ($(window).scrollTop() > 200) {
      $('#header').addClass('header-fixed animated slideInDown');
      $('#header-bar').fadeIn().addClass('animated slideInDown');
    }
    if ($(window).scrollTop() < 5)  {
      $(".header-fixed").removeClass('header-fixed animated slideInDown');
      $('#header-bar').fadeOut().remmoveClass('animated slideInDown');
    }
  });
});
