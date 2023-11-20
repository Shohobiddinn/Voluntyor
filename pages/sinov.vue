<template>
    <div class="cardboard">
        <swiper :slides-per-view="1.3"
        :loop="true"
        :modules="[SwiperEffectCards]"
        :centered-slides="true"
        :space-between="20"
        :parallax="true"
        :slide-to-clicked-slide="true"

        >
            <SwiperSlide>
                <div class="mashq border">card 1</div>
            </SwiperSlide>
            <SwiperSlide>
                <div class="mashq border">card 2</div>
            </SwiperSlide>
            <SwiperSlide>
                <div class="mashq border">card 3</div>
            </SwiperSlide>
            <SwiperSlide>
                <div class="mashq border">card 4</div>
            </SwiperSlide>
            <SwiperSlide>
                <div class="mashq border">card 5</div>
            </SwiperSlide>
        </swiper>
    </div>
</template>
<script setup>

</script>
<style>
.mashq{
    background: #000;
    height:600px;
}
.swiper-slide-active {
    background-color: red !important;
    transform:scale(1.6)
}
.swiper-slide{
    transform: scale(1);
}

</style>