<template>
<div class="nux-stage">
    <div class=" nav-desktop">
        <ul class="secondary-nav">
           <li v-for="item in menu" :key="item.name"  v-on:click="processRequest(item)" v-bind:style="{width: item.width + '%'}"
            v-bind:class="{ active: (activeMenu != null && item.name === activeMenu.name)  }">
              <router-link :to="item.path">
                <span>{{ item.meta && item.meta.label || item.name }}</span>
              </router-link>
            </li>
        </ul>
      </div>  
    <div class="nav-header-tablet">
        <div class="dropdown hammy-ham-container">
        <span class="nuxicon nuxicon-menu hammy-ham" data-toggle="dropdown"></span>

        <!-- TIER ONE LIST NAV -->
        <ul class="dropdown-menu drawer-list-nav tier-1">
           <li v-for="item in menu" :key="item.name"  v-on:click="processRequest(item)"
            v-bind:class="{ active: (activeMenu != null && item.name === activeMenu.name) }">
              <router-link :to="item.path">
                <span>{{ item.meta && item.meta.label || item.name }}</span>
              </router-link>
            </li>
        </ul>
    </div>
    </div>
</div>
</template>
<script>

export default {
  data: function () {
    return {
      activeMenu: null,
      menu: [
        { name: 'Home', path: '/', meta: { label: 'Home', link: 'Home.vue' }, width: 17 }
      ]
    }
  },
  methods: {
    processRequest: function (obj) {
      this.activeMenu = obj
    },
    getRouteObj: function (name) {
      for (let obj of this.menu) {
        if (obj.name === name) {
          return obj
        }
      }
    }
  },
  mounted: function () {
    this.activeMenu = this.getRouteObj(this.$route.name)
  },
  watch: {
    '$route' (to, from) {
      this.activeMenu = this.getRouteObj(to.name)
    }
  }
}
</script>
<style lang="scss">
ul.drawer-list-nav.tier-1 {
  left: -500px;
}
</style>