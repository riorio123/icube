require(
  [ "jquery" ],
  function($){
      $(window).scroll(function () {
          if (!$('body.checkout-index-index').length) {
              if( $(window).scrollTop() > $('.header-block').offset().top && !($('.header-block').hasClass('sticky'))){
              $('.header-block').addClass('sticky');
              } else if ($(window).scrollTop() == 0){
              $('.header-block').removeClass('sticky');
          }
          }
      });
  }
);
