// window.$ = window.jQuery =  require('jquery');
// window.slick =              require('./vendor/bower/slick');
// window.inputmask =          require('./vendor/bower/jquery.inputmask.bundle');

jQuery(document).ready(function($){

  /* Hamburger */
  $('.hamburger').click(function(e){
    e.preventDefault();
    $('.nav__list-wrapper').toggle();
  });

  /* City list */
  var changingCityName = $('.city--spb .city__name')
  $(changingCityName).click(function(){
    $('.city__dropdown').toggle();
  });

  /* изменение названия, телефона и почты при выборе города */
  $('.city__item').on('click', function(){
    $(changingCityName).html($(this).html());
    $('.city--spb .city__email-wrapper').html('<a class="city__email" target="_blank" href="mailto:'+$(this).data("email0")+'">'+$(this).data("email0")+'</a>');
    if ($(this).data("email1") !== undefined) {
      $('<a class="city__email" target="_blank" href="mailto:'+$(this).data("email1")+'">'+$(this).data("email1")+'</a>').appendTo($('.city--spb .city__email-wrapper'));
    }

    var tel0 = $(this).data("tel0");
    var hrefTel0 = tel0.replace(/\D/g, "");
    $('.city--spb .city__tel-wrapper').html('<a class="city__tel" target="_blank" href="tel:+'+hrefTel0+'">'+tel0+'</a>');

    if ($(this).data("tel1") !== undefined) {
      var tel1 = $(this).data("tel1");
      var hrefTel1 = tel1.replace(/\D/g, "");
      $('<a class="city__tel" target="_blank" href="tel:+'+hrefTel1+'">'+tel1+'</a>').appendTo($('.city--spb .city__tel-wrapper'));
    }

    $('.city__dropdown').hide();
    return false;
  });

    $('*[data-form]').click( function(e){
    e.preventDefault();
    var suffix = $(this).data('form');
    $('body').css({'overflow':'hidden'});
    $('.overlay').show();
    var formClass = '.form--' + suffix;
    $('.overlay').find(formClass).fadeIn();
  });
  /* Close modal window */
  $('.overlay__bg, .overlay__close').click( function(e){
    e.preventDefault();
    $('body').css({'overflow':'auto'});
    $(this).closest('.overlay').find('.form').fadeOut();
    $(this).closest('.overlay').fadeOut(400);
  });

  /* галерея Gratitude */
  $('.gratitude__gallery').slick({
    infinite: true,
    arrows: true,
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerPadding: '0',
    variableWidth: true
  });
  /* Gratitude in the modal window */
  $('.gratitude__link').click( function(e){
    e.preventDefault();
    $('body').css({"overflow":"hidden"});
    $('.gratitude-overlay').show();
    $('.gratitude').css({"opacity":"0"});
    $(this).closest('.gratitude__slide').find('.gratitude__modal').clone().appendTo($('.gratitude-overlay'))
    .show()
    .animate({opacity: 1}, 200);
  });

  /* Close the modal window */
  $('.gratitude-overlay').click( function(){
    $('body').css({"overflow":"auto"});
    $(this).find('.gratitude__modal')
      .animate({opacity: 0}, 200,
        function(){
          $(this).remove();
          $('.gratitude-overlay').fadeOut(400);
          $('.gratitude').css({"opacity":"1"});
        }
      );
  });

    /* табы в услугах */
  $('.services__link').click(function(e) {
      e.preventDefault();
      $(this).closest('.services__switcher').find('.services__link').removeClass('services__link--active');
      $(this).addClass('services__link--active');
      $(this).closest('.services').find('.services-type').hide();
      $( $(this.hash) ).show();
  });

  $('.contacts__link').click(function(e) {
      e.preventDefault();
      $(this).closest('.contacts__switcher').find('.contacts__link').removeClass('contacts__link--active');
      $(this).addClass('contacts__link--active');
      $(this).closest('.contacts').find('.contacts__map').hide();
      $( $(this.hash) ).show();
  });

  /* галерея "с нами уже работают" */
  if ($(window).width() <= 480) {
    $('.clients__gallery').slick({
      infinite: true,
      arrows: false,
      dots: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: '0'
    });
  } else if ($(window).width() <= 768) {
    $('.clients__gallery').slick({
      infinite: true,
      arrows: true,
      dots: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: '0'
    });
  } else {
    $('.clients__gallery').slick({
      infinite: true,
      arrows: true,
      dots: false,
      slidesToShow: 5,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: '0'
    });
  }

  /* галерея "с нами уже работают" */
  if ($(window).width() <= 480) {
    $('.manager-gallery__slider').slick({
      infinite: true,
      arrows: false,
      dots: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: '0'
    });
  } else if ($(window).width() <= 768) {
    $('.manager-gallery__slider').slick({
      infinite: true,
      arrows: true,
      dots: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: '0'
    });
  } else {
    $('.manager-gallery__slider').slick({
      infinite: true,
      arrows: true,
      dots: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: '0'
    });
  }

  /* Side fixed menu showing */
  $(".side-fixed-menu").animate({right: 0}, 1000)

  $('.side-fixed-menu__link--toggle').click(function(e){
    e.preventDefault();
    var sideFixedDetails = $(this).siblings($('.side-fixed-details'));
    if($(sideFixedDetails).is(":visible")){
      $(sideFixedDetails).hide();
    } else if($('.side-fixed-details:not(sideFixedDetails)').is(":visible")) {
      $('.side-fixed-details').hide();
      $(sideFixedDetails).show();
    } else {
      $(sideFixedDetails).show();
    }
  });

  /* кнопка "наверх" */
  $('.side-fixed-menu__link--up').click(function(e) {
      e.preventDefault();
      $('html, body').animate({scrollTop: 0},1000);
      return false;
  });

  /* галерея Reviews */
  if ($(window).width() <= 480) {
    $('.reviews__gallery').slick({
      infinite: true,
      arrows: false,
      dots: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: '0'
    });
  } else if ($(window).width() <= 768) {
    $('.reviews__gallery').slick({
      infinite: true,
      arrows: true,
      dots: false,
      slidesToShow: 2,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: '0'
    });
  } else {
    $('.reviews__gallery').slick({
      infinite: true,
      arrows: true,
      dots: false,
      slidesToShow: 5,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: '0'
    });
  }
  /* Gratitude in the modal window */
  $('.reviews__link').click( function(e){
    e.preventDefault();
    $('body').css({"overflow":"hidden"});
    $('.overlay').show();
    $(this).closest('.reviews__slide').find('.reviews__modal').clone().appendTo($('.overlay'))
    .show()
    .animate({opacity: 1}, 200);
  });
  /* Close the modal window */
  $('.overlay').click( function(){
    $('body').css({"overflow":"auto"});
    $(this).find('.reviews__modal')
      .animate({opacity: 0}, 200,
        function(){
          $(this).remove();
          $('.overlay').fadeOut(400);
        }
      );
  });

  /* Маска телефона */
  $('#formCall input[type="tel"]').inputmask("+7(999)9999999");

      /* Map */
    var map = new GMaps({
        el: '.contacts__map--moscow',
        lat: 55.752596,
        lng: 37.665174,
        scrollwheel: false
    });
    map.drawOverlay({
        lat: 55.752596,
        lng: 37.665174,
        content: '<div class="pin"><div class="pin__wrapper"><h2 class="pin__title">Контакты</h2><a class="pin__phone" href="tel:0000000">+7 499 600-90-90</a><a class="pin__phone" href="tel:0000000">+7 499 600-90-90</a><p class="pin__text">Москва, <br>Костомаровский пер., 3</p><span>/ </span><a class="pin__mail" href="mailto:info@mostest.su">info@mostest.su</a><span> /</span></div></div>'
    });

        var map = new GMaps({
        el: '.contacts__map--krasnodar',
        lat: 55.752596,
        lng: 37.665174,
        scrollwheel: false
    });
    map.drawOverlay({
        lat: 55.752596,
        lng: 37.665174,
        content: '<div class="pin"><div class="pin__wrapper"><h2 class="pin__title">Контакты</h2><a class="pin__phone" href="tel:0000000">+7 499 600-90-90</a><a class="pin__phone" href="tel:0000000">+7 499 600-90-90</a><p class="pin__text">Краснодар, <br>Костомаровский пер., 3</p><span>/ </span><a class="pin__mail" href="mailto:info@mostest.su">info@mostest.su</a><span> /</span></div></div>'
    });

        var map = new GMaps({
        el: '.contacts__map--kaluga',
        lat: 55.752596,
        lng: 37.665174,
        scrollwheel: false
    });
    map.drawOverlay({
        lat: 55.752596,
        lng: 37.665174,
        content: '<div class="pin"><div class="pin__wrapper"><h2 class="pin__title">Контакты</h2><a class="pin__phone" href="tel:0000000">+7 499 600-90-90</a><a class="pin__phone" href="tel:0000000">+7 499 600-90-90</a><p class="pin__text">Калуга, <br>Костомаровский пер., 3</p><span>/ </span><a class="pin__mail" href="mailto:info@mostest.su">info@mostest.su</a><span> /</span></div></div>'
    });

        var map = new GMaps({
        el: '.contacts__map--nn',
        lat: 55.752596,
        lng: 37.665174,
        scrollwheel: false
    });
    map.drawOverlay({
        lat: 55.752596,
        lng: 37.665174,
        content: '<div class="pin"><div class="pin__wrapper"><h2 class="pin__title">Контакты</h2><a class="pin__phone" href="tel:0000000">+7 499 600-90-90</a><a class="pin__phone" href="tel:0000000">+7 499 600-90-90</a><p class="pin__text">Нижний Новгород, <br>Костомаровский пер., 3</p><span>/ </span><a class="pin__mail" href="mailto:info@mostest.su">info@mostest.su</a><span> /</span></div></div>'
    });

});


// var anyForm = $('.form form');
// var messageSuccess = $('.overlay .help-block-success');
// $(anyForm).submit(function (e) {
//   $.ajax({
//     url: $(this).attr("action"),
//     data: $(this).serialize(),
//     type: 'post',
//     dataType: "json",
//     success: function (data) {
//       alert("Спасибо! Ваш запрос отправлен специалисту по сертификации");
//       modalSuccess();
//     },
//     error: function () {
//       alert('Отправка формы не удалась. Попробуйте еще раз');
//     }
//   })
//   e.preventDefault();
// });

  // function modalSuccess() {
  //   $('.overlay').show();
  //   $(messageSuccess).fadeIn();
  //   setTimeout(function() {
  //     $(messageSuccess).hide();
  //     $('.overlay').hide();
  //   }, 1500);
  // }