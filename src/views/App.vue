<template>
<div>
  <nprogress-container></nprogress-container>
  <main class="container-fluid">
   <router-view ></router-view>
  </main>
  <footer>
</footer>
</div>
</template>

<script>
import NprogressContainer from 'vue-nprogress/src/NprogressContainer'

export default {
  name: 'app',
  components: {
    NprogressContainer
  },
  mounted () {
    window.notifier = this.$awn
  }
}
</script>

<style>
@import "~vue-awesome-notifications/dist/styles/style.css";
@import "~bootstrap/dist/css/bootstrap.css";
@import "~bootstrap-vue/dist/bootstrap-vue.css";

  /* Import Font Awesome Icons Set */
  $fa-font-path: '~font-awesome/fonts/';
  @import '~font-awesome/css/font-awesome.min.css';
</style>
<style lang="scss">
  // Import Main styles for this application
  @import './scss/style';
</style>
