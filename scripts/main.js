// 実績モーダルをオープン
$(".p-works__container__item").on('click',function() {
    $(this).addClass("active");    
    return false;
});

// 実績モーダルを閉じる
$(".p-works__container__item__modal__overlay").on('click',function() {
    $(".p-works__container__item").removeClass("active");    
    return false;
});

// 実績モーダルを閉じる
$(".p-works__container__item__modal__container__btn--close").on('click',function() {
    $(".p-works__container__item").removeClass("active");    
    return false;
});

// 強みのダイアログ表示切替
$(".p-about__advantage__list__item").on('click',function() {
    if($(this).hasClass("active")) {
        $(this).removeClass("active");
    } else {
        $(this).addClass("active");
    }
});

// モバイルメニュー表示
$(".l-header-mobile__btn").on('click',function() {
    $(".c-nav-mobile").addClass("active");
});

// モバイルメニュー閉じる
$(".c-nav-mobile").on('click',function() {
    $(this).removeClass("active");
});


const swiper = new Swiper('.swiper-container', {
    loop: true,
    grabCursor: true,
    slidesPerView: 1,
    spaceBetween: 20,
    speed: 1000,
    centeredSlides: true,

    breakpoints: {
        480: {
            
            slidesPerView: 1.5,
        },
        600: {
            slidesPerView: 2.5,
        },
        960: {
            slidesPerView: 3.5,
        },
    },
    
    pagination: {
      el: '.swiper-pagination',
    },
    
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    scrollbar: {
      el: '.swiper-scrollbar',
    },

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
  });