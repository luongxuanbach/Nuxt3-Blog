import { defineStore } from "pinia";

export const useSearchStore = defineStore("search", () => {
  const config = useRuntimeConfig();
  const apiBase = config.public.apiBase;

  const posts = ref([]);
  const loading = ref(false);

  const page = ref(1);
  const limit = ref(5);
  const totalFound = ref(0);

  const getQueryParams = () => {
    const query = {
      _page: page.value,
      _limit: limit.value,
      _sort: "id",
    };

    return query;
  };

  const fetchPosts = async (opts = {}) => {
    const { data, pending, error, refresh } = await useFetch(
      `${apiBase}/posts`,
      {
        query: getQueryParams(),
        ...opts,
      }
    );

    loading.value = false;

    if (data && !pending.value && !error.value) {
      posts.value = data.value;
    }
  };

  return {
    posts,
    page,
    fetchPosts,
    loading,
    limit,
    totalFound,
  };
});
