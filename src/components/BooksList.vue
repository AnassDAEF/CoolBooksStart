<template>
  <div>
    <div class="row" v-for='book in allBooks' :key="book.id">
      <div class="media mb-1">
        <img class="align-self-center mr-3" :src="book.coverUri" alt="Generic placeholder image">
        <div class="media-body">
          <h5 class="mt-0">{{ book.title }} - {{ book.author }}</h5>
          <p>{{ book.year }}</p>
          <button class="btn btn-primary" @click='displayMore(book.id)'>Détail</button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>

import axios from "axios";

const PHOTOS_API_ENDPOINT = "http://localhost:3000/books"
export default {
  name: 'BooksList',
  data:()=>({
    allBooks:[],
  }), 
  methods:{
    async fetchAllBooks(){
      let allBooks = await axios.get(PHOTOS_API_ENDPOINT);
      let { data } = allBooks;
      this.allBooks = data;
    },

    displayMore(bookId){
      this.$router.push({name:'booksDetails', params:{bookId}})
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