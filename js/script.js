
/* 
 * Google Analytics
 */

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-48300629-1', 'mauriciomelo.com.br');
  ga('send', 'pageview');
  
$(document).ready(function(){
    
   /*
    * Social network navigation bar
    */ 
   
   $(".navbar-social > ul > li").hover(function(){
       $(this).addClass("active");      
       $(this).prev("li").addClass("active-sibling-lvl-1");
       $(this).next("li").addClass("active-sibling-lvl-1");
       $(this).prev("li").prev("li").addClass("active-sibling-lvl-2");
       $(this).next("li").next("li").addClass("active-sibling-lvl-2");
       
   }, function(){
      var c = "active active-sibling-lvl-1 active-sibling-lvl-2";
      $(".navbar-social li").removeClass(c);
   });
   
   
});



