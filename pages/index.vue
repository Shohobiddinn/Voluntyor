<template>
    <div class="layout-wrapper">
        <headerBase />

        <!-- cards  -->
            <div class="cards container mx-auto">
                <div class="card flex items-center justify-between">
                    <div class="card-item">
                        <h2 class="card-item-title text-2xl font-semibold mb-8">Kuzatuvchular</h2>
                        <img src="../assets/images/png/vision.png" alt="vision" class="card-item-img mb-10" width="100" height="100">
                        <p class="card-item-text">2,345</p>
                    </div>
                    <div class="card-item">
                        <h2 class="card-item-title text-2xl font-semibold mb-8">Volunterlar</h2>
                        <img src="../assets/images/png/Ixtiyoriylik.png" alt="ixtiyoriylik" class="card-item-img mb-10"  width="100" height="100">
                        <p class="card-item-text">2,345</p>
                    </div>
                    <div class="card-item">
                        <h2 class="card-item-title text-2xl font-semibold mb-8">Investor</h2>
                        <img src="../assets/images/png/partners.png" alt="partners" class="card-item-img mb-10"  width="100" height="100">
                        <p class="card-item-text">2,345</p>
                    </div>
                    <div class="card-item">
                        <h2 class="card-item-title text-2xl font-semibold mb-8">Tadbirlar</h2>
                        <img src="../assets/images/png/Projects.png" alt="projects" class="card-item-img mb-10"  width="100" height="100">
                        <p class="card-item-text">2,345</p>
                    </div>
                </div>
            </div>
        <!-- cards end -->

        <!-- volontyor -->
        <div class="volontyor container mx-auto flex  gap-x-8">
            <img src="~/assets/images/jpg/volontyor-bg.jpg" alt="bg" class="volontyor-img" width="568" height="230">
            <div class="volontyor-wrapper">
                <h2 class="mb-4">Volontyorlar kerekmi ?</h2>
                <p class="volontyor-text volontyor-text-one text-base font-semibold">Agarda sizga volontyor kerak bolsa, bizning volontyorlar siz uchun doimo <br> yordamga tayyor</p>
                <div class="volontyor-divider"></div>
                <p class="volontyor-text volontyor-text-two text-base font-semibold">Volontyorlar hizmatidan foydalanish uchun bosing</p>
                <a href="#" class="text-2xl py-3 px-52 rounded-xl text-white border-blue-400 border-2 hover:bg-inherit hover:border-2 hover:border-blue-400 hover:text-blue-400 duration-500">Volontyorlar</a>
            </div>
        </div>
        <!-- volontyor end -->

        <!-- NEWS -->
        <div class="news container mx-auto">

            <!-- news-topbar -->
            <div class="news__topbar">
                <h3 class="news__topbar__title">Yangiliklar</h3>
                <a href="#" class="news__topbar__link flex items-center">
                    <span>hammasi</span>
                    <img src="~/assets/images/svg/right-arrow.svg" alt="arrow" class="news__topbar__link__img" width="24" height="24">
                </a>
            </div>

            <!-- news-cards -->
            <div class="news-cards flex items-center">
                <!-- card 1 -->
                <div class="news-cards-item">
                    <div class="news-cards-item-wrapper">
                        <img src="~/assets/images/jpg/card1.jpg" alt="" class="news-cards-item-wrapper-img">
                        <div class="news-cards-item-wrapper-box">
                            <img src="~/assets/images/svg/calendar.svg" alt="date" class="news-cards-item-wrapper-box-img" width="20" height="20">
                            <p class="news-cards-item-wrapper-box-date">12 May 2023 </p>
                        </div>
                    </div>
                    <h1 class="news-cards-item-title mb-4 text-2xl font-bold px-1">Viloyatingiz koordinatori bo'ling!</h1> 
                    <p class="news-cards-item-text">On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by</p>   
                </div>
                <!-- cards 2 -->
                <div class="news-cards-item">
                    <div class="news-cards-item-wrapper">
                        <img src="~/assets/images/jpg/card2.jpg" alt="" class="news-cards-item-wrapper-img">
                        <div class="news-cards-item-wrapper-box">
                            <img src="~/assets/images/svg/calendar.svg" alt="date" class="news-cards-item-wrapper-box-img" width="20" height="20">
                            <p class="news-cards-item-wrapper-box-date">12 May 2023 </p>
                        </div>
                    </div>
                    <h1 class="news-cards-item-title mb-4 text-2xl font-bold px-1">Viloyatingiz koordinatori bo'ling!</h1> 
                    <p class="news-cards-item-text">On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by</p>   
                </div>
                <!-- cards 3 -->
                <div class="news-cards-item">
                    <div class="news-cards-item-wrapper">
                        <img src="~/assets/images/jpg/card3.jpg" alt="" class="news-cards-item-wrapper-img">
                        <div class="news-cards-item-wrapper-box">
                            <img src="~/assets/images/svg/calendar.svg" alt="date" class="news-cards-item-wrapper-box-img" width="20" height="20">
                            <p class="news-cards-item-wrapper-box-date">12 May 2023 </p>
                        </div>
                    </div>
                    <h1 class="news-cards-item-title mb-4 text-2xl font-bold px-1">Viloyatingiz koordinatori bo'ling!</h1> 
                    <p class="news-cards-item-text">On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by</p>   
                </div>
            </div>

        </div>
        <!-- NEWS END -->

        <!-- OFFER -->
        <div class="offer container mx-auto">
            <div class="offer-card">
                <img src="~/assets/images/png/Ixtiyoriylik.png" alt="volunter" class="offer-card-img" width="100" height="100">
                <p class="offer-card-text">Volontyor bo’lish</p>
            </div>
            <div class="offer-card">
                <img src="~/assets/images/png/partners.png" alt="partners" class="offer-card-img" width="100" height="100">
                <p class="offer-card-text">Investor bo’lish</p>
            </div>
        </div>
        <!-- OFFER END -->

        <!-- TASHKILOT -->
        <div class="tashkilot">
            <div class="tashkilot-inner container mx-auto">
                <div class="tashkilot-cart">
                    <h1 class="tashkilot-title">Volontyor va tashkilot</h1>
                    <img src="~/assets/images/jpg/tashkilot1.jpg" alt="card 1" class="tashkilot-left-img" width="584" height="534">
                </div>
                <div class="tashkilot-cart">
                    <img src="~/assets/images/jpg/tashkilot2.jpg" alt="card 2" class="tashkilot-right-img" width="584" height="400">
                    <p class="tashkilot-text">Dunyoni ezgulik tomonlarini izlayotgan Volontyorlar va xayirli ishlarni qilmoqchi bo'lgan barcha tashkilotlar birlashgan yaxshilik maydoniga hush kelibsiz!</p>
                </div>
            </div>
        </div>
        <!-- TASHKILOT END -->
    </div>
</template>
<script setup>

</script>