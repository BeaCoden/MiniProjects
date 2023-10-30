<template>
  <div
    class="bg-colorNav text-fontColorNav py-3.5 px-6 shadow justify-between items-center"
  >
    <div class="flex items-center cursor-pointer">
      <span class="text-fontColorNav hover:text-primary text-xl">
        <i
          id="navBtn"
          class="fas fa-bars"
          :class="[menuOpen ? 'fas fa-xmark' : 'fas fa-bars']"
          @click="toggleMenu"
        />
      </span>
      <h1 class="text-xl pl-5 font-semibold">Taxi Driver Billing</h1>
    </div>
    <ul
      id="navmenu"
      class="w-1/2 absolute top-0 left-0 bg-colorNav pl-6 mt-14"
      style="height: calc(100vh - 3.5rem)"
      :class="{
        'opacity-100 animate__animated animate__fadeInLeft': menuOpen,
        'opacity-0 animate__animated animate__fadeOutLeft': menuClosing,
        hidden: !menuOpen,
      }"
    >
      <li
        v-for="link in links"
        :key="link.path"
        class="my-6 animate__animated animate__fadeInLeft"
        :class="{ 'animate__delay-0.1s': menuOpen }"
      >
        <router-link class="text-sm hover:text-primary" :to="link.path">
          {{ link.name }}
        </router-link>
      </li>

      <div class="flex flex-col">
        <BtnLogIn />
        <BtnLogOut />
        <!-- <BtnReg /> -->
      </div>
      <FooterBar />
    </ul>
    <ul
      v-show="menuOpen"
      class="flex flex-col items-center justify-center text-xl text-fontColorNav"
    ></ul>
  </div>
</template>

<script>
import BtnLogIn from "./BtnLogIn.vue";
import BtnLogOut from "./BtnLogOut.vue";
import FooterBar from "./FooterBar.vue";
import { ref, watch } from "vue";

export default {
  name: "NavBar",
  components: {
    BtnLogIn,
    BtnLogOut,
    FooterBar,
  },
  props: {},
  setup() {
    let menuOpen = ref(false);
    let menuClosing = ref(false);
    let links = [
      { name: "Dashboard", path: "/" },
      { name: "Settings", path: "/settings" },
    ];

    function toggleMenu() {
      if (menuOpen.value) {
        menuClosing.value = true;
        setTimeout(() => {
          menuOpen.value = false;
          menuClosing.value = false;
        }, 500);
      } else {
        menuOpen.value = true;
      }
    }

    watch(menuOpen, () => {
      if (menuOpen.value) {
        menuClosing.value = false;
      }
    });

    return { links, menuOpen, menuClosing, toggleMenu };
  },
};
</script>
