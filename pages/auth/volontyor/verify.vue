<template>
    <div>
        <div class="auth-vol-verify bg-[#F3F3F3] h-screen">
            <div class="container mx-auto">
                <div class="auth-vol-verify-head relative">
                    <div class="auth-vol-logo pt-20 mb-16">
                        <img src="~/assets/images/svg/auth-logo.svg" alt="">
                    </div>
                    <div class="rounded-2xl p-6 flex items-center gap-x-8 h-20 bg-[#E53E3E] absolute top-20 right-0 hidden">
                        <p class="auth-vol-verify-alert">Tasqidlash kodi xato kiritildi! Iltimos qaytadan kiriting</p>
                        <img src="~/assets/images/svg/close.svg" alt="close" class="">
                    </div>
                </div>
                <div class="flex justify-between items-center auth-vol-verify-wrapper">
                    <img src="~/assets/images/png/vol-verify.png" alt="Phone"> 
                    <div class="auth-vol-verify-card p-6">
                        <h1 class="auth-vol-verify-card-title mb-8">Tasdiqlash raqami kiriting</h1>
                        <p class="max-w-xs text-center mx-auto text-[#808080cc] font-medium mb-8">+998 99 *** ** 99 raqamiga sms <br>
                            shaklida yuborilgan parolni kiriting</p>
                        <div class="w-full h-20 border mb-8">

                        </div>
                        <div class="flex items-center justify-between mb-10">
                            <p class="text-xl font-medium text-[#00000080]">kodni qayta shuborish vaqti: <span class="text-[#2F508C]">00:50</span> </p>
                            <p class="text-xl text-[#6495ED] font-bold">kodni qayta jo’natish</p>
                        </div>
                        <button type="submit" class="w-full py-3 px-2 bg-[#6495ED] rounded-md auth-vol-login-btn">Kirish</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

</script>