$(function(){
  //スナップ写真//
  $('#snap1-big').click(function(){
    $('.image-big1').fadeIn();
    $('.image-big2').fadeOut();
    $('.image-big3').fadeOut();
    $('.image-big4').fadeOut();
  });
  $('#modal').click(function(){
    $('.image-big1').fadeOut();
  });

  $('#snap2-big').click(function(){
    $('.image-big2').fadeIn();
    $('.image-big1').fadeOut();
    $('.image-big3').fadeOut();
    $('.image-big4').fadeOut();
  });
  $('#modal').click(function(){
    $('.image-big2').fadeOut();
    
  });

  $('#snap3-big').click(function(){
    $('.image-big3').fadeIn();
    $('.image-big2').fadeOut();
    $('.image-big1').fadeOut();
    $('.image-big4').fadeOut();
  });
  $('#modal').click(function(){
    $('.image-big3').fadeOut();
  });

  $('#snap4-big').click(function(){
    $('.image-big4').fadeIn();
    $('.image-big2').fadeOut();
    $('.image-big3').fadeOut();
    $('.image-big1').fadeOut();
  });
  $('#modal').click(function(){
    $('.image-big4').fadeOut();
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

 $('.topPage').click(function(){
   $('html,body').scrollTop(0);
 });

 $('.scroll-btn').click(function(){
   var id =$(this).attr(href);
   var position = $(id).offset().top;

   $('html,body').scrollTop(position);
 });
});
