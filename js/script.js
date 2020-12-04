var swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    mousewheel: true,
    clickable: true,
    parallax: true,
  speed: 300,
  })
  // horizontal scrolling 


  $('.left .tab').mouseover(function(){
    $(this).prev('p').stop().animate({'left':'-19%'});
  });
  $('.left .tab').mouseleave(function(){
    $(this).prev('p').stop().animate({'left':'-30%'});
  });
  // left tab hover 
  

  let toggler = document.querySelector(".toggler");
  let fullscreen = document.querySelector(".fullscreen");
  
  toggler.addEventListener('click' , () => {
      fullscreen.classList.toggle("light");
  })
  // dark mode toggle

  $('.toggler').click(function(){
    $(this).children().animate({'left':'60%'});
  });
  // dark mode toggle move to right 

  // #other1 profile emoji shaking 


  $('.base_hover').hover(function(){
    $(this).css({'display':'none'});
    $(this).parent().find('.base_hover2').css({'display':'block'});
  }, function(){
    $(this).css({'display':'block'});
    $(this).parent().find('.base_hover2').css({'display':'none'});
  });
  // h1 hover

  // var $pfarea = $('.pfarea').find('ul');
  //   $('.goingleft').click(function(){
  //       $pfarea.css("width" , "200%");
  //       $pfarea.css("height" , "80%");

  //       $pfarea.animate({"left": "-33%"}, 1000, function(){
  //           $(this).append("<li>" + $(this).find("li:first").html() + "</li>");
  //           $(this).find("li:first").remove();
  //           $(this).css("left", "0%");
  //           $(this).find("li").removeClass('on');
  //           $(this).find('li').eq(1).addClass('on');
  //       });
  //   });
  //   $('.goingright').click(function(){
  //       $pfarea.css("width" , "200%");
  //       $pfarea.css("height" , "80%");

  //       $pfarea.animate({"left": "33%"}, 1000, function(){
  //         $(this).prepend("<li>" + $(this).find("li:last").html() + "</li>");
  //         $(this).css("left", "0%");
  //         // console.log("<li>" + $(this).find("li:last").html()+ "</li>");
  //         $(this).find("li:last").remove();
  //           $(this).find("li").removeClass('on');
  //           $(this).find('li').eq(1).addClass('on');
  //       });
  //   });
    // slide 


    $('.c_pa').circleProgress({
      value: 0.85,
      size: 150,
      startAngle: -Math.PI /  4 * 2, 
      emptyFill: "rgba(63, 156, 214, .5)",
      fill: {
        color: ["#3f9cd6"]
      } 
    });
    $('.c_h').circleProgress({
      value: 0.85,
      size: 150,
      startAngle: -Math.PI /  4 * 2, 
      emptyFill: "rgba(63, 156, 214, .5)",
      fill: {
        color: ["#3f9cd6"]
      } 
    });
    $('.c_c').circleProgress({
      value: 0.8,
      size: 150,
      startAngle: -Math.PI /  4 * 2, 
      emptyFill: "rgba(63, 156, 214, .5)",
      fill: {
        color: ["#3f9cd6"]
      } 
    });
    $('.c_js').circleProgress({
      value: 0.55,
      size: 150,
      startAngle: -Math.PI /  4 * 2, 
      emptyFill: "rgba(63, 156, 214, .5)",
      fill: {
        color: ["#3f9cd6"]
      } 
    });
    $('.c_jq').circleProgress({
      value: 0.7,
      size: 150,
      startAngle: -Math.PI /  4 * 2, 
      emptyFill: "rgba(63, 156, 214, .5)",
      fill: {
        color: ["#3f9cd6"]
      } 
    });
    $('.c_b').circleProgress({
      value: 0.75,
      size: 150,
      startAngle: -Math.PI /  4 * 2, 
      emptyFill: "rgba(63, 156, 214, .5)",
      fill: {
        color: ["#3f9cd6"]
      } 
    });
    // other2 - circle progress bar
  
    $('.direct_wrapper > div > div').click(function(){
      $(this).siblings('.dr').css('opacity','1');
    });
// $(function(){
//     $("html, body").animate({ scrollTop: 0 }, "slow"); 
// });




// var currentIndex = 0;



// $('.goingleft').click(function(){
//   if (currentIdx !== (slideLength - 1)) {
//     $('.pf_item').animate(
//       {'left':'-35%'}
//     )
//     currentIdx += 1;
//   } else {
//     currentIdx = 0;
//   }
// }); 
// $('.goingright').click(function(){
//   if ((slideLength - 1) !== currentIdx) {
//     $('.pf_item').animate(
//       {'right':'-35%'}
//     )
//     currentIdx -= 1;
//   } else {
//     currentIdx = (slideLength - 1);
//   }
// });
//.............................

var slide = $('.pf_item > li'),
    slidewrap = $('.pf_item');
var currentIdx = 0;

var slideLength = $('.pf_item > li').length,
    slideWidth = $('.pf_item > li').innerwidth,
    showNum = 3,
    num = 0;

var current2 = $('.pf_item > li')[1];
console.log(current2);

console.log(slideWidth);
console.log(slide);
console.log(slideLength);

$('.goingleft').click(function(){
    goingleft();
    slide.removeClass('on');
    $('.pf_item > li').eq(2).addClass('on');
});
$('.goingright').click(function(){
  goingright();
  slide.removeClass('on');
  $('.pf_item > li').eq(1).addClass('on');

});
//.............................
// function goingleft() {
//   if(num == 0) {
//     num = slideLength;
//     slidewrap.css("left", -35 * slideWidth + "%");
//   }
//   num--;
//   slidewrap.stop().animate({left: -slideWidth * num + "%"});
// }


/*
function goingleft() {
  var nextIdx = currentIdx + 1;
  $('.pf_item').stop().animate(
    {
      'left' : '-33' * nextIdx + '%'
  });
  console.log('-33' * nextIdx + '%');
    //  "-" + ' (currentIdx + 1) * 33' + "%"; 
  if (currentIdx !== (slideLength - 1)) {
    currentIdx += 1;
  } else {
    currentIdx = 0;
  }
  console.log(currentIdx);
}

function goingright()  {
  if ((slideLength - 1) !== currentIdx) {
    $('.pf_item').animate(
      {'right':'-34%'}
    )
    currentIdx -= 1;
    
  } else {
    currentIdx = (slideLength - 1);
  }
}
*/
//.............................

function goingleft() {
  var firstIdx = $('.pf_item li').first();
  $('.pf_item').animate({
    'left':'-33%'
  },1000,function(){
    $('.pf_item').append(firstIdx).css('left','0%');
  });
}
function goingright() {
  var lastIdx = $('.pf_item li').last();
  $('.pf_item').prepend(lastIdx).css('left','-33%');
  $('.pf_item').animate({
    'left':'0%'
  },1000);
}


$('.swiper-slide').each(function(){
  var text = $(this).text();
  console.log(text);
});