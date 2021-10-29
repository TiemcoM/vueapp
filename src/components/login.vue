<template>
  <v-card class="mx-auto">
    <v-card-title class="text-h5 pb-5 grey lighten-2">
      <v-icon class="mr-2">mdi-account-arrow-right</v-icon>
      <h1>Login</h1>
    </v-card-title>
    <v-card-text>
      <v-form>
        <v-text-field
            label="Username"
            prepend-icon="mdi-account-circle"
            v-model="email"
        />
        <v-text-field
            :type="showPassword ? 'text' : 'password'"
            label="Password"
            v-model="password"
            prepend-icon="mdi-lock"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off' "
            @click:append="showPassword = !showPassword"
        />
      </v-form>
    </v-card-text>
    <v-divider></v-divider>
    <v-card-actions>
      <v-btn color="info" @click="login">Login</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "Inlog",

  data () {
    return {
      showPassword: false,
      email: '',
      password: ''
    }
  },
  methods: {
    login() {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: this.email,
          password: this.password,
        })
      };
      fetch("http://127.0.0.1:8000/api/auth/login", requestOptions)
          .then(response => response.json())
          .then(data => {
            console.log(data);
            if (data.user) {
              localStorage.setItem("token", data.user.access_token);
              this.$router.push(this.$route.query.redirect || '/');
              this.$store.commit('login', {email : data.user.email, name : data.user.name});
            }
          });
    }
  }
}
</script>

<style scoped>

</style>