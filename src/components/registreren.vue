<template>
  <v-card class="mx-auto">
    <v-card-title class="text-h5 pb-5 grey lighten-2">
      <h1>Register</h1>
    </v-card-title>
    <v-card-text>
      <v-form>
        <v-text-field
            label="email"
            prepend-icon="mdi-account-circle"
            v-model="email"
        />
        <v-text-field
            label="Username"
            prepend-icon="mdi-account-circle"
            v-model="username"
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
      <v-btn color="info" @click="handleRegister">Register</v-btn>
      <v-spacer></v-spacer>
      <v-btn color="message" @click="clearRegister">clear</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "register",

  data () {
    return {
      showPassword: false,
      username: '',
      password: '',
    }
  },

  methods: {
    handleRegister: function ()
    {
      console.log('this.username=', this.username)
      this.clearRegister;
    },
    clearRegister: function (){
      console.log('clearRegister');
      this.username = "";
      this.password = "";
    },
  }
}
</script>

<style scoped>

</style>