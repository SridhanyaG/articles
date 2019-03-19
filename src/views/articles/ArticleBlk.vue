<template>
<section class="article">
  <h3>{{title}}</h3>
  <p>{{description}}</p>
  <ArticleButton
    icon="fa fa-thumbs-up"
    :count="likeCount"
    label="Like"
    evtName="like"></ArticleButton>
  <ArticleButton
   icon="fa fa-thumbs-down"
   :count="dislikeCount"
   label="Dislike"
   evtName="dislike"></ArticleButton>
</section>
</template>
<script>
import ArticleButton from './ArticleButton.vue'

export default {
  components: {
    ArticleButton: ArticleButton
  },
  props: {
    title: {type: String, default: ''},
    description: {type: String, default: ''},
    likeCount: {type: Number, default: 0},
    dislikeCount: {type: Number, default: 0}
  }
}
</script>
<style lang="scss" scoped>
.article {
  padding: 1rem;
}
</style>