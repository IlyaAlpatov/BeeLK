<template>
  <div id="app">
    <header-component></header-component>
    <menu-component></menu-component>
    <main>
      <keep-alive>
        <router-view/>
      </keep-alive>
    </main>
  </div>
</template>

<script>
import headerComponent from './components/headerComponent.vue'
import menuComponent from './components/menuComponent.vue'

export default {
  name: 'App',
  components: {
    headerComponent,
    menuComponent
  },
}
</script>

<style lang="scss" scoped>

@import 'assets/scss/_variables.scss';
@import 'assets/scss/_mixins.scss';

  #app {
    text-align: center;
    display: grid;
    grid-template-columns: 1fr 20fr;
    grid-template-rows: 88px auto;
    gap: 10px;
  }

  aside {
    grid-column: 1 / 2;
    grid-row: 1 / 3;
  }

  // main {
  //   justify-self: center;
  // }
</style>
