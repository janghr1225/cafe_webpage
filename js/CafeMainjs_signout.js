
//Menu hover시 Drinks와 Food
$('#menu2').hover(() => {
    $('#menu2').html
        ('<a style="color:silver;">Menu</a><span><p><a id="dfm1" href="./menu_DRINKS_main.html">Drinks</a></p> <p> <a id="dfm" href="./menu_FOOD_main.html"><span> Food </span></a></p>');

}, () => { // 다시 메뉴로 변화
    $('#menu2').html('Menu');
});


// 로그인 후 로그아웃 클릭 시 

    $('#sign').click(function(){
        var result = confirm('로그아웃 하시겠습니까?');
        if(result) {
        //yes
        alert("로그아웃되었습니다.");
        location.replace('../html/CafeMain.html');
    } else {
    //no
    }
});
출처: https://88240.tistory.com/173 [shaking blog:티스토리]


//로고 클릭 시 맨 위로
$("#btn").click(function () {
    $('html').animate({ scrollTop: 0.01 }, 600);
});

//sign hover시 색 변화
$('#sign').hover(() => { 
    $('#sign').prop('style', 'color:silver')
}, () => {
    $('#sign').prop('style', 'color:black')
})


// 스크롤반응 이미지 FADE IN
$(document).ready(function() {
/* 1 */
$(window).scroll( function(){
    /* 2 */
    $('.right').each( function(i){
        var boo = $(this).offset().top + $(this).outerHeight();
        var bow = $(window).scrollTop() + $(window).height();
        /* 3 */
        if( bow > boo/4 ){
            $(this).animate({'opacity':'1'},4000);
        }
    }); 
});
});



// 배너 자동 넘기기
$(document).ready(function () {
        var $banner = $(".banner").find("ul");

        var $bannerWidth = $banner.children().outerWidth();//이미지의 폭
        var $bannerHeight = $banner.children().outerHeight(); // 높이
        var $length = $banner.children().length;//이미지의 갯수
        var rollingId;

        //정해진 초마다 함수 실행
        rollingId = setInterval(function () { rollingStart(); }, 6000);//다음 이미지로 롤링 애니메이션 할 시간차

        function rollingStart() {
            $banner.css("width", $bannerWidth * $length + "px");
            $banner.css("height", $bannerHeight + "px");
            //alert(bannerHeight);
            //배너의 좌측 위치를 옮겨 준다.
            $banner.animate({ left: - $bannerWidth + "px" }, 1500, function () { //숫자는 롤링 진행되는 시간이다.
                //첫번째 이미지를 마지막 끝에 복사(이동이 아니라 복사)해서 추가한다.
                $(this).append("<li>" + $(this).find("li:first").html() + "</li>");
                //뒤로 복사된 첫번재 이미지는 필요 없으니 삭제한다.
                $(this).find("li:first").remove();
                //다음 움직임을 위해서 배너 좌측의 위치값을 초기화 한다.
                $(this).css("left", 0);
                //이 과정을 반복하면서 계속 롤링하는 배너를 만들 수 있다.
            });
        }
    });