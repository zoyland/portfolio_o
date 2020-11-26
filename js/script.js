window.onload = function () {
    var elm = ".box";
    $(elm).each(function (index) {
        // 개별적으로 Wheel 이벤트 적용
        $(this).on("mousewheel DOMMouseScroll", function (e) {
            e.preventDefault();
            var delta = 0;
            if (!event) event = window.event;
            if (event.wheelDelta) {
                delta = event.wheelDelta / 120;
                if (window.opera) delta = -delta;
            } 
            else if (event.detail)
                delta = -event.detail / 3;
            var moveTop = $(window).scrollLeft();
            var elmSelecter = $(elm).eq(index);
            // 마우스휠을 위에서 아래로
            if (delta < 0) {
                if ($(elmSelecter).next() != undefined) {
                    try{
                        moveTop = $(elmSelecter).next().offset().left;
                    }catch(e){}
                }
            // 마우스휠을 아래에서 위로
            } else {
                if ($(elmSelecter).prev() != undefined) {
                    try{
                        moveTop = $(elmSelecter).prev().offset().left;
                    }catch(e){}
                }
            }
             
           
            $("html, body").stop().animate({
                scrollLeft: moveTop + 'px'
            }, {
                duration: 700, complete: function () {
                }
            });
        });
    });
}

// $(function(){
//        $("html, body").animate({ scrollLeft: 0 }, "slow"); 
//   });
// 스크롤 시 초기 화면으로 이동. 코드 다 하고 꺼야 됨 반드시!!