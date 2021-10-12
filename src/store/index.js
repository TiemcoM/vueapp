import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // standaard URLs
    site_url: 'http://localhost:8000',

    // standaardinstellingen voor snackbar
    snackbar: false,
    snackbar_text: "My timeout is set to 6000.",
    snackbar_timeout: 6000,

    // login informatie
    info_login: null,
  },
  mutations: {
    save_login(state, data) {
      if (data.bSucces) {
        state.info_login = data.output;
        state.info_login.bLogin = true;
        //console.log("inloggen gelukt, inlog_login opgeslagen in state van Vuex");
      } else {
        state.info_login = { bLogin: false }
        //console.log("inloggen mislukt, inlog_login opgeslagen in state van Vuex en bevat alleen: bLogin: false ");
      }

      // bereken expired time voor inlog voor Cookie en gebruik in applicatie
      const d = new Date();
      let exmin = 5; //5 min exipire
      d.setTime(d.getTime() + exmin * 60 * 1000);

      // sla expired date in state.info_logi op
      state.info_login.exdate = d.toUTCString();

      // set het cookie "info_login_cookie" met de gegevens die in "state.info_login" staan
      document.cookie = "info_login_cookie=" + JSON.stringify(state.info_login) + ";expires =" + d.toUTCString() + ";path=/";
      //console.log("cookie info_login_cookie is set en state bLogin = true");

      //localStorage.setItem("info_login", JSON.stringify(data.output));
      //console.log("info_login from LocalStorage = ", JSON.parse(localStorage.getItem("info_login")));
    },
    logout(state) {
      document.cookie = "info_login_cookie= ; expires = Thu, 01 Jan 1970 00:00:00 GMT";
      state.info_login = null;
    }

    // setCookie (name, value, exmin) {
    //     const d = new Date();
    //     d.setTime(d.getTime() + exmin * 60 * 1000);
    //     let expires = "expires=" + d.toUTCString();
    //     document.cookie = name + "=" + value + ";" + expires + ";path=/";
    // },

    // getCookie (cname) {
    //     let name = cname + "=";
    //     let decodedCookie = decodeURIComponent(document.cookie); // specialCharacters oplossen
    //     let ca = decodedCookie.split(";");
    //     for (let i = 0; i < ca.length; i++) {
    //         let c = ca[i];
    //         while (c.charAt(0) == " ") { c = c.substring(1); }
    //         if (c.indexOf(name) == 0) { return c.substring(name.length, c.length); }
    //     }
    //     return "";
    // },

    // checkCookie ({dispatch}) {
    //     let user = this.getCookie("username");
    //     if (user != "") {
    //         alert("Welcome again " + user);
    //     } else {
    //         user = prompt("Please enter your name:", "");
    //         if (user != "" && user != null) {
    //             setCookie("username", user, 365);
    //         }
    //     }
    // },


  },
  actions: {
  },
  modules: {
  }
})