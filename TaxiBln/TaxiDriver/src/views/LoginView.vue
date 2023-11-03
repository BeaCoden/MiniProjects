<template>
  <div class="flex h-screen bg-white px-8">
    <div :class="{ 'blur-bg': showPopup }" class="w-full max-w-xs m-auto">
      <header>
        <!-- Logo -->
        <img
          class="w-60 mx-auto mb-10 animate__animated animate__fadeInDown"
          src="../assets/img/logoTextLogin.png"
          alt="Logo von Taxi Billing"
        />
      </header>

      <!-- Login-Formular -->
      <form class="animate__animated animate__fadeInUp">
        <div class="relative">
          <label
            id="userNameLabel"
            for="UserName"
            class="block mb-2 text-fontColor"
            >Benutzername</label
          >
          <input
            class="w-full p-2 mb-6 text-fontColor border-b-2 border-bodyColor bg-bodyTransparent outline-none focus:bg-gray-300"
            type="text"
            name="userName"
            id="userNameLabel"
            aria-describedby="error"
            placeholder="Benutzername"
            required
            autocomplete="on"
          />
        </div>
        <div class="relative">
          <label
            id="passwordLabel"
            class="block mb-2 text-fontColor"
            for="password"
            >Passwort</label
          >
          <input
            :type="showPassword ? 'text' : 'password'"
            class="w-full p-2 mb-5 text-fontColor border-b-2 border-bodyColor bg-bodyTransparent outline-none focus:bg-gray-300"
            name="password"
            id="password"
            aria-describedby="error"
            placeholder="Passwort"
            required
            autocomplete="on"
          />

          <!-- Passwort anzeigen/verbergen Schalter -->
          <span
            class="absolute pt-3 right-2 top-1/2 transform -translate-y-1/2 cursor-pointer text-sm z-10"
            aria-label="Passwort anzeigen/verbergen"
            @click="toggleShowPassword"
          >
            <i
              class="eye-icon"
              :class="showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'"
            ></i>
          </span>
        </div>
        <div class="flex-col font-light">
          <a class="text-pink-700 hover:text-fontColor text-xs cursor-pointer"
            >Passwort vergessen?</a
          >
          <label class="flex items-center">
            <input
              type="checkbox"
              class="form-checkbox h-3 w-3"
              name="rememberMe"
              id="rememberMe"
            />
            <span class="ml-2 text-pink-700 hover:text-fontColor text-xs">
              angemeldet bleiben
            </span>
            <span class="ml-1 info-icon" @click="togglePopup">
              <i class="fas fa-info-circle"></i>
            </span>
          </label>
        </div>
        <div class="flex justify-around w-full pt-7">
          <BtnReg />
          <BtnLogIn />
        </div>
      </form>
    </div>
    <!-- Das Popup-Fenster für die Checkbox "merken" -->
    <div
      v-if="showPopup"
      class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
    >
      <div class="bg-white p-5 rounded text-center">
        <p class="mb-4 text-xs text-fontColor">
          Wenn Sie diese Option auswählen,
          <br />
          bleiben Sie angemeldet.
          <br />
          Abmelden ist jederzeit möglich.
        </p>
        <button
          @click="togglePopup"
          class="bg-secondary hover:bg-primary duration-300 text-xs text-fontColorNav py-2 px-4 rounded"
        >
          Schließen
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import BtnReg from "../components/BtnReg.vue";
import BtnLogIn from "../components/BtnLogIn.vue";

export default {
  name: "LoginView",
  components: {
    BtnReg,
    BtnLogIn,
  },
  data() {
    return {
      showPassword: false,
      showPopup: false,
    };
  },
  methods: {
    toggleShowPassword() {
      this.showPassword = !this.showPassword;
    },
    togglePopup() {
      this.showPopup = !this.showPopup;
      if (this.showPopup) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
    },
  },
};
</script>
<style scoped>
.blur-bg {
  filter: blur(5px);
}
</style>
