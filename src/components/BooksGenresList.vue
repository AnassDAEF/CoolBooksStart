<template>
  <div class="row">
    <ul>
      <li v-for='genre in allGenres' :key="genre.id">{{ genre.icon }} {{ genre.label }}</li>
    </ul>
  </div>
</template>

<script>

import axios from "axios";

const PHOTOS_API_ENDPOINT = "http://localhost:3000/genres"

export default {
  name: 'BooksGenresList',
  data:()=>({
    allGenres:[],
  }),
  methods:{
    async fetchAllGenres(){
      let allGenres = await axios.get(PHOTOS_API_ENDPOINT);
      let { data } = allGenres;
      this.allGenres = data;
    },
  }, 
  async created(){
      await this.fetchAllGenres();  
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>