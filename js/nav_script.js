$(function () {
  let white_bg = $("#header");
  let nav_menu = $(".menu_item");
  let sub_menu = $(".sub_menu");
  let nav_txt = $("#nav .menu_item a");
  let shadow = $(".font_shadow");
  let btn_menu = $(".btn_menu");
  let lang_txt = $(".lang a");
  let btn_lang = $(".btn_lang");
  let btn_lang_b = $(".btn_lang_b");
  let search_btn = $(".util_pc ul li.search_btn");
  let close_btn = $("span.close_btn");
  let search_txt = $(".search-txt");
  let search_box = $(".search-box");

  const loading = $(".loading");

  $(window).on("load", () => {
    loading.remove();
  });


  let mo_menu =$('.mo_menu');
  let main_mo_menu =$('.main_mo_menu');
  let dorpdown_btn = $('.btn_dropdown')

  /*-----------------------------------------------------------
                         모바일 메뉴 
   -------------------------------------------------------------*/
   dorpdown_btn.click(function(){
    let width = $(window).innerWidth();

       if (width <= 1020) {
      mo_menu.toggleClass('menu-open');
      main_mo_menu.toggleClass('menu-open');

      // 메뉴의 현재 display 상태를 확인
      let menuOpen = mo_menu.hasClass('menu-open');

      if (menuOpen) {
        $(".wrapper").css("overflow-y", "hidden");
        lang_txt.css("color", "black");
        shadow.css("text-shadow", "none");
        btn_lang.stop().removeClass("btn_lang");
        btn_lang_b.stop().addClass("btn_lang_b");
        dorpdown_btn.css("background-image", "url('/img/icon/btn_menu_close.svg')");
        dorpdown_btn.css("background-size", "20px");
        dorpdown_btn.css("top", "9px");
        $(".mo_lang > .btn_lang").css("color", "black");
        $(".mo_lang a").css("color", "black");
        $(".dropLang2").css("top", "15px");
        
      } else {
        $(".wrapper").css("overflow-y", "auto");
        lang_txt.css("color", "white");
        shadow.css("text-shadow", "0px 0px 3px rgb(44, 44, 44)");
        btn_lang_b.stop().removeClass("btn_lang_b");
        btn_lang.stop().addClass("btn_lang");
        dorpdown_btn.css("background-image", "url('/img/icon/btn_menu_w.svg')");
        dorpdown_btn.css("background-size", "75%");
        $(".mo_lang > .btn_lang").css("color", "white");
        dorpdown_btn.css("top", "3px");
        dorpdown_btn.css("left", "52px");
        $(".dropLang2").css("top", "5px");
        
      }
    }else if(width > 1020){
      mo_menu.css("display","none")         // 모바일 메뉴 숨기기
     
    }
  
  });
 
  dorpdown_btn.click(function(){
    $('.sub_ul').css("display","none")
    main_mo_menu.css("display","block");
    $('.logo').css("display","block");
    $('.back').css("display","none");
  })
  //메뉴 누르면 로고 변경
  main_mo_menu.click(function(){
    $('.logo').css("display","none");
    $('.back').css("display","block");
    $('.back').click(function(){
      $('.logo').css("display","block");
      $('.back').css("display","none");
      $('.sub_ul').css("display","none")
      main_mo_menu.css("display","block");
    })
  })
     

  /*메뉴이동*/ 
    $(".introduction1").click(function(){
      main_mo_menu.css("display","none");
      $(".introduction2").css("display","block");
    })
    $(".ESG1").click(function(){
      main_mo_menu.css("display","none");
      $(".ESG2").css("display","block");
    })
    $(".story1").click(function(){
      main_mo_menu.css("display","none");
      $(".story2").css("display","block");
    })
    $(".brand1").click(function(){
      main_mo_menu.css("display","none");
      $(".brand2").css("display","block");
    })
    $(".promotion1").click(function(){
      main_mo_menu.css("display","none");
      $(".promotion2").css("display","block");
    })
    $(".service1").click(function(){
      main_mo_menu.css("display","none");
      $(".service2").css("display","block");
    })
  
    /*kr 누르면 내려오는 구문*/
    $(".mo_lang>.btn_lang").off("click").on("click", function () {
      $(".dropLang2").slideToggle();
      $(".mo_lang .lang ul a").css("color", "black");
    });
 // hover 이벤트로 밑줄 표시
 $(".mo_lang .dropLang2 ul li").hover(
 
  function () {
    $(this).css("text-decoration", "underline");
  },
  function () {
    $(this).css("text-decoration", "none");
  }
);


  /*-----------------------------------------------------------
             section#main 첫번째 컨텐츠
-------------------------------------------------------------*/
  white_bg.stop().removeClass("show-before");
  $(".dropLang").hide();

  /*메뉴 호버 시 변경*/
  nav_menu.hover(
    function () {
      white_bg.stop().addClass("show-before");
      btn_menu.stop().addClass("btn_menu_b");
      btn_lang.stop().removeClass("btn_lang");
      btn_lang_b.stop().addClass("btn_lang_b");
      sub_menu.show();
      lang_txt.css("color", "black");
      nav_txt.css("color", "black");
      shadow.css("text-shadow", "none");
      $(this).find("a").css("color", "#dc2f34");
    },
    function () {
      white_bg.stop().removeClass("show-before");
      btn_menu.stop().removeClass("btn_menu_b");
      btn_lang_b.stop().removeClass("btn_lang_b");
      btn_lang.stop().addClass("btn_lang");
      sub_menu.hide();
      shadow.css("text-shadow", "0px 0px 3px rgb(44, 44, 44)");
      nav_txt.css("color", "white");
      lang_txt.css("color", "white");
      $(".lang ul a").css("color", "black");
    }
  );
  /*서브 메뉴 호버 시 변경*/
  sub_menu.find("a").hover(
    function () {
      $(this).css({
        "text-decoration": "underline",
        "font-weight": "bold",
      });
    },
    function () {
      $(this).css({ "text-decoration": "none", "font-weight": "0" });
    }
  );
  btn_lang.click(function () {
    $(".dropLang").slideToggle();
    $(".lang ul a").css("color", "black");
  });
  $(".lang ul li").hover(
    function () {
      $(this).css("text-decoration", "underline");
    },
    function () {
      $(this).css("text-decoration", "none");
    }
  );

  search_btn.click(function () {
    $(".modal").css("display", "flex");
  });
  close_btn.click(function () {
    $(".modal").hide();
  });
});