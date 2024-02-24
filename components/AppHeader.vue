<script setup lang="ts">

</script>

<template>
    <header class="flex mb-10 ">
        <div class="flex-1">
            <nuxt-link to="/"><img src="~/assets/imgs/logo.png" width="120px" height="100px" alt="logo" /></nuxt-link>
        </div>
        <nav class="grow">
            <ul class="list-none flex gap-4">
                <li><nuxt-link to="/" class="text-green-800"><span class="fas fa-house"></span>Home</nuxt-link></li>
                <li><nuxt-link to="/blog" class="text-green-800">Blog</nuxt-link></li>
                <li><nuxt-link to="/about" class="text-green-800">About</nuxt-link></li>
            </ul>
        </nav>
        <div class="flex-none user-link">
            <nuxt-link to="/account/create-post" class="mx-3 btn-primary-outline">Post Article</nuxt-link>
            <nuxt-link to="/account/profile" class="text-green-800"><span class="fas fa-user"></span>Profile</nuxt-link>
        </div>
    </header>
</template>

<style scoped></style>