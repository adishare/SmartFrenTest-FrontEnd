<template>
  <div className="view-home">
    <div class="d-none d-md-block mt-5">
      <b-container>
        <b-jumbotron
          bg-variant="info"
          text-variant="white"
          class="border-radius-0"
        >
          <template #header>Books</template>
          <template #lead> Book Repository </template>
        </b-jumbotron>
      </b-container>
    </div>
    <div class="container mb-3">
      <div class="row">
        <div class="col text-right">
          <button
            class="btn btn-success"
            @click="$router.push('/books/create')"
          >
            + Add New Book
          </button>
        </div>
      </div>
    </div>

    <book-deck></book-deck>
  </div>
</template>

<script>
import BookDeck from '~/components/BookDeck.vue'
import Footers from '~/components/Footers.vue'
import Navbar from '~/components/Navbar.vue'

export default {
  components: { Navbar, BookDeck, Footers },
}
</script>

<style scoped>
</style>