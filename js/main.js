//문서준비이벤트 : js를 head영역에 선언
// $(document).ready(function(){

// });
//약식
$(function () { //시작부분

  //내가 작성하는 코드
  /* //depth2에 flex를 선언했을 때
    $("depth2").hide(); */

  $(".gnb>li").hover(function () {
    $(this).find(".depth2").stop().fadeToggle();
  });

  /* banner */
  const banner_list = new Swiper(".banner_list", {
    loop: true,
    speed: 1000,

    pagination: {
      el: ".swiper-pagination",
      type: "fraction", // 버튼 종류 설정 'bullets' | 'fraction' | 'progressbar'
      clickable: true, // 버튼 클릭 여부
    },
    navigation: {
      nextEl: '.swiper-button-next', // 다음 버튼
      prevEl: '.swiper-button-prev', // 이전 버튼
    },
    autoplay: {
      delay: 3000, // 슬라이드가 머무르는 시간, 5000=5초
      disableOnInteraction: false, // 스와이프 후 자동 재생이 비활성화 되지 않음
    },
  });

  /* about */
  const about_txt_list = new Swiper(".about_txt_list", {
    effect: "fade", //페이드효과
    fadeEffect: {
      crossFade: true, //겹치지 않게 하는 추가 옵션
    },
    autoplay: {
      delay: 3000, // 슬라이드가 머무르는 시간, 5000=5초
      disableOnInteraction: false, // 스와이프 후 자동 재생이 비활성화 되지 않음
    },
    speed: 1000,
  });

  const about_img_list = new Swiper(".about_img_list", {
    pagination: {
      el: ".swiper-pagination",
      type: "bullets", // 버튼 종류 설정 'bullets' | 'fraction' | 'progressbar'
      clickable: true, // 버튼 클릭 여부
    },
  });

  about_txt_list.controller.control = about_img_list;
  about_img_list.controller.control = about_txt_list;


  const prd_list = new Swiper(".prd_list", {
    slidesPerView: 1,
    breakpoints: {
      768: {
        // 가로해상도가 768px 이상
        slidesPerView: 2,
      },
      1200: {
        // 가로해상도가 1024px 이상
        slidesPerView: 3,
      },
    },
    centeredSlides: true,  // 첫번째 슬라이드 가운데 배치
    loop: true,
    navigation: {
      nextEl: '.prd_next', // 다음 버튼
      prevEl: '.prd_prev', // 이전 버튼
    },
  });

  /* 아코디언 배너 스크립트 */
  $(".collection ul li").mouseenter(function () {
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
  });

  /* 서치영역 */
  $(".btn_search").click(function () {
    $(".search").fadeIn();
  });
  $(".search_close").click(function () {
    $(".search").fadeOut();
  });


  /* ham */
  $(".ham").click(function () {
    $(".mgnb_wrap,.dim").fadeIn();
    $(".mgnb_box").animate({
      "right": "0"
    });
  });

  $(".mgnb_close").click(function () {
    $(".mgnb_wrap,.dim").fadeOut();
    $(".mgnb_box").animate({
      "right": "-100%"
    });
  });
}); //종료

