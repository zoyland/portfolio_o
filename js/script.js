var swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    mousewheel: true,
    clickable: true,
    parallax: true,
  speed: 300,
  })

  let toggler = document.querySelector(".toggler");
  let fullscreen = document.querySelector(".fullscreen");
  
  toggler.addEventListener('click' , () => {
      fullscreen.classList.toggle("light");
  })
  // dark mode toggle
  $('.circle').click(function(){
    $(this).animate({'left':'50%'});
  });
  // dark mode toggle move to right 

  $('#other1 .area .other_wrap .info ul li p').mouseover(function(){
    $(this).siblings('img').effect("shake", { times:3 }, 100);
  });
  // #other icon shaking

  $('.base_hover').hover(function(){
    $(this).css({'display':'none'});
    $(this).parent().find('.base_hover2').css({'display':'block'});
  }, function(){
    $(this).css({'display':'block'});
    $(this).parent().find('.base_hover2').css({'display':'none'});
  });
  // h1 

// $(function(){
//     $("html, body").animate({ scrollTop: 0 }, "slow"); 
// });