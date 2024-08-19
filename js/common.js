

$(document).ready(function () {//시작

  //루나셀 정품 레이어팝업 동작
  // 쿠키 생성
function setCookie( name, value, expiredays ) {  // 쿠키저장
	var todayDate = new Date();  //date객체 생성 후 변수에 저장
	todayDate.setDate( todayDate.getDate() + expiredays ); 
   	 // 시간지정(현재시간 + 지정시간)
	document.cookie = name + "=" + value + "; path=/; expires=" + todayDate.toUTCString() + ";"
	//위 정보를 쿠키에 굽는다
} 

//하루동안 팝업창 닫기
$(function(){
	$(".popup_box").draggable({containment:'parent', scroll:false}); // 레이어 팝업 창 드래그 가능
	//{containment:'parent', scroll:false} 화면 영역 밖으로 드래그 안됌.
                
	if(document.cookie.indexOf("popToday=close") < 0 ){      // 쿠키 저장여부 체크
		document.getElementById("popup_layer").style.display = "block";
		}else {
		document.getElementById("popup_layer").style.display = "none"; 
		}
	});
             
//오늘하루만보기 닫기버튼 스크립트
function closeToday() { 
	setCookie( "popToday", "close" , 1  ); 
	$("#popup_layer").css("display", "none");
	document.getElementById("popup_layer").style.display = "none";
}
//그냥 닫기버튼 스크립트
function closePop() { 
	document.getElementById("popup_layer").style.display = "none";
}

  

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