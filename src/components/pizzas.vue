<template>
  <h1>Hallo pizza</h1>
  <div id="app">

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
      <tr v-for="pizza in pizzas">
        <td>{{ pizzas.id }}</td>
        <td>{{ pizzas.naam }}</td>
        <td>{{ pizzas.fabrikant }}</td>
        <td>{{ pizzas.prijs }}</td>
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
    axios
        .get('http://127.0.0.1:8000/api/getallpizzas')
        .then(response => {
          this.pizzas = response.data
        })
        .catch(function (error) {
          console.log(error);
        })
  }
}
</script>

<style scoped>

</style>