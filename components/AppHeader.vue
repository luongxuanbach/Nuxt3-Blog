<script setup lang="ts">

</script>

<template>
    <header>
        <div>
            <nuxt-link to="/"><img src="~/assets/imgs/logo.png" width="120px" height="100px" alt="logo" /></nuxt-link>
        </div>
        <nav>
            <ul>
                <li><nuxt-link to="/" class="text-green-800">Home</nuxt-link></li>
                <li><nuxt-link to="/blog" class="text-green-800">Blog</nuxt-link></li>
                <li><nuxt-link to="/about" class="text-green-800">About</nuxt-link></li>
                <li><nuxt-link to="/account/profile" class="text-green-800">Profile</nuxt-link></li>
            </ul>
        </nav>
    </header>
</template>

<style scoped></style>