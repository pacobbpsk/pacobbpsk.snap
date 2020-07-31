$(function(){
  //スナップ写真//
  $('.snap1').click(function(){
    $('#image-modal').fadeIn();
  });
  $('#snap1-big').click(function(){
    $('.image-big1').fadeIn();
    $('.image-big2').fadeOut();
    $('.image-big3').fadeOut();
    $('.image-big4').fadeOut();
  });
  $('#modal').click(function(){
    $('#image-modal').fadeOut();
  });

  $('#snap2-big').click(function(){
    $('.image-big2').fadeIn();
    $('.image-big1').fadeOut();
    $('.image-big3').fadeOut();
    $('.image-big4').fadeOut();
  });
  

  $('#snap3-big').click(function(){
    $('.image-big3').fadeIn();
    $('.image-big2').fadeOut();
    $('.image-big1').fadeOut();
    $('.image-big4').fadeOut();
  });
  

  $('#snap4-big').click(function(){
    $('.image-big4').fadeIn();
    $('.image-big2').fadeOut();
    $('.image-big3').fadeOut();
    $('.image-big1').fadeOut();
  });
 //特集//
 $('.select-btn').click(function(){
   $('.active').removeClass('active')
   var selectIndex = $('.select-btn').index($(this));

   $('.sneaker1').eq(selectIndex).addClass('active');
 });

  //メニューバー//
 $('#menu-icon').click(function(){
   $('#grav').fadeIn();
  });
 $('.close-btn').click(function(){
   $('#grav').fadeOut();
 });
 $('#main').click(function(){
   $('#grav').fadeOut();
 }); 
   
 $('.list').click(function(){
   $('.grav').fadeOut();
 });

 $('.header').click(function(){
   $('html,body').scrollTop(0);
 });

 

});
