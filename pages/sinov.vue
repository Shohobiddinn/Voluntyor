<template>
  <div class="sinov">
    <div class="container">
      <div id="sinov-board">
        <Swiper
          :effect="'coverflow'"
          :grabCursor="true"
          :loop="true"
          :modules="[SwiperEffectCoverflow, SwiperNavigation, SwiperPagination]"
          :slides-per-view="1.1"
          :centeredSlides="true"
          :spaceBetween="80"
          :coverflowEffect="{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }"
          :navigation="{
            prevEl: '.navigation_prev',
            nextEl: '.navigation_next',
          }"
          :pagination="{
            el: '.pagination',
          }"
        >
          <swiper-slide>
            <img
              id="sinov-img"
              src="~/assets/images/jpg/volontyor-bg.jpg"
              alt=""
            />
          </swiper-slide>
          <swiper-slide>
            <img
              id="sinov-img"
              src="~/assets/images/jpg/volontyor-bg.jpg"
              alt=""
            />
          </swiper-slide>
          <swiper-slide>
            <img
              id="sinov-img"
              src="~/assets/images/jpg/volontyor-bg.jpg"
              alt=""
            />
          </swiper-slide>
          <swiper-slide>
            <img
              id="sinov-img"
              src="~/assets/images/jpg/volontyor-bg.jpg"
              alt=""
            />
          </swiper-slide>
          <swiper-slide>
            <img
              id="sinov-img"
              src="~/assets/images/jpg/volontyor-bg.jpg"
              alt=""
            />
          </swiper-slide>
          <swiper-slide>
            <img
              id="sinov-img"
              src="~/assets/images/jpg/volontyor-bg.jpg"
              alt=""
            />
          </swiper-slide>
          <swiper-slide>
            <img
              id="sinov-img"
              src="~/assets/images/jpg/volontyor-bg.jpg"
              alt=""
            />
          </swiper-slide>
        </Swiper>
        <div class="pagination"></div>

        <div class="navigation_prev icon">
          <svg
            style="transform: rotate(180deg)"
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="20"
            viewBox="0 0 12 20"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10.6621 8.76255C11.3455 9.44597 11.3455 10.554 10.6621 11.2374L3.23744 18.662C2.55402 19.3455 1.44598 19.3455 0.762563 18.662C0.0791456 17.9786 0.0791456 16.8706 0.762563 16.1872L6.94975 9.99999L0.762563 3.8128C0.0791457 3.12939 0.0791456 2.02135 0.762563 1.33793C1.44598 0.654514 2.55402 0.654514 3.23744 1.33793L10.6621 8.76255Z"
              fill="#8DD83D"
            />
          </svg>
        </div>
        <div class="navigation_next icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="20"
            viewBox="0 0 12 20"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10.6621 8.76255C11.3455 9.44597 11.3455 10.554 10.6621 11.2374L3.23744 18.662C2.55402 19.3455 1.44598 19.3455 0.762563 18.662C0.0791456 17.9786 0.0791456 16.8706 0.762563 16.1872L6.94975 9.99999L0.762563 3.8128C0.0791457 3.12939 0.0791456 2.02135 0.762563 1.33793C1.44598 0.654514 2.55402 0.654514 3.23744 1.33793L10.6621 8.76255Z"
              fill="#8DD83D"
            />
            
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const letters = new Set(["a", "b", "c"]);

for (const x of letters) {
  console.log(x);
}
</script>
<style>
#sinov-img {
  object-fit: cover;
  width: 100% !important;
  height: 400px;
  border-radius: 5%;
}
#sinov-board {
  width: 1200px;
  height: 800px;
  overflow: hidden;
  margin: 0 auto;
  border: 1px solid coral;
}
</style>