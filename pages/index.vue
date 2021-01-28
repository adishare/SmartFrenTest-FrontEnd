<template>
  <div className="view-home">
    
    <page-header 
        :pageTitle="`Book App`"
        :pageSubtitle="`Repository`"
    />

    <div class="container mb-3">
      <div class="row">
        <div class="col text-right">
          <button
            class="btn btn-danger"
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
import PageHeader from '~/components/PageHeader.vue'

export default {
  components: { Navbar, BookDeck, Footers, PageHeader },
}
</script>

<style scoped>
</style>