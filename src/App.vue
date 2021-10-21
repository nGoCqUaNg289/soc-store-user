<template>
  <div id="app">
    <AppHeader></AppHeader>
    <router-view></router-view>
    <!-- <Home></Home> -->
    <AppFooter></AppFooter>
  </div>
</template>

<script>
import AppHeader from "./containers/AppHeader.vue";
// import Home from "./components/Home.vue";
import AppFooter from "./containers/AppFooter.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    // Home,
    AppFooter
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}
</style>
