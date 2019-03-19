<template>
<b-btn 
  class="articlebtn"
  variant="outline-secondary"
  @click="$parent.$emit(evtName)">
  <i :class="icon"></i>
  {{ label }}
  <b-badge variant="info">{{count}}</b-badge>
</b-btn>
</template>
<script>
export default {
  props: {
    icon: {type: String, default: ''},
    count: {type: Number, default: 0},
    label: {type: String, default: ''},
    evtName: {type: String, default: ''}
  }
}
</script>
<style lang="scss" scoped>
.articlebtn {
  &:hover {
    font-size: 120%;
  }
}
</style>