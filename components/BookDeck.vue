<template>
  <b-container class="mb-5">
    <div>
      <b-card-group deck>
        <div v-for="book in book_list" :key="book.id">
          <book-card :book="book"></book-card>
        </div>
      </b-card-group>
    </div>
  </b-container>
</template>

<script>
import BookCard from './BookCard.vue'
import { mapState, mapActions } from 'vuex'
export default {
  components: { BookCard },
  created() {
    this.$store.dispatch('book/getListRequest')
  },
  computed: {
    ...mapState({
      book_list: (state) => state.book.list,
    }),
  },
  methods: {
    ...mapActions({
      clearDetail: 'account/clearDetail',
    }),
  },
  data() {
    return {
      
    }
  },
}
</script>

<style lang="scss" scoped>
</style>