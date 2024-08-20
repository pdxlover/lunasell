

$(document).ready(function () {//시작
  

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



  //상품 모달팝업 시작

  // Modal을 가져옵니다.
  var modals = document.getElementsByClassName("modal");
  // Modal을 띄우는 클래스 이름을 가져옵니다.
  var btns = document.getElementsByClassName("product");
  // Modal을 닫는 close 클래스를 가져옵니다.
  var spanes = document.getElementsByClassName("detail_close");
  var funcs = [];


  // Modal을 띄우고 닫는 클릭 이벤트를 정의한 함수
  function Modal(num) {
    return function () {
      // 해당 클래스의 내용을 클릭하면 Modal을 띄웁니다.
      btns[num].onclick = function () {
        modals[num].style.display = "block";
        console.log(num);
        $("#gray_layer").show();

        $('html, body').css({ 'overflow': 'hidden', 'height': '100%' }); // 모달팝업 중 html,body의 scroll을 hidden시킴
        $('#element').on('scroll touchmove mousewheel', function (event) { // 터치무브와 마우스휠 스크롤 방지
          event.preventDefault();
          event.stopPropagation();

          return false;
        });

      };

      // <span> 태그(X 버튼)를 클릭하면 Modal이 닫습니다.
      spanes[num].onclick = function () {
        modals[num].style.display = "none";
        $("#gray_layer").hide();

        $('html, body').css({ 'overflow': 'auto', 'height': '100%' }); //scroll hidden 해제
        $('#element').off('scroll touchmove mousewheel'); // 터치무브 및 마우스휠 스크롤 가능

      };


    };
  }

  // 원하는 Modal 수만큼 Modal 함수를 호출해서 funcs 함수에 정의합니다.
  for (var i = 0; i < btns.length; i++) {
    funcs[i] = Modal(i);
  }

  // 원하는 Modal 수만큼 funcs 함수를 호출합니다.
  for (var j = 0; j < btns.length; j++) {
    funcs[j]();
  }



    //top btn 스크롤감지
    $(function () {
      $(".top_btn").hide();//처음에는 탑버튼 숨기기
      $(window).scroll(function () {
        if ($(this).scrollTop() > 100) { $(".top_btn").fadeIn(); }
  
        else { $(".top_btn").fadeOut(); }
      });
    });








  AOS.init();


});//끝