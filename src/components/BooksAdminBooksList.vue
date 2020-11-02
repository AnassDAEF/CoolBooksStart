<template>
  <div class="card">
    <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Titre</th>
      <th scope="col">Auteur</th>
      <th scope="col">Année</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(book, idx) in booksList" :key='idx'>
      <th scope="row">{{idx}}</th>
      <td>{{book.title}}</td>
      <td>{{book.author}}</td>
      <td>{{book.year}}</td>
      <td><button @click="goToBookDetails(book.id)" type="button" class="btn btn-secondary btn-sm">Modifier</button></td>
      <td><button @click="deleteBook(book.id)" type="button" class="btn btn-secondary btn-sm">Supprimer</button></td>
    </tr>
  </tbody>
</table>

  </div>

</template>
<script>
import axios from "axios";
const BOOKS_API_ENDPOINT = 'http://localhost:3000/books';
export default {
  name: 'BooksAdminBooksList',
  data:()=>({
    booksList:[]
  }),
  methods:{
    deleteBook(result,bookId){
      this.axios.delete(BOOKS_API_ENDPOINT + bookId).then(
        () =>{
          this.booksList.splice(bookId,1);
        }
      )
      console.log(bookId);
    },
    goToBookDetails(bookId){
      this.$router.push({name:'adminBooksAction', params:bookId});
    },
    async fetchAllBooks(){
      let allBooks = await axios.get(BOOKS_API_ENDPOINT);
      let {data} = allBooks;
      this.booksList = data;
      console.log(this.allBooks);
    }
  },
  async created(){
    await this.fetchAllBooks();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>