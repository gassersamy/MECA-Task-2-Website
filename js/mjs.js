$(document).ready(function()
{
    $(".nb").hover(function(){
        
        $(this).animate({
            padding: '20px 0',
            width: '100% !important '
            },500);
        });
    
    
   $(window).scroll(function(){
   if ($(window).scrollTop() >= 500)
   {
    $(".pg").fadeIn(1000);
   }
   
    if ($(window).scrollTop() >= 800)
   {
    $(".pg1").fadeIn(1000);
   }
   
   });
   
   $(".btt").click(function(){
    $('body,html').animate({scrollTop: 0}, 1000);
    });
   
});