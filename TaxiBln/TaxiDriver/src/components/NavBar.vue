<template>
  <div
    class="bg-colorNav text-fontColorNav py-3.5 px-6 shadow justify-between items-center md:flex"
  >
    <div class="flex items-center cursor-pointer">
      <span class="text-fontColorNav text-xl mr-1">
        <i class="fas fa-bars" />
      </span>
      <h1 class="text-xl">Taxi Billing</h1>
    </div>
    <ul class="md:flex md:items-center">
      <li v-for="link in links" :key="link.path" class="md:mx-4">
        <router-link class="text-xl hover:text-red-500" :to="link.path">
          {{ link.name }}
        </router-link>
      </li>
      <BtnReg />
      <BtnLog />
    </ul>
    <ul
      v-show="menuOpen"
      class="md:hidden flex flex-col items-center justify-center text-xl text-fontColorNav"
    ></ul>
  </div>
</template>

<script>
import BtnLog from "./BtnLog.vue";
import BtnReg from "./BtnReg.vue";

export default {
  name: "NavBar",
  components: {
    BtnReg,
    BtnLog,
  },
  props: {},
  setup() {
    let links = [
      { name: "Home", path: "/" },
      { name: "About", path: "/about" },
      { name: "Dashboard", path: "/dashboard" },
    ];
    return { links };
  },
  data() {
    return {
      menuOpen: false,
    };
  },
};
</script>
