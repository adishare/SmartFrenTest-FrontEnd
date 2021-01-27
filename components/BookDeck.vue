<template>
  <b-container class="mb-5">
    <div>
      <b-card-group deck>
        <div v-for="(book, index) in book_list" :key="index">
          <book-card :book="book"></book-card>
        </div>
      </b-card-group>
    </div>
  </b-container>
</template>

<script>
import BookCard from './BookCard.vue'
export default {
  components: { BookCard },
  data() {
    return {
      book_list: [
        {
          title: 'Book Title1',
          description: 'Book Description',
          author: 'Book Description',
        },
        {
          title: 'Book Title2',
          description: 'Book Description',
          author: 'Book Description',
        },
        {
          title: 'Book Title3',
          description: 'Book Description',
          author: 'Book Description',
        },
        {
          title: 'Book Title4',
          description: 'Book Description',
          author: 'Book Description',
        },
        {
          title: 'Book Title5',
          description: 'Book Description',
          author: 'Book Description',
        },
        {
          title: 'Book Title6',
          description: 'Book Description',
          author: 'Book Description',
        },
        {
          title: 'Book Title7',
          description: 'Book Description',
          author: 'Book Description',
        },
        {
          title: 'Book Title8',
          description: 'Book Description',
          author: 'Book Description',
        },
        {
          title: 'Book Title9',
          description: 'Book Description',
          author: 'Book Description',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
</style>