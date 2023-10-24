<template>
  <div class="app-wrapper">
    <div class="app">
      <headerNav />
      <router-view />
    </div>
  </div>
</template>

<script>
import headerNav from "./components/headerNav.vue";
export default {
  name: "app",
  components: { headerNav },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
  watch: {},
};
</script>

<style>
#app {
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #89c2fa;
  min-height: 100vh;
}

body {
  margin: 0;
  padding: 0;
  background-image: url(./assets/background.png);
}
</style>
