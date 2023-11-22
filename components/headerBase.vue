<template>
    <div>
        <div class="header">
            <div class="header-inner container mx-auto flex items-center justify-between">
                <a href="#" class="logo">
                    <img src="~/assets/images/svg/logo.svg" alt="logo" width="216" height="68">
                </a>
                <div class="header-menu flex items-center">
                    <nav class="mr-4" :class="navbarToggle">
                        <ul class="flex items-center gap-x-8 2xl:gap-x-4">
                            <li><a class="text-base" href="#">Bosh sahifa</a></li>
                            <li><div class="flex items-center gap-x-2"><span class="text-base">Biz haqimizda</span><img src="~/assets/images/svg/chevron.svg" alt="chevron"></div></li>
                            <li><a class="text-base" href="#">Tadbirlar</a></li>
                            <li><a class="text-base" href="#">Yangiliklar</a></li>
                            <li><div class="flex items-center gap-x-2">
                                <span class="text-base">Volontyor</span><img src="~/assets/images/svg/chevron.svg" alt="chevron">
                            </div></li>
                        </ul>
                    </nav>
                    <div class="header-menu-bar flex items-center">
                        <div :class="search" class="search mr-4 flex items-center">
                            <div class="header-search-full border p-1 rounded-md " :class="hideBar">
                            <form action="" class="flex item-center gap-x-2">
                                    <input type="text" class="w-full px-2 border-inherit outline-0 text-gray-400 text-base search-box">
                                    <img @click="hideSearchbar" src="~/assets/images/svg/backspace.svg" alt="back" class="hover:rotate-90">
                                    <button type="btn" class="text-base text-white py-1.5 px-4 bg-cyan-600 rounded-md ">Qidirish</button>
                                </form>
                            </div>
                            <button :class="showBar" class="search-btn p-2" @click="searchBar">
                                <img class="motion-safe:animate-bounce" src="~/assets/images/svg/search.svg" alt="search" width="24" height="24">
                            </button>

                        </div>
                        <div class="lang mr-2 flex items-center rounded-md">
                            <div class="flex items-center lang-showbar" :class="langBar">
                                <ul class="lang-list flex items-center gap-x-4 px-4">
                                    <li>UZB</li>
                                    <li>RUS</li>
                                    <li>USA</li>
                                </ul>
                                <div class="border-none lang-divider p-0"></div>
                            </div>
                            <button class="lang-btn p-2 rounded-md" @click="toggleLang">
                                <img src="~/assets/images/svg/globe.svg" alt="" class="lang-btn-img" >
                            </button>
                        </div>
                        <a href="#" class="header-menu-bar-links join p-2 mr-2">Azo bo'lish</a>
                        <a href="#" class="header-menu-bar-links donation p-2 ">Hayriya</a>
                    </div>
                </div>
            </div> 
        </div>
        
    </div>
</template>
<script setup>
import {ref} from 'vue';
const hideBar = ref('unknown')
const showBar = ref('')
const navbarToggle = ref('')
const search = ref('')
const langBar = ref('unknown')
const hideme = ref(true)
function searchBar(){
    hideBar.value = ''
    showBar.value = 'unknown'
    navbarToggle.value = 'unknown'
}
function hideSearchbar(){
    hideBar.value = 'unknown'
    showBar.value = ''
    navbarToggle.value = ''
}
function toggleLang(){
    langBar.value = langBar.value == 'unknown' ? '' : 'unknown'
}
</script>

<style>
.unknown{
    display: none;
    transition: 500ms;
}
</style>