<template>
 <div class="posts">
    <div v-if="error">{{error}}</div>
    <div v-if="post" class="posts__list">
      <PostList :post="post"/>
    </div>
    <div v-else><Spinner /></div>
  </div>
</template>

<script>
import PostList from '@/components/PostList.vue'
import Spinner from '@/components/Spinner.vue';

import usePromise from '@/composable/usePromise';
import getPost from '@/composable/getPost';

export default {
  name: 'App',
  components: {
    PostList,
    Spinner
  },
  props: ['id'],
  setup(props) {
     const { results, error, loading, fetch} = usePromise(() => getPost(props.id));
    
    fetch();
   
   return {
      post:results,
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
