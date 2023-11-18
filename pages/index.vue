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

        <!-- CONTACT  -->

        <div class="contact container mx-auto">
            <h2 class="contact-title bold">Biz bilan aloqa </h2>
            <div class="contact-cards flex gap-x-12">
                <!-- Socials -->
                <div class="contact-cards-socials p-8 ">
                    <ul class="flex flex-col gap-y-8">
                        <li class="flex item-center gap-x-6">
                            <img src="~/assets/images/svg/sms.svg" alt="sms"><span>volunteersuzb@gmail.com</span></li>
                        <li class="flex item-center gap-x-6">
                            <img src="~/assets/images/svg/call.svg" alt="call"><span>+998 99 408 39 19</span></li>
                        <li class="flex item-center gap-x-6">
                            <img src="~/assets/images/svg/send-2.svg" alt="send"><span>@volunteersuzb</span></li>
                        <li class="flex item-center gap-x-6">
                            <img src="~/assets/images/svg/clock.svg" alt="clock"><span>9:00 _ 22:00</span></li>
                    </ul>
                </div>
                <!-- Form -->
                <div class="contact-cards-form">
                    <p class="contact-cards-form-text mb-8">1 kun davomida faqatgina 1 ta savol yoki taklif yubora olasiz <br> unutmagn !</p>
                    <!-- form -->
                    <form action="">
                        <div class="flex gap-x-14 mb-6">
                            <input type="text" class="contact-cards-form-input" placeholder="Name">
                            <input type="number" class="contact-cards-form-input" placeholder="Phone number">
                        </div>
                        <input type="text" class="w-full contact-textarea mb-6" placeholder="Message">
                        <div class="flex items-center gap-x-14">
                            <div class="">
                                <ul class="flex items-center contact-cards-form-social">
                                    <li><a href="#">
                                        <svg class="social-icons1" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.0013 2.66602C8.6375 2.66602 2.66797 8.63555 2.66797 15.9993C2.66797 22.6544 7.54377 28.1704 13.918 29.1707V19.8535H10.5325V15.9993H13.918V13.0619C13.918 9.72019 15.9085 7.87435 18.9541 7.87435C20.4129 7.87435 21.9388 8.13476 21.9388 8.13476V11.416H20.2575C18.6012 11.416 18.0847 12.4438 18.0847 13.4983V15.9993H21.7825L21.1915 19.8535H18.0847V29.1707C24.4588 28.1704 29.3347 22.6544 29.3347 15.9993C29.3347 8.63555 23.3651 2.66602 16.0013 2.66602Z" fill="#6495ED"/>
                                        </svg>
                                    </a></li>
                                    <li><a href="#">
                                        <svg class="social-icons2" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.3708 2.66797C18.8713 2.67045 19.6317 2.67838 20.2888 2.69794L20.5476 2.70641C20.8465 2.71704 21.1415 2.73037 21.4971 2.74704C22.9159 2.81258 23.8837 3.03704 24.7337 3.36704C25.6125 3.70592 26.3548 4.1637 27.0959 4.90481C27.8359 5.64592 28.2937 6.39037 28.6337 7.26704C28.9625 8.11592 29.1871 9.08481 29.2537 10.5037C29.2696 10.8592 29.2824 11.1542 29.2929 11.4532L29.3013 11.712C29.3208 12.369 29.3297 13.1295 29.3325 14.63L29.3336 15.6243C29.3337 15.7457 29.3337 15.8711 29.3337 16.0004L29.3336 16.3765L29.3328 17.3708C29.3303 18.8713 29.3224 19.6317 29.3028 20.2888L29.2943 20.5476C29.2837 20.8465 29.2704 21.1415 29.2537 21.4971C29.1881 22.9159 28.9625 23.8837 28.6337 24.7337C28.2948 25.6125 27.8359 26.3548 27.0959 27.0959C26.3548 27.8359 25.6092 28.2937 24.7337 28.6337C23.8837 28.9625 22.9159 29.1871 21.4971 29.2537C21.1415 29.2696 20.8465 29.2824 20.5476 29.2929L20.2888 29.3013C19.6317 29.3208 18.8713 29.3297 17.3708 29.3325L16.3765 29.3336C16.2551 29.3337 16.1297 29.3337 16.0004 29.3337L15.6243 29.3336L14.63 29.3328C13.1295 29.3303 12.369 29.3224 11.712 29.3028L11.4532 29.2943C11.1542 29.2837 10.8592 29.2704 10.5037 29.2537C9.08481 29.1881 8.11814 28.9625 7.26704 28.6337C6.38925 28.2948 5.64592 27.8359 4.90481 27.0959C4.1637 26.3548 3.70704 25.6092 3.36704 24.7337C3.03704 23.8837 2.8137 22.9159 2.74704 21.4971C2.7312 21.1415 2.71828 20.8465 2.70781 20.5476L2.69942 20.2888C2.67992 19.6317 2.67102 18.8713 2.66814 17.3708L2.66797 14.63C2.67045 13.1295 2.67838 12.369 2.69794 11.712L2.70641 11.4532C2.71704 11.1542 2.73037 10.8592 2.74704 10.5037C2.81258 9.0837 3.03704 8.11704 3.36704 7.26704C3.70592 6.38925 4.1637 5.64592 4.90481 4.90481C5.64592 4.1637 6.39037 3.70704 7.26704 3.36704C8.11704 3.03704 9.0837 2.8137 10.5037 2.74704C10.8592 2.7312 11.1542 2.71828 11.4532 2.70781L11.712 2.69942C12.369 2.67992 13.1295 2.67102 14.63 2.66814L17.3708 2.66797ZM16.0004 9.3337C12.3165 9.3337 9.3337 12.3197 9.3337 16.0004C9.3337 19.6843 12.3197 22.6671 16.0004 22.6671C19.6843 22.6671 22.6671 19.6809 22.6671 16.0004C22.6671 12.3165 19.6809 9.3337 16.0004 9.3337ZM16.0004 12.0004C18.2096 12.0004 20.0004 13.7905 20.0004 16.0004C20.0004 18.2096 18.2101 20.0004 16.0004 20.0004C13.7912 20.0004 12.0004 18.2101 12.0004 16.0004C12.0004 13.7912 13.7905 12.0004 16.0004 12.0004ZM23.0004 7.3337C22.0813 7.3337 21.3337 8.08024 21.3337 8.99924C21.3337 9.91822 22.0803 10.6659 23.0004 10.6659C23.9193 10.6659 24.6671 9.91938 24.6671 8.99924C24.6671 8.08024 23.9181 7.33254 23.0004 7.3337Z" fill="#6495ED"/>
                                        </svg>
                                    </a></li>
                                    <li><a href="#">
                                        <svg class="social-icons3" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.0013 29.3327C8.6375 29.3327 2.66797 23.3631 2.66797 15.9993C2.66797 8.63555 8.6375 2.66602 16.0013 2.66602C23.3651 2.66602 29.3347 8.63555 29.3347 15.9993C29.3347 23.3631 23.3651 29.3327 16.0013 29.3327ZM11.8548 17.5604L11.8717 17.5497C12.6447 20.1016 13.0312 21.3776 13.0312 21.3776C13.1808 21.7916 13.3867 21.8655 13.6364 21.8317C13.886 21.7979 14.0185 21.6628 14.1815 21.5056C14.1815 21.5056 14.7099 20.9956 15.7667 19.9757L19.1679 22.4924C19.7876 22.8348 20.2351 22.6581 20.3889 21.9163L22.5993 11.4879C22.8433 10.5172 22.4153 10.1279 21.6627 10.4361L8.68529 15.4488C7.79994 15.8047 7.80422 16.3 8.5241 16.5208L11.8548 17.5604Z" fill="#6495ED"/>
                                        </svg>
                                    </a></li>
                                    <li><a href="#">
                                        <svg class="social-icons4" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.3265 5.33398C17.0386 5.3379 18.8204 5.35513 20.7134 5.43096L21.3846 5.46022C23.2906 5.55046 25.195 5.70462 26.1396 5.96798C27.3994 6.32192 28.3897 7.35465 28.7244 8.66374C29.2573 10.7425 29.324 14.7999 29.3322 15.7817L29.3334 15.9852V15.9994C29.3334 15.9994 29.3334 16.0044 29.3334 16.0139L29.3322 16.2173C29.324 17.1992 29.2573 21.2565 28.7244 23.3353C28.385 24.6492 27.3948 25.682 26.1396 26.031C25.195 26.2944 23.2906 26.4485 21.3846 26.5388L20.7134 26.568C18.8204 26.6439 17.0386 26.6611 16.3265 26.6651L16.014 26.6661H16.0001C16.0001 26.6661 15.9954 26.6661 15.9862 26.6661L15.674 26.6651C14.1668 26.6568 7.86493 26.5886 5.86065 26.031C4.60077 25.677 3.61053 24.6444 3.2758 23.3353C2.7429 21.2565 2.67629 17.1992 2.66797 16.2173V15.7817C2.67629 14.7999 2.7429 10.7425 3.2758 8.66374C3.61517 7.3498 4.60541 6.31708 5.86065 5.96798C7.86493 5.41029 14.1668 5.34228 15.674 5.33398H16.3265ZM13.3334 11.3328V20.6661L21.3334 15.9994L13.3334 11.3328Z" fill="#6495ED"/>
                                        </svg>

                                    </a></li>
                                </ul>
                            </div>
                            <button type="submit" class="w-full contact-cards-form-btn">Yuborish</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <!-- CONTACT END -->

        <!-- FOOTER -->

        <FooterView/>

        <!-- FOOTER END -->
    </div>
</template>
<script setup>

</script>