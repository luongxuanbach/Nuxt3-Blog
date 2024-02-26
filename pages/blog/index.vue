<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useSearchStore } from "~/stores/useSearchStore";

useHead({
    title: 'All posts',
    meta: [
        {
            name: 'description',
            content: 'All posts page in my blog portal'
        },
        {
            name: 'ogDescription',
            content: 'All posts page in my blog portal'
        }
    ]
})


const store = useSearchStore();
const { posts, loading, limit, page, totalFound } = storeToRefs(store);

await store.fetchPosts();
</script>

<template>
    <div>
        <h1 class="text-3xl mb-4">All posts</h1>
        <div v-if="loading">Loading data...</div>
        <section v-else-if="posts">
            <div>
                <Post v-for="post in posts" :key="post.id" :post="post" />
            </div>
            <Paginator/>
        </section>
    </div>
</template>

<style scoped></style>