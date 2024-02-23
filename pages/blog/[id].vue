<script setup lang="ts">
import { useRoute } from "vue-router";
const config = useRuntimeConfig();

const route = useRoute();
const apiBase = config.public.apiBase;

const { data: post, pending, error, refresh } = await useAsyncData(`posts_p${route.params.id}`, () => $fetch(`${apiBase}/posts/${route.params.id}`));
</script>

<template>
    <div v-if="pending">Loading post...</div>
    <div v-else-if="error" class="text-red-400"><span class="fas fa-exclamation-circle"></span>Error loading result</div>
    <article class="card mb-7 mt-1" v-else>
        <h1 class="text-3xl mb-2 text-center">
            {{ post.title }}
        </h1>
        <p>{{ post.description }}</p>
        <span class="block text-sm mt-2 mb-2">Created by: {{ post.author }}</span>
        <time class="block text-sm text-blue-500"><span class="fas fa-clock"></span>{{ post.created_at }}</time>
    </article>
</template>

<style scoped></style>