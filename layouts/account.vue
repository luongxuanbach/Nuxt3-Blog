<template>
    <div class="container mx-auto my-4 px-4">
        <AppHeader />

        <nav>
            <ul>
                <li><a href="#">Update Profile</a></li>
                <li><a href="#">View Profile</a></li>
            </ul>
        </nav>

        <div class="content my-5 h-screen">
            <slot />
        </div>
        <AppFooter />
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped>

</style>