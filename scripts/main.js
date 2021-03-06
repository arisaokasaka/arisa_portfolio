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

// スクロールに合わせてサイドバー表示
$(function() {   
    let side = $('.l-side');
	if (window.matchMedia('(min-width: 960px)').matches) {
        $(side).hide();
        $(window).on('scroll', function () {
            if ($(this).scrollTop() > 100) {
                side.slideDown();
            } else {
                side.hide();
            }
        });
    }else{
        $(side).hide();
    }
})

// スクロールに合わせてヘッダー背景を表示
$(function() {
    let header = $('.l-header');
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 100) {
            header.addClass("background_on");
        } else {
            header.removeClass("background_on");
        }
    });
})

// スクロールに合わせてヘッダー背景を表示（モバイル）
$(function() {
    let header = $('.l-header-mobile');
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 100) {
            header.addClass("background_on");
        } else {
            header.removeClass("background_on");
        }
    });
})

// リンク先を開く
$(".u-link").on('click', function() {
    window.open($(this).attr('href'), '_blank'); 
    return false;
});

// スキル部分のswiper
const swiper = new Swiper('.swiper-container', {
    loop: true,
    grabCursor: true,
    direction: 'vertical',
    slidesPerView: 2.5,
    spaceBetween: 20,
    speed: 1000,

    breakpoints: {
        480: {
            slidesPerView: 1.5,
            direction: 'horizontal',
            centeredSlides: true,
        },
        600: {
            slidesPerView: 2.5,
            direction: 'horizontal',
            centeredSlides: true,
        },
        960: {
            slidesPerView: 3.5,
            direction: 'horizontal',
            centeredSlides: true,
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