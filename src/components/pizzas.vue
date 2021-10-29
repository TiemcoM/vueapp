<template>
  <div id="app">
    <h1>Pizza list</h1>
    <table>
      <thead class="thead-dark">
      <tr>
        <th>ID</th>
        <th>Naam</th>
        <th>Fabrikant</th>
        <th>Prijs</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="pizza in pizzas" :key="pizza.id">
        <td>{{ pizza.id }}</td>
        <td>{{ pizza.naam }}</td>
        <td>{{ pizza.fabrikant }}</td>
        <td>{{ pizza.prijs }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "pizzas",

  data() {
    return {
      pizzas: []
    }
  },
  mounted: function () {
    let access_token = localStorage.getItem("token")
    axios.get('http://127.0.0.1:8000/api/getallpizzas', {headers: {'Authorization': `Bearer ${access_token}`}})
        .then(response => {
          this.pizzas = response.data
          console.log(this.pizzas)
        })
        .catch(function (error) {
          console.log(error);
        })
  }
}
</script>

<style scoped>

</style>