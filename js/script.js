$(document).ready(function () {
  $(".profile-slider").slick({
    arrows: false,
    dots: false,
    adaptiveHeight: true,
    speed: 500,
    waitForAnimate: false,
    touchThreshold: 10,
    centerMode: true,
    centerPadding: 0,
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: ".profile-sliderbig",
    focusOnSelect: true,
    variableWidth: true,
  });
});

$(document).ready(function () {
  $(".profile-sliderbig").slick({
    arrows: false,
    dots: false,
    adaptiveHeight: true,
    speed: 500,
    waitForAnimate: false,
    touchThreshold: 10,
    centerPadding: 0,
    slidesToShow: 1,
    asNavFor: ".profile-slider",
  });
});
