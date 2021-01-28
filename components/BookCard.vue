<template>
  <div class="mb-3" style="max-width: 370px">
    <div
      class="card cursor-pointer"
      style="width: 15rem"
      v-on:click="goToBookDetail(book.bookId)"
    >
      <!-- <img class="card-img-top" src="..." alt="Card image cap" /> -->
      <div class="card-body">
        <h5 class="card-title" style="height: 2em">{{ book.title.slice(0,30) }}</h5>
        <p class="card-text" style="height: 6em;">
          {{ book.description.slice(0,100) }}
        </p>
      </div>
      <div class="card-body text-right">
        <em>{{ book.author }}</em>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    book: Object,
  },
  methods: {
    goToBookDetail: function (bookId) {
      this.$router.push(`/books/${bookId}`)
    },
  },
}
</script>

<style scoped>
.cursor-pointer {
  cursor: pointer;
}
</style>