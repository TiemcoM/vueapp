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
      <v-btn color="info" @click="handleLogin">Login</v-btn>
      <v-spacer></v-spacer>
      <v-btn color="message" @click="clearLogin">clear</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import axios from "axios";

export default {
  name: "Inlog",

  data() {
    return {
      dialogInlog: false,
      showPassword: false,

      email: "",
      password: "",

      info_login: null,
    };
  },

  created: function () {
    const name = "info_login_cookie";
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    let ret = null;
    if (parts.length === 2) {
      ret = parts.pop().split(";").shift();
      ret = JSON.parse(ret);
    }
    this.$store.state.inlog_data = ret;
    this.info_login = ret;
  },
  mounted() {
    //console.log("");
    if (this.info_login == "leeg") {
      console.log("cookie info_login from component login.vue is leeg");
    } else {
      //console.log("cookie info_login from component Inlog.vue is  = ", this.info_login);
      this.$store.state.info_login = this.info_login;
      //console.log("state.info_login from mounted() = ", this.$store.state.info_login);
    }
  },
  methods: {
    handleLogin: function () {
      console.log("this.email=", this.email);
      console.log("this.password=", this.password);
      let self = this;
      // let deState = this.$store.state;

      let url = "http://localhost:8000/api/auth/login";
      url += "?email=" + this.email;
      url += "&password=" + this.password;
      axios({
        method: "post",
        url: url,
      })
          .then((response) => {
            console.log("in inlog, response", response);
            if(response.data.data[0]) {
              console.log("inlog juist! email = ", response.data.data[0].email);
              this.info_login = response.data.data[0];
              self.$store.commit("save_login", response.data.data[0]);
            } else {
              console.log("inlog ONJUIST");
            }

            // console.log("state.info_login = ", deState.info_login);
            if (response.data.data[0]) {
              //deState.snackbar_text = deState.info_login.naam + " is succevol ingelogd";
              // deState.snackbar_text = response.data.data[0].inaam +" is succevol ingelogd";
              // deState.snackbar = true;
            } else {
              // deState.snackbar_text = this.inaam +" is NIET ingelogd";
              // deState.snackbar = true;
            }
          })
          .catch(function (error) {
            console.log(error);
          });
      //this.$refs.form.validate();
      this.clearLogin();
      this.dialogInlog = false;
    },

    clearLogin: function () {
      //console.log("wis inputs");
      this.password = "";
      this.email = "";
    },
  },
};
</script>

<style scoped>

</style>