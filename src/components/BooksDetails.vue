<template>
  <div class="row">
    <div class="col-lg-3">
      <img :src="currentBook.coverUri">
    </div>
    <div class="col-lg-9">
      <div class="col-lg-12">
        {{ currentBook.title }} - {{ currentBook.author }}
        publié en {{ currentBook.year }}
      </div>
      <div class="col-lg-12">
          {{ currentBook.resume }}
      </div>
    </div>
  </div>
</template>


<script>

import axios from 'axios'
const PHOTOS_API_ENDPOINT = "http://localhost:3000/books"

export default {
  name: 'BooksDetails',

  data:()=>({
      currentBook:{}
    }),
  async created(){
      let { bookId } = this.$route.params;
      let currentBook = await axios.get(PHOTOS_API_ENDPOINT + '/' + bookId);
      let { data } = currentBook;
      this.currentBook = data;
      console.log(this.currentBook)
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>