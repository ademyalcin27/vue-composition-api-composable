<template>
  <div class="post">
      <p class="post__item">
        <strong>ID: </strong> {{ post.id }}
      </p>
      <p class="post__item">
          <strong>Title: </strong> {{ post.title }}
      </p>
      <p class="post__item">
          <strong>Body: </strong> {{ post.body }}
      </p>
  </div>
</template>

<script>
export default {
    props: {
        post: {
            type: Object,
            default: () => {}
        }
    }
}
</script>

<style lang="scss" scoped>
    .post {
        display: flex;
        flex-direction: column;
        padding: 10px;
        max-width: 500px;
        text-decoration: none;
        &__item {
            margin: 5px 0;
        }
    }
</style>