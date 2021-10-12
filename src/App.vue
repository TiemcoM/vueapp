<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img alt="Tiemco Meernik" class="shrink mr-2" contain src="https://tiemcomeernik.nl/favicon/android-icon-192x192.png" transition="scale-transition" width="40"/>
        <v-btn to="/home" class="mr-2 primary">
          Home
        </v-btn>
        <v-btn to="/about" class="mr-2 primary">
          About
        </v-btn>

        <v-spacer></v-spacer>

        <v-btn to="/login" class="mr-2 primary">
            Login
        </v-btn>
        <v-btn to="/registreren" class="mr-2 primary">
            Registreren
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
};
</script>
