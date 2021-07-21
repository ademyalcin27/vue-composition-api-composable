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
export default {
  components: {
    PostList,
    Spinner,
  },
  data() {
    return {
      posts: null,
      error: null,
      loading: false,
    }
  },
  created() {
    this.getPosts();
  },
  methods: {
   async getPosts() {
        this.loading = true;
        this.error = null;
        this.posts = null
        try {
            let data = await fetch('https://jsonplaceholder.typicode.com/posts');
            if (!data.ok) {
                throw Error('bir hata oldu');
            }
           this.posts = await data.json();
        } catch (err) {
            this.error = err.message
        }finally {
          this.loading = false;
        }
    }
  },
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
