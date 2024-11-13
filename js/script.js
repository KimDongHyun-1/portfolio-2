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
      delay: 2500,
      disableOnInteraction: false,
    },
    loop: true,
    // loopAdditionalSlides: 1,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".btn-next", // 다음 버튼
      prevEl: ".btn-prev", // 이전 버튼
    },
  });
});
