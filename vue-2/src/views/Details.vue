<template>
 <div class="posts">
   <div v-if="!loading">
    <div v-if="error">{{error}}</div>
    <div v-if="post" class="posts__list">
      <PostList :post="post"/>
    </div>
  </div>
   <div v-else><Spinner /></div>
 </div>
</template>

<script>
import PostList from '@/components/PostList.vue'
import Spinner from '@/components/Spinner.vue';

export default {
  components: {
    PostList,
    Spinner
  },
  props: ['id'],
    data() {
    return {
      post: null,
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
        this.post = null
        try {
            let data = await fetch('https://jsonplaceholder.typicode.com/posts/' + this.id + '020');
            if (!data.ok) {
                throw Error('bir hata oldu');
            }
           this.post = await data.json();
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
