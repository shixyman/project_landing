/*$(document).ready(fucntion)(){

  $('.fa-bars').click(function(){
    $(this).toggleClass('fa-times');
    $('.navbar').toggleClass('nav-toggle');
  });

  $(window).on('load scroll', function () {
    $('.fa-bars').removeClass('fa-times');
    $('.navbar').removeClass('nav-toggle');

    if($(window).scrollTop() > 30){
      $('.header').css({'background':'#72d6fd','box-shadow':'0 0.2rem 0.5rem rgba(0,0,0,0.4)'});
    }
    else
    {      $('.header').css({'background':'none','box-shadow':'none'});   }
  });
  $('accordion-header').click(function(){
    $('.accordion accordion-body').slideUp();
    $(this).next('accordion-body').slideDown();
    $('.accordion .accordion-header span').text('+');
    $('this').children('span').text('-');
  })
}
*/
$(document).ready(function() {
  function toggleNav() {
    $('.fa-bars').toggleClass('fa-times');
    $('.navbar').toggleClass('nav-toggle');
  }

  $('.fa-bars').click(function() {
    toggleNav();
  });

  $(window).on('load scroll', function() {
    $('.fa-bars').removeClass('fa-times');
    $('.navbar').removeClass('nav-toggle');

    if ($(window).scrollTop() > 30) {
      $('.header').css({'background':'#72d6fd','box-shadow':'0 0.2rem 0.5rem rgba(0,0,0,0.4)'});
    } else {
      $('.header').css({'background':'none','box-shadow':'none'});
    }
  });

  $(window).resize(function() {
    var windowWidth = $(window).width();
    if (windowWidth > 768) {
      $('.fa-bars').removeClass('fa-times');
      $('.navbar').removeClass('nav-toggle');
    }
  });

  $('.accordion-header').click(function(){
    $('.accordion-body').slideUp();
    $(this).next('.accordion-body').slideDown();
    $('.accordion-header span').text('+');
    $(this).children('span').text('-');
  });
});