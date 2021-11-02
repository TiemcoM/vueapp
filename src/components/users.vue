<template>
  <div id="app">
    <h1>Users list</h1>
    <table>
      <thead class="thead-dark">
      <tr>
        <th>ID</th>
        <th>Naam</th>
        <th>Email</th>
        <th>Geregistreerd op</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="user in users" :key="user.id">
        <td>{{ user.id }}</td>
        <td>{{ user.name }}</td>
        <td>{{ user.email }}</td>
        <td>{{ user.created_at.slice(0,10) }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "users",

  data() {
    return {
      users: []
    }
  },
  mounted: function () {
    let access_token = localStorage.getItem("token")
    axios.get('http://127.0.0.1:8000/api/getallusers', {headers: {'Authorization': `Bearer ${access_token}`}})
        .then(response => {
          this.users = response.data
          console.log(this.users)
        })
        .catch(function (error) {
          console.log(error);
        })
  }
}
</script>

<style scoped>

</style>