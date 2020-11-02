<template>
  <div class="card">
    <form>
  <div class="form-group">
    <label >Titre</label>
    <input type="text" v-model="selectedBook.title" class="form-control" aria-describedby="emailHelp" placeholder="Titre">
  </div>
  <div class="form-group">
    <label >Auteur</label>
    <input type="text" v-model="selectedBook.author" class="form-control" placeholder="Auteur">
  </div>
    <div class="form-group">
    <label >Année</label>
    <input type="text" v-model="selectedBook.year" class="form-control"  placeholder="Année">
  </div>
    <div class="form-group">
    <label>Résumé</label>
    <input type="text" v-model="selectedBook.resume" class="form-control" placeholder="Résumé">
  </div>
    <div class="form-group">
    <label >Genre</label>
    <select v-model="selected">
      <option v-for="(genre, idx) in allgenres" v-bind:key="idx">
        {{ genre.label }}
      </option>
    </select>
  </div>
  <div class="form-group">
    <label >Couverture</label>
    <img :src="selectedBook.coverUri" >
  </div>
  <div class="form-group">
    <label>Disponible</label>
    <input type="checkbox" v-model="selectedBook.ebooks" class="form-control">
  </div>
  <button type="submit" class="btn btn-primary">Ajouter</button>
</form>

  </div>

</template>
<script>
import axios from "axios";
const BOOKS_API_ENDPOINT = 'http://localhost:3000/books';
const GENRES_API_ENDPOINT = 'http://localhost:3000/genres';
export default {
  name: 'BooksAdminBooksList',
  data:()=>({
    selectedBook:{},
    allBooks: [],
    allgenres:[]
  }),
  methods:{
    async fetchAllBooks(){
      let allBooks = await axios.get(BOOKS_API_ENDPOINT);
      let {data} = allBooks;
      this.booksList = data;
      console.log(this.allBooks);
    },
    async fetchAllGenre(){
      let allgenres = await axios.get(GENRES_API_ENDPOINT);
      let {data} = allgenres;
      this.allgenres = data;
    }
  },
  async created(){
    await this.fetchAllBooks();
    await this.fetchAllBooks();
    let { bookId } = this.$route.params;
    this.selectedBook = this.allBooks.find(book => book.id == bookId);
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