<template>
  <div class="card">
    <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Titre</label>
    <input type="text" v-model="selectedBook.title" class="form-control" aria-describedby="emailHelp" placeholder="Titre">
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Auteur</label>
    <input type="text" v-model="selectedBook.author" class="form-control" placeholder="Auteur">
  </div>
    <div class="form-group">
    <label for="exampleInputPassword1">Année</label>
    <input type="text" v-model="selectedBook.year" class="form-control"  placeholder="Année">
  </div>
    <div class="form-group">
    <label for="exampleInputPassword1">Résumé</label>
    <input type="text" v-model="selectedBook.resume" class="form-control" placeholder="Résumé">
  </div>
    <div class="form-group">
    <label for="exampleInputPassword1">Genre</label>
    <input type="text" v-model="selectedBook.genre.label" class="form-control" placeholder="Genre">
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Couverture</label>
    <input type="text" v-model="selectedBook.coverUri" class="form-control" placeholder="Genre">
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Disponible</label>
    <input type="text" v-model="selectedBook.ebooks" class="form-control" placeholder="Genre">
  </div>
  <button type="submit" class="btn btn-primary">Ajouter</button>
</form>

  </div>

</template>
<script>
//import axios from "axios";
//const BOOKS_API_ENDPOINT = 'http://localhost:3000/books';
//const GENRES_API_ENDPOINT = 'http://localhost:3000/genres';
export default {
  name: 'BooksAdminBooksList',
  data:()=>({
    selectedBook:{},
    genres:[]
  }),
  methods:{
   
  },
  async created(){
    await this.fetchAllBooks();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
<script>
export default {
  name: 'BooksAction',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>