<template>
  <div
    class="bg-colorNav text-fontColorNav py-3.5 px-6 shadow justify-between items-center"
  >
    <div class="flex items-center cursor-pointer">
      <span class="text-fontColorNav hover:text-primary text-xl">
        <i
          id="navBtn"
          class="fas fa-bars"
          :class="[open ? 'fas fa-xmark' : 'fas fa-bars']"
          @click="openMenu"
        />
      </span>
      <h1 class="text-xl pl-5 font-semibold">Taxi Driver Billing</h1>
    </div>
    <ul
      class="w-1/2 absolute top-0 left-0 bg-colorNav pl-6 mt-14 ease-in-out transition-all duration-300 z-10"
      style="height: calc(100vh - 3.5rem)"
      :class="{ 'opacity-100': open, 'opacity-0': !open }"
    >
      <li v-for="link in links" :key="link.path" class="my-6">
        <router-link class="text-sm hover:text-primary" :to="link.path">
          {{ link.name }}
        </router-link>
      </li>
      <BtnLogIn />
      <!-- <BtnReg /> -->
    </ul>
    <ul
      v-show="menuOpen"
      class="flex flex-col items-center justify-center text-xl text-fontColorNav"
    ></ul>
  </div>
</template>

<script>
import BtnLogIn from "./BtnLogIn.vue";
// import BtnReg from "./BtnReg.vue";
import { ref } from "vue";

export default {
  name: "NavBar",
  components: {
    BtnLogIn,
    // BtnReg,
  },
  props: {},
  setup() {
    let open = ref(false);
    let links = [
      { name: "Home", path: "/" },
      { name: "Dashboard", path: "/dashboard" },
    ];

    function openMenu() {
      open.value = !open.value;
    }

    return { links, open, openMenu };
  },
  data() {
    return {
      menuOpen: false,
    };
  },
};
</script>
