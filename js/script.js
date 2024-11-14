document.addEventListener("DOMContentLoaded", function () {
  // 섹션 고정 및 스냅 설정
  const sections = gsap.utils.toArray(".item");

  sections.forEach((section) => {
    ScrollTrigger.create({
      trigger: section,
      pin: true,
      pinSpacing: false,
      start: () =>
        section.offsetHeight < window.innerHeight ? "top top" : "bottom bottom",
    });
  });

  ScrollTrigger.create({
    snap: 1 / (sections.length - 1),
    duration: 0.5,
  });

  // Swiper 초기화
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".btn-next", // 다음 버튼
      prevEl: ".btn-prev", // 이전 버튼
    },
  });

  // 2번 섹션에 마우스 호버 시 슬라이드 정지
  const swiperContainer = document.querySelector(".mySwiper");

  swiperContainer.addEventListener("mouseover", () => {
    swiper.autoplay.stop(); // 슬라이드 정지
  });

  swiperContainer.addEventListener("mouseout", () => {
    swiper.autoplay.start(); // 슬라이드 재개
  });
});
