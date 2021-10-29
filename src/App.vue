<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img alt="Tiemco Meernik" class="shrink mr-2" contain src="https://tiemcomeernik.nl/favicon/android-icon-192x192.png" transition="scale-transition" width="40"/>
        <v-btn to="/" class="mr-2 primary">
          Home
        </v-btn>
        <v-btn to="/about" class="mr-2 primary">
          About
        </v-btn>
        <div v-if="$store.state.loggedin">
        <v-btn to="/pizzas" class="mr-2 primary">
          Pizza's
        </v-btn>
          <v-btn to="/users" class="mr-2 primary">
            Users
          </v-btn>
        </div>
      </div>

      <v-spacer></v-spacer>

      <div v-if="!$store.state.loggedin">
        <v-btn to="/Login" class="mr-2 ml-2  primary">
          <span class="mr-2">Login</span>
        </v-btn>
        <v-btn to="/Register" class="mr-2 ml-2  primary">
          <span class="mr-2">Register</span>
        </v-btn>
      </div>
      <div v-if="$store.state.loggedin">
        {{ $store.state.name }}
        <v-btn to="/logout" class="mr-2 ml-2  primary">
          <span class="mr-2">Logout</span>
        </v-btn>
      </div>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),

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
};
</script>
