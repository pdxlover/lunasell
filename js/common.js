$(document).ready(function(){//시작

//모바일 메뉴 열고 닫기
$(".ham").click(function () {
    $(".dim").fadeIn();
    $(".mgnb_wrap").animate({
      right: "0"
    });
  });

  $(".mgnb_close").click(function () {
    $(".dim").fadeOut();
    $(".mgnb_wrap").animate({
      right: "-100%"
    });
  });//모바일 메뉴 열고 닫기 끝


  //top btn 스크롤감지
  $(function(){
    $(".top_btn").hide();//처음에는 탑버튼 숨기기
    $(window).scroll(function(){
        if($(this).scrollTop() > 100){$(".top_btn").fadeIn();}

        else{$(".top_btn").fadeOut();}
    });
  });









  AOS.init();


});//끝