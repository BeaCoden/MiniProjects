<template>
  <div
    class="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8"
  >
    <div class="max-w-md w-full">
      <div>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Register
        </h2>
      </div>
      <form @submit.prevent="submitForm" class="mt-8 space-y-6">
        <input type="hidden" name="remember" value="true" />
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="firstName" class="sr-only">First Name</label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              v-model="firstName"
              required
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="First Name"
            />
          </div>
          <div>
            <label for="lastName" class="sr-only">Last Name</label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              v-model="lastName"
              required
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Last Name"
            />
          </div>
          <div>
            <label for="username" class="sr-only">Username</label>
            <input
              id="username"
              name="username"
              type="text"
              v-model="username"
              required
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Username"
              autocomplete=""
            />
          </div>
          <div>
            <label for="email-address" class="sr-only">Email address</label>
            <input
              id="email-address"
              name="email"
              type="email"
              v-model="email"
              autocomplete="email"
              required
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Email address"
            />
          </div>
          <div>
            <label for="password" class="sr-only">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              v-model="password"
              autocomplete="current-password"
              required
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Password"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
// import NavBar from "@/components/NavBar.vue";
import { auth, db } from "../utils/firebase.js";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, doc, setDoc } from "firebase/firestore";

export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async submitForm() {
      try {
        // Benutzer registrieren
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          this.email,
          this.password
        );
        const user = userCredential.user;

        // Benutzerdaten in Firestore speichern
        const userRef = doc(collection(db, "users"), user.uid);
        await setDoc(userRef, {
          firstName: this.firstName,
          lastName: this.lastName,
          username: this.username,
          email: this.email,
          // andere Daten hier
        });
        this.$router.push({ name: "login" });

        // Optional: Benutzer weiterleiten oder eine Bestätigungsnachricht anzeigen
      } catch (error) {
        if (error.code === "auth/email-already-in-use") {
          // Sie könnten auch einen Daten-Property als Fehlerstatus verwenden
          // und ihn in Ihrem Template anzeigen.
          alert(
            "Die E-Mail-Adresse ist bereits in Gebrauch. Bitte verwenden Sie eine andere E-Mail-Adresse oder melden Sie sich an."
          );
        } else {
          console.error("Fehler beim Registrieren des Benutzers: ", error);
        }
      }
    },
  },
  components: {
    // NavBar
  },
};
</script>
