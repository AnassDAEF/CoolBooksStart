<template>
  <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Libellé Genre</label>
    <input type="text" class="form-control" id="exampleInputEmail1">
  </div>
  
  <button type="submit" class="btn btn-primary" @click='createGenre'>Submit</button>
</form>
</template>



<script>

import axios from "axios"

export default {
  name: 'BooksAdminGenresAction',

  methods:{
    async createGenre()
    {
      const genre = { id:"", label: "Vue POST Request Example", icon: "" };
      const response = await axios.post("http://localhost:3000/genres", genre);
      this.genreId = response.data.id;
    }
  },

  created() {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>