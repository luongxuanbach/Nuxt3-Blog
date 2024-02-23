<template>
    <div class="container">
        <AppHeader />

        <nav>
            <ul>
                <li><a href="#">Update Profile</a></li>
                <li><a href="#">View Profile</a></li>
            </ul>
        </nav>

        <div class="content">
            <slot />
        </div>
        <AppFooter />
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped></style>