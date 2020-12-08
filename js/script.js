var swiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  mousewheel: true,
  clickable: true,
  parallax: true,
speed: 300,
})
// horizontal scrolling 


// $('.left .tab').mouseover(function(){
//   $(this).prev('p').stop().animate({'left':'-19%'});
// });
// $('.left .tab').mouseleave(function(){
//   $(this).prev('p').stop().animate({'left':'-30%'});
// });
// left tab hover 


let toggler = document.querySelector(".toggler");
let fullscreen = document.querySelector(".fullscreen");

toggler.addEventListener('click' , () => {
    fullscreen.classList.toggle("light");
})
// dark mode toggle

$('.toggler, .toggler .circle').click(function(){
  if($(this).children().hasClass('active')) {
    $(this).children().removeClass('active'); 
    $(".quote1").attr("src","image/other/q1_d.png"),
    $(".quote2").attr("src","image/other/q2_d.png"),
    $(".h").attr("src","image/other2/h.png");
    $(".c").attr("src","image/other2/c.png");
    $(".js").attr("src","image/other2/js.png");
    $(".jquery").attr("src","image/other2/jq.png");
  } else { 
    $(this).children().addClass('active'); 
    $(".quote1").attr("src","image/other/q1_l.png"),
    $(".quote2").attr("src","image/other/q2_l.png"),
    $(".h").attr("src","image/other2/h_l.png");
    $(".c").attr("src","image/other2/c_l.png");
    $(".js").attr("src","image/other2/js_l.png");
    $(".jquery").attr("src","image/other2/jq_l.png");
  }
});
// dark mode toggle move to right 

$('.left .left_wrap .left_txt ul').mouseover(function(){
    $('.left .left_wrap .left_txt p').stop().animate({'left':'2%'});
});
$('.left .left_wrap .left_txt ul').mouseleave(function(){
    $('.left .left_wrap .left_txt p').stop().animate({'left':'-25%'});
});
// left menu hover 


$('.base_wrap').hover(function(){
  $(this).find('.base_hover').css({'display':'none'});
  $(this).find('.base_hover2').css({'display':'block'});
}, function(){
  $(this).find('.base_hover').css({'display':'block'});
  $(this).find('.base_hover2').css({'display':'none'});
});

// h1 hover

    $('.c_pa').circleProgress({
      value: 0.85,
      size: 140,
      startAngle: -Math.PI /  4 * 2, 
      emptyFill: "rgba(102, 102, 102, .5)",
      fill: {
        color: ["#666"]
      } 
    });
    $('.c_h').circleProgress({
      value: 0.85,
      size: 140,
      startAngle: -Math.PI /  4 * 2, 
      emptyFill: "rgba(102, 102, 102, .5)",
      fill: {
        color: ["#666"]
      } 
    });
    $('.c_c').circleProgress({
      value: 0.8,
      size: 140,
      startAngle: -Math.PI /  4 * 2, 
      emptyFill: "rgba(102, 102, 102, .5)",
      fill: {
        color: ["#666"]
      } 
    });
    $('.c_js').circleProgress({
      value: 0.55,
      size: 140,
      startAngle: -Math.PI /  4 * 2, 
      emptyFill: "rgba(102, 102, 102, .5)",
      fill: {
        color: ["#666"]
      } 
    });
    $('.c_jq').circleProgress({
      value: 0.7,
      size: 140,
      startAngle: -Math.PI /  4 * 2, 
      emptyFill: "rgba(102, 102, 102, .5)",
      fill: {
        color: ["#666"]
      } 
    });
    $('.c_b').circleProgress({
      value: 0.75,
      size: 140,
      startAngle: -Math.PI /  4 * 2,
      emptyFill: "rgba(102, 102, 102, .5)",
      fill: {
        color: ["#666"]
      }  
      // emptyFill: "rgba(63, 156, 214, .5)",
      // fill: {
      //   color: ["#3f9cd6"]
      // } 
    });

  // other2 - circle progress bar

  $('.direct_wrapper > div > div').click(function(){
    $(this).siblings('.dr').css('opacity','1');
  });

var slide = $('.pf_item > li'),
  slidewrap = $('.pf_item');
var currentIdx = 0;

var slideLength = $('.pf_item > li').length,
  slideWidth = $('.pf_item > li').innerwidth,
  showNum = 3,
  num = 0;

var current2 = $('.pf_item > li')[1];


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

function goingleft() {
var firstIdx = $('.pf_item > li').first();
$('.pf_item').animate({
  'left':'-33%'
},1000,function(){
  $('.pf_item').append(firstIdx).css('left','0%');
});
}
function goingright() {
var lastIdx = $('.pf_item > li').last();
$('.pf_item').prepend(lastIdx).css('left','-33%');
$('.pf_item').animate({
  'left':'0%'
},1000);
}

// 

// $('.swiper-slide').each(function(){
// var text = $(this).text();
// console.log(text);
// });


var typingBool = false; 
var typingIdx=0; 
var liIndex = 0;
var liLength = $(".typing-txt>ul>li").length;

var typingTxt = $(".typing-txt>ul>li").eq(liIndex).text(); 
typingTxt=typingTxt.split(""); 
if(typingBool==false){ 
  typingBool=true; 
  var tyInt = setInterval(typing,100);
} 
  
function typing(){ 
$(".typing ul li").removeClass("on");
$(".typing ul li").eq(liIndex).addClass("on");
if(typingIdx<typingTxt.length){
  $(".typing ul li").eq(liIndex).append(typingTxt[typingIdx]); 
  typingIdx++; 
} else{ if(liIndex<liLength-1){
  liIndex++; 
      typingIdx=0;
      typingBool = false; 
      typingTxt = $(".typing-txt>ul>li").eq(liIndex).text(); 
  
      clearInterval(tyInt);
  
      setTimeout(function(){
      tyInt = setInterval(typing,100);
      },1000);
      } else if(liIndex==liLength-1){
      
      clearInterval(tyInt);
      }
  } 
}  
// other1 quote typing effect 