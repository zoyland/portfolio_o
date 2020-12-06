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
    $(".quote1").attr("src","image/other/q1_d.png");
    $(".quote2").attr("src","image/other/q2_d.png");
  } else { 
    $(this).children().addClass('active'); 
    $(".quote1").attr("src","image/other/q1_l.png");
    $(".quote2").attr("src","image/other/q2_l.png");
  }
});

// $('.toggler').click(function(){
//   $(this).children().animate({'left':'60%'});
// });
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

var slide = $('.pf_item > li'),
  slidewrap = $('.pf_item');
var currentIdx = 0;

var slideLength = $('.pf_item > li').length,
  slideWidth = $('.pf_item > li').innerwidth,
  showNum = 3,
  num = 0;

var current2 = $('.pf_item > li')[1];
console.log(current2);


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
// 

$('.swiper-slide').each(function(){
var text = $(this).text();
console.log(text);
});

var typingBool = false; 
var typingIdx=0; 
var liIndex = 0;
var liLength = $(".typing-txt>ul>li").length;

// 타이핑될 텍스트를 가져온다 
var typingTxt = $(".typing-txt>ul>li").eq(liIndex).text(); 
typingTxt=typingTxt.split(""); // 한글자씩 자른다. 
if(typingBool==false){ // 타이핑이 진행되지 않았다면 
  typingBool=true; 
  var tyInt = setInterval(typing,100); // 반복동작 
} 
  
function typing(){ 
$(".typing ul li").removeClass("on");
$(".typing ul li").eq(liIndex).addClass("on");
if(typingIdx<typingTxt.length){ // 타이핑될 텍스트 길이만큼 반복 
  $(".typing ul li").eq(liIndex).append(typingTxt[typingIdx]); // 한글자씩 이어준다. 
  typingIdx++; 
} else{ if(liIndex<liLength-1){
  //다음문장으로  가기위해 인덱스를 1증가
  liIndex++; 
  //다음문장을 타이핑하기위한 셋팅
      typingIdx=0;
      typingBool = false; 
      typingTxt = $(".typing-txt>ul>li").eq(liIndex).text(); 
  
  //다음문장 타이핑전 1초 쉰다
      clearInterval(tyInt);
      //타이핑종료
  
      setTimeout(function(){
      //1초후에 다시 타이핑 반복 시작
      tyInt = setInterval(typing,100);
      },1000);
      } else if(liIndex==liLength-1){
      
      //마지막 문장까지 써지면 반복종료
      clearInterval(tyInt);
      }
  } 
}  
// other1 quote typing effect 