<template>
<section>
   <div 
      v-if="!loginSuccessFul">
      <p> Type your email id and click go. Post that you shall see our articles </p>
      <b-form inline>
        <label  for="inlineFormInputName2">Email ID</label>
        <b-form-input
              id="emailIdInput"
              type="email"
              v-model="emailID"
              required
              placeholder="Enter email" />
        <b-button variant="primary" @click="login">Go</b-button>
      </b-form>
    </div>
  <div 
      v-if="loginSuccessFul">
  <h1>Welcome {{ emailID }}</h1>
  <div
      v-for='(aticle, index) of articleObjList' 
      :key='index'>
        <article-blk
          :title='aticle.title'
          :description='aticle.description'
          :likeCount='aticle.likeCount'
          :dislikeCount='aticle.dislikeCount'
          @like='likeIt(aticle)'
          @dislike='disLikeIt(aticle)'></article-blk>
  </div></div>
</section>
</template>
<script>
import ArticleBlk from './articles/ArticleBlk.vue'
export default {
  components: {
    'article-blk': ArticleBlk
  },
  data: function () {
    return {
      emailID: '',
      loginSuccessFul: false,
      userChoice: [
        // {id, like, dislike}
      ],
      articleObjList: [
        {
          id: 1,
          title: 'The Little Yellow Monster',
          description: 'The tale of a little furry monster who lives inside a sock, and all the fun he has with his friends.',
          likeCount: 0,
          dislikeCount: 0
        },
        {
          id: 2,
          title: 'Toast',
          description: 'Some naughty animals on baby’s picnic want her toast!',
          likeCount: 0,
          dislikeCount: 0
        },
        {
          id: 3,
          title: 'I Can Climb',
          description: 'A little boy learns to climb up everything… but how will he ever get down again?',
          likeCount: 0,
          dislikeCount: 0
        },
        {
          id: 4,
          title: 'What is in the Pot?',
          description: 'Sam wants to know what is in the pot… he’s so hungry !',
          likeCount: 0,
          dislikeCount: 0
        },
        {
          id: 5,
          title: 'Jimmy the Cat and Bobik’s Birthday',
          description: 'Jimmy’s friend Bobik is having a birthday party, and Jimmy and his friends try to decide the perfect presents.',
          likeCount: 0,
          dislikeCount: 0
        }
      ]
    }
  },
  methods: {
    login: function () {
      if (this.$lodash.isEmpty(this.emailID)) {
        return
      }
      this.loginSuccessFul = true
    },
    likeIt: function (aticle) {
      let freshRequest = true
      for (let usr of this.userChoice) {
        if (usr.id === aticle.id) {
          freshRequest = false
          if (usr.dislike) {
            usr.dislike = false
            aticle.dislikeCount--
          } else if (usr.like) {
            usr.like = false
            aticle.likeCount--
          } else {
            aticle.likeCount++
            usr.like = true
          }
        }
      }
      if (freshRequest) {
        this.userChoice.push({id: aticle.id, like: true, dislike: false})
        aticle.likeCount++
      }
      window.localStorage.setItem('articleList', JSON.stringify(this.articleObjList))
      window.localStorage.setItem(this.emailID, JSON.stringify(this.userChoice))
    },
    disLikeIt: function (aticle) {
      let freshRequest = true
      for (let usr of this.userChoice) {
        if (usr.id === aticle.id) {
          freshRequest = false
          if (usr.dislike) {
            usr.dislike = false
            aticle.dislikeCount--
          } else if (usr.like) {
            usr.like = false
            aticle.likeCount--
          } else {
            aticle.dislikeCount++
            usr.dislike = true
          }
        }
      }
      if (freshRequest) {
        this.userChoice.push({id: aticle.id, like: false, dislike: true})
        aticle.dislikeCount++
      }
      window.localStorage.setItem('articleList', JSON.stringify(this.articleObjList))
      window.localStorage.setItem(this.emailID, JSON.stringify(this.userChoice))
    }
  },
  mounted: function () {
    let articleObjectFromLocalStorage = JSON.parse(localStorage.getItem('articleList'))
    let userObjectFromLocalStorage = JSON.parse(localStorage.getItem(this.emailID))
    if (!this.$lodash.isEmpty(articleObjectFromLocalStorage)) {
      this.articleObjList = articleObjectFromLocalStorage
    }
    if (!this.$lodash.isEmpty(userObjectFromLocalStorage)) {
      this.userChoice = userObjectFromLocalStorage
    }
  }
}
</script>
<style lang='scss'>
</style>