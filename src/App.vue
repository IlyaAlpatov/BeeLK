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

<style scoped>
  #app {
    text-align: center;
    display: grid;
    grid-template-columns: 200px auto;
    grid-template-rows: 108px auto;
    gap: 20px;
  }

  aside {
    grid-column: 1 / 2;
    grid-row: 1 / 3;
  }

  main {
    justify-self: center;
  }
</style>
