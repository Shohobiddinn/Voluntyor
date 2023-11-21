<template>
    <div>
         <div class="auth-vol h-screen">
            <div class="container mx-auto">
                <div class="auth-vol-logo pt-20 mb-8">
                    <img src="~/assets/images/svg/auth-logo.svg" alt="">
                </div>
                <div class="flex justify-between items-center">
                    <img src="~/assets/images/png/auth-phone.png" alt="Phone">
                    <div class="auth-vol-login">
                        <h3 class="auth-vol-login-title mb-6">Tizimga kirish</h3>
                        <form action="">
                            <p class="text-[#2F508C] text-base font-semibold">Telefon raqamingizni kiriting</p>
                            <div class="flex items-center justify-beween gap-x-3 border w-full px-4 py-2.5 mb-10 border-gray-500 rounded-md">
                                <input type="number" class="auth-vol-login-input w-full border-none outline-none" placeholder="+998">
                                <img src="~/assets/images/svg/auth-call.svg" alt="">
                            </div>
                            <button type="submit" class="w-full py-3 px-2 bg-[#6495ED] rounded-md auth-vol-login-btn">Kirish</button>
                        </form>
                    </div>
                </div>
            </div>
         </div>
    </div>
</template>
<script setup>
</script>
<style>


</style>