<template>
  <div>
    <!-- <NavBar /> -->
    <h2>Register</h2>
    <form @submit.prevent="submitForm">
      <label for="firstName">First Name:</label>
      <input type="text" id="firstName" v-model="firstName" required />
      <br />
      <label for="lastName">Last Name:</label>
      <input type="text" id="lastName" v-model="lastName" required />
      <br />
      <label for="username">Username:</label>
      <input type="text" id="username" v-model="username" required />
      <br />
      <label for="email">Email:</label>
      <input type="email" id="email" v-model="email" required />
      <br />
      <label for="password">Password:</label>
      <input type="password" id="password" v-model="password" required />
      <br />
      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script>
// import NavBar from "@/components/NavBar.vue";
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
    submitForm() {
      // Send form data to server for registration
      const formData = {
        firstName: this.firstName,
        lastName: this.lastName,
        username: this.username,
        email: this.email,
        password: this.password,
      };
      console.log(formData); // For testing purposes only
      // Reset form fields
      this.firstName = "";
      this.lastName = "";
      this.username = "";
      this.email = "";
      this.password = "";
    },
  },
  components: {
    // NavBar
  },
};
</script>
