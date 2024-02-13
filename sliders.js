const homePageIntroductionSlider = new Swiper("[data-home-page-introduction-slider]", {
  slidesPerView: 1,
  autoHeight: true,
  speed: 700,
  autoplay: {
    delay: 4000,
  },
  pagination: {
    clickable: true,
    el: '[data-home-page-introduction-slider] .swiper-pagination',
  },
  navigation: {
    nextEl: '[data-home-page-introduction-slider] ~ .swiper-button-next',
    prevEl: '[data-home-page-introduction-slider] ~ .swiper-button-prev',
  },
})









const homePageReviewsSlider = new Swiper("[data-home-page-reviews-slider]", {
  autoHeight: true,
  spaceBetween: 30,
  pagination: {
    clickable: true,
    el: '[data-home-page-reviews-slider] .swiper-pagination',
  },
  navigation: {
    nextEl: '[data-home-page-reviews-slider] ~ .swiper-button-next',
    prevEl: '[data-home-page-reviews-slider] ~ .swiper-button-prev',
  },
  breakpoints: {
    1320: {
      slidesPerView: 4,
    },
    1000: {
      slidesPerView: 3
    },
    650: {
      slidesPerView: 2
    },
    320: {
      slidesPerView: 1
    },

  }
})

const homePageNewsSlider = new Swiper("[data-home-page-news-slider]", {
  spaceBetween: 30,
  autoHeight: true,
  pagination: {
    clickable: true,
    el: '[data-home-page-news-slider] .swiper-pagination',
  },
  navigation: {
    nextEl: '[data-home-page-news-slider] ~ .swiper-button-next',
    prevEl: '[data-home-page-news-slider] ~ .swiper-button-prev',
  },
  breakpoints: {
    1320: {
      slidesPerView: 4,
    },
    900: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    550: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 15,
    },

  }
})

const fullScreenSlider = new Swiper("[data-full-screen-slider] .swiper", {
  loop: true,
  centeredSlides: true,
  slideToClickedSlide: true,
  spaceBetween: 50,
  navigation: {
    nextEl: '[data-full-screen-slider] .swiper-button-next',
    prevEl: '[data-full-screen-slider] .swiper-button-prev',
  },
  breakpoints: {
    1600: {
      slidesPerView: 3,
    },
    1000: {
      slidesPerView: 2.3,
      spaceBetween: 50,
    },
    500: {
      slidesPerView: 1.5,
      spaceBetween: 25
    },
    320: {
      slidesPerView: 1.2,
      spaceBetween: 15
    }
  }
})

const formQuestsSlider = new Swiper("[data-form-quests-slider]", {
  slidesPerView: "auto",
  navigation: {
    nextEl: '.form-quests__slider-wrapper .swiper-button-next',
    prevEl: '.form-quests__slider-wrapper .swiper-button-prev',
  },
  breakpoints: {
    768: {
      slidesPerView: "auto",
    },
    576: {
      slidesPerView: 7,
      spaceBetween: 15
    },
    430: {
      slidesPerView: 6,
      spaceBetween: 15
    },
    320: {
      slidesPerView: 5,
      spaceBetween: 15
    },
    
  }
})

const questsInfoHeaderContainer = new Swiper("[data-quests-info-header-container]", {
  slidesPerView: "auto",
  grabCursor: true,
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },
})