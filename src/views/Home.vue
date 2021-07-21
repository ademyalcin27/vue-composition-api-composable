<template>
  <div class="posts">
    <div v-if="!loading">
      <div v-if="error">{{error}}</div>
      <div v-if="posts" class="posts__list">
        <router-link :to="{name: 'Details', params: {id: post.id}}" v-for="post in posts" :key="post.id">
          <PostList :post="post" />
        </router-link>
      </div>
    </div>
    <div v-else><Spinner /></div>
  </div>
</template>

<script>
import PostList from '@/components/PostList.vue';
import Spinner from '@/components/Spinner.vue';

import usePromise from '@/composable/usePromise'
import getPosts from '@/composable/getPosts'

export default {
  name: 'App',
  components: {
    PostList,
    Spinner,
  },
  setup() {
    const { results, error, loading, fetch} = usePromise(() =>getPosts());
    fetch()
     return {
      posts:results,
      error,
      loading
    }
  }
}
</script>

<style lang="scss">
.posts {
 
  &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>
