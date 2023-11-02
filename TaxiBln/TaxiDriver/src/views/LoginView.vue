<template>
  <div class="flex h-screen bg-white px-8">
    <div class="w-full max-w-xs m-auto">
      <header>
        <!-- Logo -->
        <img
          class="w-60 mx-auto mb-10"
          src="../assets/img/logoTextLogin.png"
          alt="Logo von Taxi Billing"
        />
      </header>

      <!-- Login-Formular -->
      <form>
        <div>
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
          >
            <i
              class="eye-icon"
              :class="showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'"
            ></i>
          </span>
        </div>
        <a
          class="text-pink-700 hover:text-fontColor text-xs self-end cursor-pointer"
          >Passwort vergessen?</a
        >
        <div class="flex justify-between w-full pt-7">
          <!-- Registrierung und Login-Buttons -->
          <button
            type="button"
            class="bg-primary font-semibold text-bodyColor px-5 py-2 rounded-lg hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-opacity-50"
          >
            Registrieren
          </button>

          <button
            type="submit"
            class="bg-primary font-semibold text-bodyColor px-5 py-2 rounded-lg hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-opacity-50"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style></style>
