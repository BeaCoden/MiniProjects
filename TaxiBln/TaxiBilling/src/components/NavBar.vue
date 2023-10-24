<template>
  <div
    class="bg-colorNav text-fontColorNav py-3.5 px-6 shadow justify-between items-center md:flex"
  >
    <div class="flex items-center cursor-pointer">
      <span class="text-fontColorNav text-xl mr-1">
        <i class="fas fa-bars"></i>
      </span>
      <h1 class="text-xl">Taxi Billing</h1>
    </div>
    <ul class="md:flex md:items-center">
      <li class="md:mx-4" v-for="link in links" :key="link.path">
        <router-link class="text-xl hover:text-red-500" :to="link.path">
          {{ link.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>
<!-- <template>
  <header
    class="bg-colorNav text-fontColorNav p-4 flex justify-between items-center"
  >
    <h1 class="text-2xl">My App</h1>
    <button
      v-if="!menuOpen"
      @click="menuOpen = true"
      class="p-2 focus:outline-none"
    >
      ☰
    </button>
    <div
      v-if="menuOpen"
      class="absolute top-0 right-0 mt-12 mr-4 bg-colorNav text-fontColorNav rounded shadow-lg"
    >
      <button @click="menuOpen = false" class="p-2 focus:outline-none">
        &times;
      </button>
      <ul class="mt-2 border rounded shadow-lg">
        <li class="border-b p-2">
          <router-link to="/" @click="menuOpen = false">Home</router-link>
        </li>
        <li class="p-2">
          <router-link to="/about" @click="menuOpen = false">About</router-link>
        </li>
      </ul>
    </div>
  </header>
</template> -->

<script>
export default {
  name: "NavBar",
  data() {
    return {
      menuOpen: false,
    };
  },
  components: {},
  props: {},
  setup() {
    let links = [
      { name: "Home", path: "/" },
      { name: "About", path: "/about" },
      { name: "Dashboard", path: "/dashboard" },
      { name: "Login", path: "/login" },
      { name: "Register", path: "/register" },
    ];
    return { links };
  },
};
</script>
